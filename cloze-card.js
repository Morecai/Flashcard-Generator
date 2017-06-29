var fs = require("fs");
var inquirer = require("inquirer");

function ClozeCard(cloze, partial, full) {
    this.cloze = cloze;
    this.partial = partial;
    this.full = partial.replace(/ .../, cloze);

}


module.exports = ClozeCard;