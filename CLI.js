var request = require("request");
var inquirer = require("inquirer");
var basic = require("./basic.js");
var cloze = require("./cloze-card.js");
var card = process.argv[2];


switch (card) {
    case "basic-card":
        basic();
        break;

    case "cloze-card":
        cloze();
        break;

    default:
        console.log("Please choose either basic-card or cloze-card");
        break;
}