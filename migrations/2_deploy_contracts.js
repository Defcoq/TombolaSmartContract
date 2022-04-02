var Tombola = artifacts.require("Tombola");

module.exports = function(deployer) {
  deployer.deploy(Tombola,1);
};
