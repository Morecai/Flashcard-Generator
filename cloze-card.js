var fs = require("fs");
var inquirer = require("inquirer");

function ClozeCard(text, cloze, partial) {
    this.full = text;
    this.cloze = cloze;
    this.partial = text.replace(cloze, '...');

}

firstPresident = new ClozeCard('George Washington was the first president of the United States.', 'George Washington');
console.log(firstPresident.partial);
console.log(firstPresident.cloze);
console.log(firstPresident.full);



nowPresident = new ClozeCard('Donald Trump is the current president of the United States.', 'Donald Trump');
console.log(nowPresident.full);
console.log(nowPresident.cloze);
console.log(nowPresident.partial);



module.exports = ClozeCard;