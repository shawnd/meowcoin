var sha256 = require('sha256')

module.exports = class MerkleTree {
    constructor(depth) {
        this.depth = depth;
        this.items = [];
    }

    addItem(item) {
        var maxItems = this.maxItems();
        if(this.items.length < maxItems){
            this.items.push(item);
        } else {
            throw 'MerkleTree reached max of ' + maxItems + ' items of data';
        }
    }

    //creates a Merkle tree if all leaves populated and returns the Merkle tree root
    createTree() {
        var maxItems = this.maxItems();
        if(this.items.length == maxItems){
            this.mBinaryHeap = []; //binary heap
            
            //number of elements in full binary tree of height: this.depth + 1
            var elements = Math.pow(2, this.depth+1) - 1;

            for (var i = maxItems - 1; i < elements; i++) {
                this.mBinaryHeap[i] = sha256(String(this.items[i - (maxItems - 1)]));
            }

            for (var i = maxItems - 2; i >= 0; i--) {
                this.mBinaryHeap[i] = sha256(
                    this.mBinaryHeap[2*i + 1] +
                    this.mBinaryHeap[2*i + 2]);
            }
            return this.mBinaryHeap[0];
        } else {
            throw 'MerkleTree cannot be created without ' + maxItems + ' items of data';
        }
    }

    //returns number of leaves in the Merkle Tree
    maxItems() {
        return Math.pow(2, this.depth);
    }
}