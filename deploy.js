const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const {interface, bytecode} = require('./compile');

const provider = new HDWalletProvider(
'shadow dutch satisfy enemy above clean army purse vendor purity patrol frost',
'https://rinkeby.infura.io/v3/d82e9d2de57042fbb42a4ac0788c179c'
);
const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();
    console.log('attempting to deploy from acc', accounts[0]);

    const result = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({data : bytecode, arguments: ['hi there!']})
        .send({gas: 1000000, from : accounts[0]});
    console.log('Contract deployed to ', result.options.address);
    provider.engine.stop();
    };
deploy();