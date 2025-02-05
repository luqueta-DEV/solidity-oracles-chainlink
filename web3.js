const Web3 = require('Web3');
const web3 = new Web3('https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID');

const contractAddress = '0xYourContractAddress';

const abi = [
    // ABI do contrato inteligente
    {
        "constant": false,
        "inputs": [{"name": "predictedResult", "type": "string"}],
        "name": "makePrediction",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [{"name": "result", "type": "string"}],
        "name": "setActualResult",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "actualResult",
        "outputs": [{"name": "", "type": "string"}],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }
];


const contract = new Web3.eth.contract(abi, contractAddress);



async function PrevisaoDoContrato(predictedResult) {
    const accounts = await web3.eth.getAccounts();
    await contract.methods.makePrediction(predictedResult).send({ from: accounts[0] });
    console.log('Previsão registrada');
}


async function ResultadoReal(result) {
    const accounts = await web3.eth.getAccounts();
    await contract.methods.setActualResult(result).send({ from: accounts[0] });
    console.log('Resultado real definido');
}

async function ChecarPrevisao() {
    const accounts = await web3.eth.getAccounts();
    const correct = await contract.methods.checkPrediction().call({ from: accounts[0] });
    console.log('Previsão correta:', correct);


}
