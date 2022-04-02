

module.exports = {
 

  networks: {
    development: {
      host: "localhost",
      port: 7545,
      network_id: "5777",
      gas: 4600000
    }
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.5",    // Fetch exact version from solc-bin (default: truffle's version)
     
    }
  },

  

};
