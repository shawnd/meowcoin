var BlockChain = require("./src/blockchain.js");
var MerkleTree = require("./src/merkleTree.js");

//Blockchain example
var bc = new BlockChain();
bc.print();

//Merkle tree example
const TREE_DEPTH = 3
var mt = new MerkleTree(TREE_DEPTH);
for (var i = 0; i < Math.pow(2, TREE_DEPTH); i++) {
	mt.addItem({number:i});
}
console.log("Merkle Root: " + mt.createTree());
