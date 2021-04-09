// fetch('https://api.cryptonator.com/api/ticker/btc-usd')
// .then(res => {
//     console.log("RESPONSE, waiting to parse... ", res);
//     return res.json();
// })
// .then(data => {
//     console.log("Data parsed...", data);
// })
// .catch(e => {
//     console.log("ERROR!", e);
// })


const fetchBitcoinPrice = async () => {
    try {
        const res = await fetch('https://api.cryptonator.com/api/ticker/btc-usd');
        const data = await res.json();
        console.log(data.ticker.price);

    } catch (e) {
        console.log("Something Wrong!", e);
    }

}