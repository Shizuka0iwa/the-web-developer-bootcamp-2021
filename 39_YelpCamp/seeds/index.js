const mongoose = require('mongoose');
const cities = require('./cities');
const {places, descriptors} = require('./seedHelpers');
const Campground = require('../models/campground');

mongoose.connect('mongodb://localhost:27017/yelp-camp', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

const sample = array => array[Math.floor(Math.random() * array.length)];

const seedDB = async () => {
    await Campground.deleteMany({});
    for (let i = 0; i < 200; i++) {
        const random1000 = Math.floor(Math.random() * 1000);
        const price = Math.floor(Math.random() * 20) + 10;
        const camp = new Campground({
            author: '609d75881ca96b0cf1d0a7c6',
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A magnam animi repellendus reiciendis soluta tempore. Aspernatur, velit. Saepe, dolor reprehenderit voluptatum ad animi distinctio consectetur sunt at. Iure, minus ad.',
            price,
            geometry: {
                type: "Point",
                coordinates: [
                    cities[random1000].longitude,
                    cities[random1000].latitude
                ]
            },
            images: [
                {
                  url: 'https://res.cloudinary.com/dlueyehnp/image/upload/v1621531861/YelpCamp/r8vb2ktu1xmnk5dmhmc2.jpg',
                  filename: 'YelpCamp/r8vb2ktu1xmnk5dmhmc2'
                },
                {
                  url: 'https://res.cloudinary.com/dlueyehnp/image/upload/v1621531861/YelpCamp/lmwlk52b98t0yi3f97qt.jpg',
                  filename: 'YelpCamp/lmwlk52b98t0yi3f97qt'
                }
              ]
        })
        await camp.save();
    }
}

seedDB().then(() => {
    mongoose.connection.close();
})