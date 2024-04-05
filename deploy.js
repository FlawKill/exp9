const HDWalletProvider=require('@truffle/hdwallet-provider');
const { Web3 } = require('web3');

// const {interface , bytecode}  = require('./compile');
const { abi, evm } = require('./compile');

const provider= new HDWalletProvider(
  
);
const web3=new Web3(provider);

const deploy=async ()=>{
    const accounts = await web3.eth.getAccounts();

    console.log("Attempting to deploy from the account",accounts[0]);
    
 

    const result = await new web3.eth.Contract(abi)
    .deploy({data: evm.bytecode.object, arguments: [],})
    .send({ from: accounts[0], gas: '1000000' });

    console.log('Contract deployed to',result.options.address);
    
    provider.engine.stop();
};
deploy();