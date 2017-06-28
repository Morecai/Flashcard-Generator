var fs = require("fs");
var inquirer = require("inquirer");

function BasicCard(front, back) {
    this.front = front;
    this.back = back;
}

var firstPresident = new BasicCard(
    "Who was the first president of the United States?", "George Washington");

// "Who was the first president of the United States?"
console.log(firstPresident.front);

// "George Washington"
console.log(firstPresident.back);
var nowPresident = new BasicCard('Who is the current president of the United States?', 'Donald Trump');
console.log(nowPresident.front);
console.log(nowPresident.back);
module.exports = BasicCard;