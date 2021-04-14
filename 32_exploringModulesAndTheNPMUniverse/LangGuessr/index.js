const franc = require("franc");
const langs = require("langs");
const input = process.argv[2];
const langCode = (franc(input));

if (langCode === 'und') {
    console.log("SORRY, COULDN'T FIGURE IT OUT! TRY WITH MORE TEXT")
} else {
    const langage = langs.where("3", langCode);
    console.log(langage.name)
}