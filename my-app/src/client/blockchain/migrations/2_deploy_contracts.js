var GarCoin = artifacts.require("./GarCoin.sol");
var GarbageContract  = artifacts.require("./GarbageContract.sol")
module.exports = function(deployer) {
  deployer.deploy(GarCoin, 10000000).then(function() {
    var tokenPrice = 1; // in wei
    return deployer.deploy(GarbageContract, GarCoin.address, tokenPrice);
  });
};
