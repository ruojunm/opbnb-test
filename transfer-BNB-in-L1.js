import { ethers } from "ethers";
const provider = new ethers.providers.JsonRpcProvider();
var blockNumber = await provider.getBlockNumber()
console.log(blockNumber)


const senderWallet = new ethers.Wallet("ac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80", provider);

var b = await provider.getBalance("0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266");
console.log(b.toBigInt())


const gasPrice = await provider.getGasPrice();
const gasLimit = 21000; // Adjust this value based on your transaction complexity

const delay = ms => new Promise(res => setTimeout(res, ms));

async function sendBNBto(toAddress, amount) {
    // send bnb to  toAddress
    var tx = {
        to: toAddress,
        value: ethers.utils.parseEther(amount),
        //gasPrice: gasPrice*2,
        gasLimit: gasLimit,
        maxFeePerGas: 10000000000,
        maxPriorityFeePerGas: 10000000000
    };

    senderWallet.sendTransaction(tx)
        .then((tx) => {
            console.log('Transaction successful! Transaction hash:', tx.hash);

        })
        .catch((error) => {
            console.error('Transaction failed:', error);
        });
    var b = await provider.getBalance(toAddress);
    console.log(b.toBigInt())
    await delay(3000);
}
await sendBNBto("0x0591b04e12Cf792cb1b321fDE27283c15371aCd1", "10000")



