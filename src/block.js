var sha256 = require('sha256')

module.exports = class Block {
    constructor(index, timestamp, data, previousBlock){
        this.index = index;
        this.data = data;
        this.previousBlock = previousBlock;
        this.nonce = 4;
        this.hash = this.hash(this.stringify());
    }

    hash(hashString){
        var hash = ''
        var iteration = 0;

        while(hash.substring(0, this.nonce) != '0'.repeat(this.nonce)) {
            iteration++;
            hash = sha256(hashString + String(iteration));
        }

        return hash;
    }

    stringify(){
        return String(this.index) + String(this.data) + 
            String(this.previousBlock) + String(this.nonce);
    }
}