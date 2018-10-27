var GarbageContract = artifacts.require("./GarbageContract.sol");

module.exports = function(deployer) {
  deployer.deploy(GarbageContract);
};
