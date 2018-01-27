var Block = require("./block.js");

module.exports = class BlockChain {
    constructor(){
        this.chain = [];
        this.chain.push(new Block(1, Date.now(), 'Genesis', 0));
    }

    lastBlockHash(){
    	return this.chain[this.chain.length - 1].hash;
    }

    print(){
        for (var i = 0; i < this.chain.length; i++) {
            console.log(this.chain[i]);
        }
    }
}