const fs = require('fs');
const folderName = process.argv[2] || 'Project'
const data = "hello"

// fs.mkdir('Dogs', { recursive: true }, (err) => {
//     console.log("IN THE CALLBACK!!")
//     if (err) throw err;
// });
try {
    fs.mkdirSync(folderName);
    fs.writeFileSync(`${folderName}/index.html`, data)
    fs.writeFileSync(`${folderName}/app.js`, data)
    fs.writeFileSync(`${folderName}/styles.css`, data)
} catch (e) {
    console.log("SOMETHING WENT WRONG!")
    console.log(e);
}