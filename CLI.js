var request = require("request");
var inquirer = require("inquirer");
var basic = require("./basic.js");
var cloze = require("./cloze-card.js");
var card = process.argv[2];

switch (card) {
    case "basic-card":
        var firstPresident = new basic(
            "Who was the first president of the United States?", "George Washington");
        console.log("\n")
            // "Who was the first president of the United States?"
        console.log(firstPresident.front);

        // "George Washington"
        console.log(firstPresident.back);
        var nowPresident = new basic('Who is the current president of the United States?', 'Donald Trump');
        console.log("\n")
        console.log(nowPresident.front);
        console.log(nowPresident.back);
        break;
    case "cloze-card":
        var firstPres = new cloze('George Washington', ' ... was the first president of the United States.');
        console.log("\n")
        console.log(firstPres.partial);
        console.log(firstPres.cloze);
        console.log("==============================================")
        console.log(firstPres.full);
        console.log("\n")



        var nowPres = new cloze('Donald Trump', ' ... is the current president of the United States.');
        console.log(nowPres.partial);
        console.log(nowPres.cloze);
        console.log("===============================================")
        console.log(nowPres.full);

        break;
    default:
        console.log("Please choose either basic-card or cloze-card");
        break;
}