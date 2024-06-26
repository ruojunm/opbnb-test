import {
    createPublicClient,
    createWalletClient,
    defineChain,
    http,
    parseAbi,
    parseEther,
} from "viem";
import { privateKeyToAccount } from "viem/accounts";
import {
    chainConfig,
    getWithdrawals,
    publicActionsL1,
    publicActionsL2,
    walletActionsL1,
    walletActionsL2,
} from "viem/op-stack";

const sourceId = 714;

const bscLocalnet = /*#__PURE__*/ defineChain({
    id: 714,
    name: 'Binance Smart Chain Localnet',
    nativeCurrency: {
        decimals: 18,
        name: 'BNB',
        symbol: 'tBNB',
    },
    rpcUrls: {
        default: { http: ['http://localhost:8545'] },
    },
    blockExplorers: {
        default: {
            name: 'BscScan',
            url: 'https://testnet.bscscan.com',
            apiUrl: 'https://testnet.bscscan.com/api',
        },
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 17422483,
        },
    },
    testnet: true,
})

const opbnbLocalnet = defineChain({
    id: 901,
    name: "opBNB Localnet",
    nativeCurrency: { name: "tBNB", symbol: "tBNB", decimals: 18 },
    rpcUrls: {
        default: {
            http: ["http://localhost:9545"],
        },
    },
    blockExplorers: {
        default: {
            name: "BscScan",
            url: "https://opbnb-testnet.bscscan.com",
            apiUrl: "https://api-testnet.bscscan.com/api",
        },
    },
    contracts: {
        ...chainConfig.contracts,
        l2OutputOracle: {
            [sourceId]: {
                address: "0x322813Fd9A801c5507c9de605d63CEA4f2CE6c44",
            },
        },
        multicall3: {
            address: "0xca11bde05977b3631167028862be2a173976ca11",
            //   blockCreated: 5022,
        },
        portal: {
            [sourceId]: {
                address: "0x959922bE3CAee4b8Cd9a407cc3ac1C251C2007B1",
                // blockCreated: 17482143,
            },
        },
        l1StandardBridge: {
            [sourceId]: {
                address: "0x68B1D87F95878fE05B998F19b66F4baba5De1aed",
                // blockCreated: 17482143,
            },
        },
    },
    sourceId,
});


async function main() {
    console.log(`opBNB bridge test`);
    const publicClientL1 = createPublicClient({
        chain: bscLocalnet,
        transport: http(),
    }).extend(publicActionsL1());
    const publicClientL2 = createPublicClient({
        chain: opbnbLocalnet,
        transport: http(),
    }).extend(publicActionsL2());
    // 0x0591b04e12Cf792cb1b321fDE27283c15371aCd1
    var privateKey = "0x3b6b5a15db6a8ab7f432a5d7fa211f4bab00f440a2dd53291fb80f82d64fb7a3"


    const account = privateKeyToAccount(privateKey);
    const walletClientL1 = createWalletClient({
        account,
        chain: bscLocalnet,
        transport: http(),
    }).extend(walletActionsL1());
    const walletClientL2 = createWalletClient({
        account,
        chain: opbnbLocalnet,
        transport: http(),
    }).extend(walletActionsL2());


    const txHash = "0xd4b07853d3386897a4f3e3c53663d81933cfb8f006cc397d449dbb24cbd26d60";
    const receipt = await publicClientL2.getTransactionReceipt({ hash: txHash });
    console.log("withdraw receipt", receipt)
    const [withdrawal] = await getWithdrawals(receipt);
    console.log("withdrawal", withdrawal)

    console.log("start finalize")
    // Finalize the withdrawal.
    const finalizeHash = await walletClientL1.finalizeWithdrawal({
        targetChain: walletClientL2.chain,
        withdrawal,
    })
    console.log("finalizeHash", finalizeHash)

    // Wait until the withdrawal is finalized.
    const finalizeReceipt = await publicClientL1.waitForTransactionReceipt({
        hash: finalizeHash
    })
    console.log("finalizeReceipt", finalizeReceipt)
    withdrawal
}

main();