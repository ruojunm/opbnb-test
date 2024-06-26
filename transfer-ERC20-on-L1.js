import { ethers } from "ethers";
//const provider = new ethers.providers.JsonRpcProvider();
const provider = new ethers.providers.JsonRpcProvider('http://localhost:8545');

var blockNumber = await provider.getBlockNumber()
console.log(blockNumber)



// BEP20 token contract address
const erc20Address = '0x5FbDB2315678afecb367f032d93F642f64180aa3';
const ero20Abi =
	[
		{
			"inputs": [],
			"name": "airDropToken",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "spender",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "value",
					"type": "uint256"
				}
			],
			"name": "approve",
			"outputs": [
				{
					"internalType": "bool",
					"name": "",
					"type": "bool"
				}
			],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "initialSupply",
					"type": "uint256"
				}
			],
			"stateMutability": "nonpayable",
			"type": "constructor"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "spender",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "allowance",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "needed",
					"type": "uint256"
				}
			],
			"name": "ERC20InsufficientAllowance",
			"type": "error"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "sender",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "balance",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "needed",
					"type": "uint256"
				}
			],
			"name": "ERC20InsufficientBalance",
			"type": "error"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "approver",
					"type": "address"
				}
			],
			"name": "ERC20InvalidApprover",
			"type": "error"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "receiver",
					"type": "address"
				}
			],
			"name": "ERC20InvalidReceiver",
			"type": "error"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "sender",
					"type": "address"
				}
			],
			"name": "ERC20InvalidSender",
			"type": "error"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "spender",
					"type": "address"
				}
			],
			"name": "ERC20InvalidSpender",
			"type": "error"
		},
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": true,
					"internalType": "address",
					"name": "owner",
					"type": "address"
				},
				{
					"indexed": true,
					"internalType": "address",
					"name": "spender",
					"type": "address"
				},
				{
					"indexed": false,
					"internalType": "uint256",
					"name": "value",
					"type": "uint256"
				}
			],
			"name": "Approval",
			"type": "event"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "to",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "value",
					"type": "uint256"
				}
			],
			"name": "transfer",
			"outputs": [
				{
					"internalType": "bool",
					"name": "",
					"type": "bool"
				}
			],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": true,
					"internalType": "address",
					"name": "from",
					"type": "address"
				},
				{
					"indexed": true,
					"internalType": "address",
					"name": "to",
					"type": "address"
				},
				{
					"indexed": false,
					"internalType": "uint256",
					"name": "value",
					"type": "uint256"
				}
			],
			"name": "Transfer",
			"type": "event"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "from",
					"type": "address"
				},
				{
					"internalType": "address",
					"name": "to",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "value",
					"type": "uint256"
				}
			],
			"name": "transferFrom",
			"outputs": [
				{
					"internalType": "bool",
					"name": "",
					"type": "bool"
				}
			],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "owner",
					"type": "address"
				},
				{
					"internalType": "address",
					"name": "spender",
					"type": "address"
				}
			],
			"name": "allowance",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "account",
					"type": "address"
				}
			],
			"name": "balanceOf",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "decimals",
			"outputs": [
				{
					"internalType": "uint8",
					"name": "",
					"type": "uint8"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "name",
			"outputs": [
				{
					"internalType": "string",
					"name": "",
					"type": "string"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "symbol",
			"outputs": [
				{
					"internalType": "string",
					"name": "",
					"type": "string"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "totalSupply",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"stateMutability": "view",
			"type": "function"
		}
	]


// const gasPrice = await provider.getGasPrice();
// const gasLimit = 21000; // Adjust this value based on your transaction complexity


const gasPrice = await provider.getGasPrice();
const gasLimit = 79443; // Adjust this value based on your transaction complexity
var tx


const erc20Contract = new ethers.Contract(erc20Address, ero20Abi, provider);
const bankAddress = '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266';
const bankBalance = await erc20Contract.balanceOf(bankAddress);
console.log("ERC20 symbol in bank", bankBalance.toString())


const symbol = await erc20Contract.symbol()
console.log("ERC20 symbol", symbol)

const account1Address = '0x0591b04e12Cf792cb1b321fDE27283c15371aCd1';
const balance = await erc20Contract.balanceOf(account1Address);
console.log('account1Address balance for ERC20 symbol:', balance.toString());


//check bnb balance
const bnbBalance = await provider.getBalance(account1Address);
console.log('BNB balance for account 1:', bnbBalance.toString());

const transferAmount = ethers.utils.parseUnits('1000', 18); // 18 decimals for ERC20 token

const allowance = await erc20Contract.allowance(bankAddress, erc20Contract.address);
console.log('Allowance for account 1:', allowance.toString());

console.log({
	gasPrice: gasPrice,
	gasLimit: gasLimit,
})


// Create a signer for account 1
// var privateKey = "3b6b5a15db6a8ab7f432a5d7fa211f4bab00f440a2dd53291fb80f82d64fb7a3"   // 0x0591b04e12Cf792cb1b321fDE27283c15371aCd1
// var privateKey = "a87dd6d1ec954bf5f08cc5f85ebded001a0471b6eb1728f84122f535b84b7c33"   // 0xF79056FBaa7345052F25c3a7618D0AA41CA472A2
var privateKey = "ac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80"   // 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266
const signer = new ethers.Wallet(privateKey, provider);

const contractWithSigner = erc20Contract.connect(signer);
console.log('Transfer transaction starts');
tx = await contractWithSigner.transfer(account1Address, transferAmount, {
	gasLimit: gasLimit,
	maxFeePerGas: 10000000000,
	maxPriorityFeePerGas: 10000000000
});
console.log('Transfer transaction sent! Transaction hash:', tx.hash);

