import { ethers } from "ethers";
import optimism from "@eth-optimism/sdk";

var L1_RPC = 'http://localhost:8545'
var L2_RPC = 'http://localhost:9545'


// Connect to your local BSC node
const bscProvider = new ethers.providers.JsonRpcProvider(L1_RPC);
// Connect to your local Opbnb node
const opbnbProvider = new ethers.providers.JsonRpcProvider(L2_RPC);

const l1ChainId = await bscProvider.getNetwork().then(network => network.chainId)
const l2ChainId = await opbnbProvider.getNetwork().then(network => network.chainId)

// 0x0591b04e12Cf792cb1b321fDE27283c15371aCd1
var privateKey = "3b6b5a15db6a8ab7f432a5d7fa211f4bab00f440a2dd53291fb80f82d64fb7a3"



const l1Wallet = new ethers.Wallet(privateKey, bscProvider)
const l2Wallet = new ethers.Wallet(privateKey, opbnbProvider)



// BEP20 token contract address
import { erc20Address, ero20Abi, L2ToL1MessagePasserAbi, L2ToL1MessagePasserAddress } from "./const.js"
const l1ERC20 = new ethers.Contract(erc20Address, ero20Abi, l1Wallet)
const L2ToL1MessagePasser = new ethers.Contract(L2ToL1MessagePasserAddress, L2ToL1MessagePasserAbi, l2Wallet)
console.log("=========Before withdrawing=============")
console.log("l1 ERC20 balance", ethers.utils.formatEther((await l1ERC20.balanceOf(l1Wallet.address))))
console.log("l2 Native ERC20 token balance", ethers.utils.formatEther((await l2Wallet.getBalance())))
console.log("=======================================\n")
console.log("=========Start withdrawing======================")

let gasLimit = 521800, gasPrice = 12000000000

var withdrawal = await L2ToL1MessagePasser.initiateWithdrawal(
    l1Wallet.address, // _to
    gasLimit, // _gasLimit
    '0x', // _data
    {
        gasPrice: gasPrice,
        gasLimit: gasLimit,
        value: ethers.utils.parseEther("0.5") // withdraw value
    })

console.log("withdrawal tx", withdrawal)
