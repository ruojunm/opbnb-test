// BEP20 token contract address
export const erc20Address = '0x5FbDB2315678afecb367f032d93F642f64180aa3';
export const ero20Abi =
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


export const L2ToL1MessagePasserAddress = '0x4200000000000000000000000000000000000016';

const L2ToL1MessagePasserForgeArtifacts = {
    "abi": [
      {
        "type": "receive",
        "stateMutability": "payable"
      },
      {
        "type": "function",
        "name": "MESSAGE_VERSION",
        "inputs": [],
        "outputs": [
          {
            "name": "",
            "type": "uint16",
            "internalType": "uint16"
          }
        ],
        "stateMutability": "view"
      },
      {
        "type": "function",
        "name": "burn",
        "inputs": [],
        "outputs": [],
        "stateMutability": "nonpayable"
      },
      {
        "type": "function",
        "name": "initiateWithdrawal",
        "inputs": [
          {
            "name": "_target",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "_gasLimit",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "_data",
            "type": "bytes",
            "internalType": "bytes"
          }
        ],
        "outputs": [],
        "stateMutability": "payable"
      },
      {
        "type": "function",
        "name": "messageNonce",
        "inputs": [],
        "outputs": [
          {
            "name": "",
            "type": "uint256",
            "internalType": "uint256"
          }
        ],
        "stateMutability": "view"
      },
      {
        "type": "function",
        "name": "sentMessages",
        "inputs": [
          {
            "name": "",
            "type": "bytes32",
            "internalType": "bytes32"
          }
        ],
        "outputs": [
          {
            "name": "",
            "type": "bool",
            "internalType": "bool"
          }
        ],
        "stateMutability": "view"
      },
      {
        "type": "function",
        "name": "version",
        "inputs": [],
        "outputs": [
          {
            "name": "",
            "type": "string",
            "internalType": "string"
          }
        ],
        "stateMutability": "view"
      },
      {
        "type": "event",
        "name": "MessagePassed",
        "inputs": [
          {
            "name": "nonce",
            "type": "uint256",
            "indexed": true,
            "internalType": "uint256"
          },
          {
            "name": "sender",
            "type": "address",
            "indexed": true,
            "internalType": "address"
          },
          {
            "name": "target",
            "type": "address",
            "indexed": true,
            "internalType": "address"
          },
          {
            "name": "value",
            "type": "uint256",
            "indexed": false,
            "internalType": "uint256"
          },
          {
            "name": "gasLimit",
            "type": "uint256",
            "indexed": false,
            "internalType": "uint256"
          },
          {
            "name": "data",
            "type": "bytes",
            "indexed": false,
            "internalType": "bytes"
          },
          {
            "name": "withdrawalHash",
            "type": "bytes32",
            "indexed": false,
            "internalType": "bytes32"
          }
        ],
        "anonymous": false
      },
      {
        "type": "event",
        "name": "WithdrawerBalanceBurnt",
        "inputs": [
          {
            "name": "amount",
            "type": "uint256",
            "indexed": true,
            "internalType": "uint256"
          }
        ],
        "anonymous": false
      }
    ],
    "bytecode": {
      "object": "0x608060405234801561001057600080fd5b506106d3806100206000396000f3fe6080604052600436106100695760003560e01c806382e3702d1161004357806382e3702d1461012a578063c2b3e5ac1461016a578063ecc704281461017d57600080fd5b80633f827a5a1461009257806344df8e70146100bf57806354fd4d50146100d457600080fd5b3661008d5761008b33620186a0604051806020016040528060008152506101e2565b005b600080fd5b34801561009e57600080fd5b506100a7600181565b60405161ffff90911681526020015b60405180910390f35b3480156100cb57600080fd5b5061008b6103a6565b3480156100e057600080fd5b5061011d6040518060400160405280600581526020017f312e312e3000000000000000000000000000000000000000000000000000000081525081565b6040516100b691906104d1565b34801561013657600080fd5b5061015a6101453660046104eb565b60006020819052908152604090205460ff1681565b60405190151581526020016100b6565b61008b610178366004610533565b6101e2565b34801561018957600080fd5b506101d46001547dffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff167e010000000000000000000000000000000000000000000000000000000000001790565b6040519081526020016100b6565b60006102786040518060c0016040528061023c6001547dffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff167e010000000000000000000000000000000000000000000000000000000000001790565b815233602082015273ffffffffffffffffffffffffffffffffffffffff871660408201523460608201526080810186905260a0018490526103de565b600081815260208190526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166001179055905073ffffffffffffffffffffffffffffffffffffffff8416336103136001547dffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff167e010000000000000000000000000000000000000000000000000000000000001790565b7f02a52367d10742d8032712c1bb8e0144ff1ec5ffda1ed7d70bb05a2744955054348787876040516103489493929190610637565b60405180910390a45050600180547dffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8082168301167fffff0000000000000000000000000000000000000000000000000000000000009091161790555050565b476103b08161042b565b60405181907f7967de617a5ac1cc7eba2d6f37570a0135afa950d8bb77cdd35f0d0b4e85a16f90600090a250565b80516020808301516040808501516060860151608087015160a0880151935160009761040e979096959101610667565b604051602081830303815290604052805190602001209050919050565b806040516104389061045a565b6040518091039082f0905080158015610455573d6000803e3d6000fd5b505050565b6008806106bf83390190565b6000815180845260005b8181101561048c57602081850181015186830182015201610470565b8181111561049e576000602083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b6020815260006104e46020830184610466565b9392505050565b6000602082840312156104fd57600080fd5b5035919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60008060006060848603121561054857600080fd5b833573ffffffffffffffffffffffffffffffffffffffff8116811461056c57600080fd5b925060208401359150604084013567ffffffffffffffff8082111561059057600080fd5b818601915086601f8301126105a457600080fd5b8135818111156105b6576105b6610504565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f011681019083821181831017156105fc576105fc610504565b8160405282815289602084870101111561061557600080fd5b8260208601602083013760006020848301015280955050505050509250925092565b8481528360208201526080604082015260006106566080830185610466565b905082606083015295945050505050565b868152600073ffffffffffffffffffffffffffffffffffffffff808816602084015280871660408401525084606083015283608083015260c060a08301526106b260c0830184610466565b9897505050505050505056fe608060405230fffea164736f6c634300080f000a",
      "sourceMap": "722:3696:149:-:0;;;;;;;;;;;;;;;;;;;",
      "linkReferences": {}
    },
    "deployedBytecode": {
      "object": "0x6080604052600436106100695760003560e01c806382e3702d1161004357806382e3702d1461012a578063c2b3e5ac1461016a578063ecc704281461017d57600080fd5b80633f827a5a1461009257806344df8e70146100bf57806354fd4d50146100d457600080fd5b3661008d5761008b33620186a0604051806020016040528060008152506101e2565b005b600080fd5b34801561009e57600080fd5b506100a7600181565b60405161ffff90911681526020015b60405180910390f35b3480156100cb57600080fd5b5061008b6103a6565b3480156100e057600080fd5b5061011d6040518060400160405280600581526020017f312e312e3000000000000000000000000000000000000000000000000000000081525081565b6040516100b691906104d1565b34801561013657600080fd5b5061015a6101453660046104eb565b60006020819052908152604090205460ff1681565b60405190151581526020016100b6565b61008b610178366004610533565b6101e2565b34801561018957600080fd5b506101d46001547dffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff167e010000000000000000000000000000000000000000000000000000000000001790565b6040519081526020016100b6565b60006102786040518060c0016040528061023c6001547dffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff167e010000000000000000000000000000000000000000000000000000000000001790565b815233602082015273ffffffffffffffffffffffffffffffffffffffff871660408201523460608201526080810186905260a0018490526103de565b600081815260208190526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166001179055905073ffffffffffffffffffffffffffffffffffffffff8416336103136001547dffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff167e010000000000000000000000000000000000000000000000000000000000001790565b7f02a52367d10742d8032712c1bb8e0144ff1ec5ffda1ed7d70bb05a2744955054348787876040516103489493929190610637565b60405180910390a45050600180547dffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8082168301167fffff0000000000000000000000000000000000000000000000000000000000009091161790555050565b476103b08161042b565b60405181907f7967de617a5ac1cc7eba2d6f37570a0135afa950d8bb77cdd35f0d0b4e85a16f90600090a250565b80516020808301516040808501516060860151608087015160a0880151935160009761040e979096959101610667565b604051602081830303815290604052805190602001209050919050565b806040516104389061045a565b6040518091039082f0905080158015610455573d6000803e3d6000fd5b505050565b6008806106bf83390190565b6000815180845260005b8181101561048c57602081850181015186830182015201610470565b8181111561049e576000602083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b6020815260006104e46020830184610466565b9392505050565b6000602082840312156104fd57600080fd5b5035919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60008060006060848603121561054857600080fd5b833573ffffffffffffffffffffffffffffffffffffffff8116811461056c57600080fd5b925060208401359150604084013567ffffffffffffffff8082111561059057600080fd5b818601915086601f8301126105a457600080fd5b8135818111156105b6576105b6610504565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f011681019083821181831017156105fc576105fc610504565b8160405282815289602084870101111561061557600080fd5b8260208601602083013760006020848301015280955050505050509250925092565b8481528360208201526080604082015260006106566080830185610466565b905082606083015295945050505050565b868152600073ffffffffffffffffffffffffffffffffffffffff808816602084015280871660408401525084606083015283608083015260c060a08301526106b260c0830184610466565b9897505050505050505056fe608060405230fffea164736f6c634300080f000a",
      "sourceMap": "722:3696:149:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2474:68;2493:10;911:7;2532:9;;;;;;;;;;;;2474:18;:68::i;:::-;722:3696;;;;;981:42;;;;;;;;;;;;1022:1;981:42;;;;;188:6:356;176:19;;;158:38;;146:2;131:18;981:42:149;;;;;;;;2915:154;;;;;;;;;;;;;:::i;2307:40::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;1094:44::-;;;;;;;;;;-1:-1:-1;1094:44:149;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;1318:14:356;;1311:22;1293:41;;1281:2;1266:18;1094:44:149;1153:187:356;3311:650:149;;;;;;:::i;:::-;;:::i;4282:134::-;;;;;;;;;;;;4383:8;;;;4855:18:194;4852:30;;4282:134:149;;;;2930:25:356;;;2918:2;2903:18;4282:134:149;2784:177:356;3311:650:149;3420:22;3445:297;3481:251;;;;;;;;3534:14;4383:8;;;;4855:18:194;4852:30;;4282:134:149;3534:14;3481:251;;3574:10;3481:251;;;;;;;;;;;3642:9;3481:251;;;;;;;;;;;;;;;3445:22;:297::i;:::-;3753:12;:28;;;;;;;;;;:35;;;;3784:4;3753:35;;;3420:322;-1:-1:-1;3804:95:149;;;3834:10;3818:14;4383:8;;;;4855:18:194;4852:30;;4282:134:149;3818:14;3804:95;3855:9;3866;3877:5;3884:14;3804:95;;;;;;;;;:::i;:::-;;;;;;;;-1:-1:-1;;3936:8:149;3934:10;;;;;;;;;;;;;;;;-1:-1:-1;;3311:650:149:o;2915:154::-;2968:21;2999:17;2968:21;2999:8;:17::i;:::-;3031:31;;3054:7;;3031:31;;;;;2940:129;2915:154::o;4456:211:196:-;4590:9;;4601:10;;;;;4613;;;;;4625:9;;;;4636:12;;;;4650:8;;;;4579:80;;4543:7;;4579:80;;4590:9;;4601:10;4650:8;4579:80;;:::i;:::-;;;;;;;;;;;;;4569:91;;;;;;4562:98;;4456:211;;;:::o;224:86:188:-;292:7;273:30;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;224:86;:::o;-1:-1:-1:-;;;;;;;;:::o;207:531:356:-;249:3;287:5;281:12;314:6;309:3;302:19;339:1;349:162;363:6;360:1;357:13;349:162;;;425:4;481:13;;;477:22;;471:29;453:11;;;449:20;;442:59;378:12;349:162;;;529:6;526:1;523:13;520:87;;;595:1;588:4;579:6;574:3;570:16;566:27;559:38;520:87;-1:-1:-1;652:2:356;640:15;657:66;636:88;627:98;;;;727:4;623:109;;207:531;-1:-1:-1;;207:531:356:o;743:220::-;892:2;881:9;874:21;855:4;912:45;953:2;942:9;938:18;930:6;912:45;:::i;:::-;904:53;743:220;-1:-1:-1;;;743:220:356:o;968:180::-;1027:6;1080:2;1068:9;1059:7;1055:23;1051:32;1048:52;;;1096:1;1093;1086:12;1048:52;-1:-1:-1;1119:23:356;;968:180;-1:-1:-1;968:180:356:o;1345:184::-;1397:77;1394:1;1387:88;1494:4;1491:1;1484:15;1518:4;1515:1;1508:15;1534:1245;1620:6;1628;1636;1689:2;1677:9;1668:7;1664:23;1660:32;1657:52;;;1705:1;1702;1695:12;1657:52;1744:9;1731:23;1794:42;1787:5;1783:54;1776:5;1773:65;1763:93;;1852:1;1849;1842:12;1763:93;1875:5;-1:-1:-1;1927:2:356;1912:18;;1899:32;;-1:-1:-1;1982:2:356;1967:18;;1954:32;2005:18;2035:14;;;2032:34;;;2062:1;2059;2052:12;2032:34;2100:6;2089:9;2085:22;2075:32;;2145:7;2138:4;2134:2;2130:13;2126:27;2116:55;;2167:1;2164;2157:12;2116:55;2203:2;2190:16;2225:2;2221;2218:10;2215:36;;;2231:18;;:::i;:::-;2365:2;2359:9;2427:4;2419:13;;2270:66;2415:22;;;2439:2;2411:31;2407:40;2395:53;;;2463:18;;;2483:22;;;2460:46;2457:72;;;2509:18;;:::i;:::-;2549:10;2545:2;2538:22;2584:2;2576:6;2569:18;2624:7;2619:2;2614;2610;2606:11;2602:20;2599:33;2596:53;;;2645:1;2642;2635:12;2596:53;2701:2;2696;2692;2688:11;2683:2;2675:6;2671:15;2658:46;2746:1;2741:2;2736;2728:6;2724:15;2720:24;2713:35;2767:6;2757:16;;;;;;;1534:1245;;;;;:::o;2966:433::-;3197:6;3186:9;3179:25;3240:6;3235:2;3224:9;3220:18;3213:34;3283:3;3278:2;3267:9;3263:18;3256:31;3160:4;3304:46;3345:3;3334:9;3330:19;3322:6;3304:46;:::i;:::-;3296:54;;3386:6;3381:2;3370:9;3366:18;3359:34;2966:433;;;;;;;:::o;3404:656::-;3691:6;3680:9;3673:25;3654:4;3717:42;3807:2;3799:6;3795:15;3790:2;3779:9;3775:18;3768:43;3859:2;3851:6;3847:15;3842:2;3831:9;3827:18;3820:43;;3899:6;3894:2;3883:9;3879:18;3872:34;3943:6;3937:3;3926:9;3922:19;3915:35;3987:3;3981;3970:9;3966:19;3959:32;4008:46;4049:3;4038:9;4034:19;4026:6;4008:46;:::i;:::-;4000:54;3404:656;-1:-1:-1;;;;;;;;3404:656:356:o",
      "linkReferences": {}
    },
    "methodIdentifiers": {
      "MESSAGE_VERSION()": "3f827a5a",
      "burn()": "44df8e70",
      "initiateWithdrawal(address,uint256,bytes)": "c2b3e5ac",
      "messageNonce()": "ecc70428",
      "sentMessages(bytes32)": "82e3702d",
      "version()": "54fd4d50"
    },
    "rawMetadata": "{\"compiler\":{\"version\":\"0.8.15+commit.e14f2714\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"nonce\",\"type\":\"uint256\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"gasLimit\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"},{\"indexed\":false,\"internalType\":\"bytes32\",\"name\":\"withdrawalHash\",\"type\":\"bytes32\"}],\"name\":\"MessagePassed\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"WithdrawerBalanceBurnt\",\"type\":\"event\"},{\"inputs\":[],\"name\":\"MESSAGE_VERSION\",\"outputs\":[{\"internalType\":\"uint16\",\"name\":\"\",\"type\":\"uint16\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"burn\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_target\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_gasLimit\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"_data\",\"type\":\"bytes\"}],\"name\":\"initiateWithdrawal\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"messageNonce\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"name\":\"sentMessages\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"version\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"stateMutability\":\"payable\",\"type\":\"receive\"}],\"devdoc\":{\"custom:proxied\":\"@custom:predeploy 0x4200000000000000000000000000000000000016\",\"events\":{\"MessagePassed(uint256,address,address,uint256,uint256,bytes,bytes32)\":{\"params\":{\"data\":\"The data to be forwarded to the target on L1.\",\"gasLimit\":\"The minimum amount of gas that must be provided when withdrawing.\",\"nonce\":\"Unique value corresponding to each withdrawal.\",\"sender\":\"The L2 account address which initiated the withdrawal.\",\"target\":\"The L1 account address the call will be send to.\",\"value\":\"The ETH value submitted for withdrawal, to be forwarded to the target.\",\"withdrawalHash\":\"The hash of the withdrawal.\"}},\"WithdrawerBalanceBurnt(uint256)\":{\"params\":{\"amount\":\"Amount of ETh that was burned.\"}}},\"kind\":\"dev\",\"methods\":{\"initiateWithdrawal(address,uint256,bytes)\":{\"params\":{\"_data\":\"Data to forward to L1 target.\",\"_gasLimit\":\"Minimum gas limit for executing the message on L1.\",\"_target\":\"Address to call on L1 execution.\"}},\"messageNonce()\":{\"returns\":{\"_0\":\"Nonce of the next message to be sent, with added message version.\"}}},\"stateVariables\":{\"version\":{\"custom:semver\":\"1.1.0\"}},\"title\":\"L2ToL1MessagePasser\",\"version\":1},\"userdoc\":{\"events\":{\"MessagePassed(uint256,address,address,uint256,uint256,bytes,bytes32)\":{\"notice\":\"Emitted any time a withdrawal is initiated.\"},\"WithdrawerBalanceBurnt(uint256)\":{\"notice\":\"Emitted when the balance of this contract is burned.\"}},\"kind\":\"user\",\"methods\":{\"MESSAGE_VERSION()\":{\"notice\":\"The current message version identifier.\"},\"burn()\":{\"notice\":\"Removes all ETH held by this contract from the state. Used to prevent the amount of         ETH on L2 inflating when ETH is withdrawn. Currently only way to do this is to         create a contract and self-destruct it to itself. Anyone can call this function. Not         incentivized since this function is very cheap.\"},\"initiateWithdrawal(address,uint256,bytes)\":{\"notice\":\"Sends a message from L2 to L1.\"},\"messageNonce()\":{\"notice\":\"Retrieves the next message nonce. Message version will be added to the upper two         bytes of the message nonce. Message version allows us to treat messages as having         different structures.\"},\"sentMessages(bytes32)\":{\"notice\":\"Includes the message hashes for all withdrawals\"}},\"notice\":\"The L2ToL1MessagePasser is a dedicated contract where messages that are being sent from         L2 to L1 can be stored. The storage root of this contract is pulled up to the top level         of the L2 output to reduce the cost of proving the existence of sent messages.\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"src/L2/L2ToL1MessagePasser.sol\":\"L2ToL1MessagePasser\"},\"evmVersion\":\"london\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"none\"},\"optimizer\":{\"enabled\":true,\"runs\":999999},\"remappings\":[\":@cwia/=lib/clones-with-immutable-args/src/\",\":@lib-keccak/=lib/lib-keccak/contracts/lib/\",\":@openzeppelin/contracts-upgradeable/=lib/openzeppelin-contracts-upgradeable/contracts/\",\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":@rari-capital/solmate/=lib/solmate/\",\":@solady-test/=lib/lib-keccak/lib/solady/test/\",\":@solady/=lib/lib-keccak/lib/solady/src/\",\":clones-with-immutable-args/=lib/clones-with-immutable-args/src/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":forge-std/=lib/forge-std/src/\",\":kontrol-cheatcodes/=lib/kontrol-cheatcodes/src/\",\":lib-keccak/=lib/lib-keccak/contracts/\",\":openzeppelin-contracts-upgradeable/=lib/openzeppelin-contracts-upgradeable/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":safe-contracts/=lib/safe-contracts/contracts/\",\":solady/=lib/solady/src/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"src/L2/L2ToL1MessagePasser.sol\":{\"keccak256\":\"0x67f440defc45e97bf1494274a9061876cbdcb10625707c534a0cb04b1c057e21\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://47900ccfcd1e4506d50dd3b14069da285eeb5f783020a0c74f58181b4c011460\",\"dweb:/ipfs/QmNUtEAxiwXT8QDbCHsX3uT4h2fh6k9f8LvMrmRK2N7K61\"]},\"src/libraries/Burn.sol\":{\"keccak256\":\"0x90a795bcea3ef06d6d5011256c4bd63d1a4271f519246dbf1ee3e8f1c0e21010\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://9f60c3aa77cf0c484ddda4754157cff4dc0e2eace4bea67990daff4c0612ab5f\",\"dweb:/ipfs/QmSYGanMFve9uBC17X7hFneSFnwnJxz86Jgh6MX9BRMweb\"]},\"src/libraries/Encoding.sol\":{\"keccak256\":\"0x1dafabcbd4877c7abe9698957b0a44b7e911cb8b11c1437a4ed897135669fa87\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6addfacefa26fdb44f56d73fa0172b97740de75629a962905ec2a20a28d40fff\",\"dweb:/ipfs/QmboHMouqU19Rnbqrfo1gkfnuDBFcPiC9wsKgGtF2W1cNA\"]},\"src/libraries/Hashing.sol\":{\"keccak256\":\"0x89c07a0ca102cbe57b4e082543f2dd6dae0e1fd4a87908a334bd076fc914e7b8\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://69c83489c9544ab442dc244c2feb2c6811b726a5eb5a509b97fc5ccb90b98c12\",\"dweb:/ipfs/QmPGGJeLasc1HWHzd6odvWcNvFPQrbYtDubZcv8yp1HLtF\"]},\"src/libraries/Types.sol\":{\"keccak256\":\"0x75900d651301940d24c00d14f0b3b6cbd6dcf379173ceaa31d9bf5be934a9aa4\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://99c2632c5bf4fa3982391c32110eec9fa07917b483b2442cbaf18bdde5bdb24e\",\"dweb:/ipfs/QmSUs6Amkeootf5gKGbKi4mJpvhN2U8i1ED6ef2dskV5xc\"]},\"src/libraries/rlp/RLPWriter.sol\":{\"keccak256\":\"0x60ac401490f321c9c55e996a2c65151cd5e60de5f8f297e7c94d541c29820bb6\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://070f5814db07e4a89173d44a36d90e4261ce530f7336034c01635347f2c2d88b\",\"dweb:/ipfs/QmXqr9yW5Kc8MYgr5wSehU5AiqS9pZ4FKxv7vwiwpZCcyV\"]},\"src/universal/ISemver.sol\":{\"keccak256\":\"0xba34562a8026f59886d2e07d1d58d90b9691d00e0788c6263cef6c22740cab44\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://0826f998632f83c103c3085bf2e872db79a69022b6d2e0444c83a64ca5283c2a\",\"dweb:/ipfs/QmcJ7PNqkAfKqbjFGRordtAg1v9DvcBSKvdTkVvciLyvQR\"]}},\"version\":1}",
    "metadata": {
      "compiler": {
        "version": "0.8.15+commit.e14f2714"
      },
      "language": "Solidity",
      "output": {
        "abi": [
          {
            "inputs": [
              {
                "internalType": "uint256",
                "name": "nonce",
                "type": "uint256",
                "indexed": true
              },
              {
                "internalType": "address",
                "name": "sender",
                "type": "address",
                "indexed": true
              },
              {
                "internalType": "address",
                "name": "target",
                "type": "address",
                "indexed": true
              },
              {
                "internalType": "uint256",
                "name": "value",
                "type": "uint256",
                "indexed": false
              },
              {
                "internalType": "uint256",
                "name": "gasLimit",
                "type": "uint256",
                "indexed": false
              },
              {
                "internalType": "bytes",
                "name": "data",
                "type": "bytes",
                "indexed": false
              },
              {
                "internalType": "bytes32",
                "name": "withdrawalHash",
                "type": "bytes32",
                "indexed": false
              }
            ],
            "type": "event",
            "name": "MessagePassed",
            "anonymous": false
          },
          {
            "inputs": [
              {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256",
                "indexed": true
              }
            ],
            "type": "event",
            "name": "WithdrawerBalanceBurnt",
            "anonymous": false
          },
          {
            "inputs": [],
            "stateMutability": "view",
            "type": "function",
            "name": "MESSAGE_VERSION",
            "outputs": [
              {
                "internalType": "uint16",
                "name": "",
                "type": "uint16"
              }
            ]
          },
          {
            "inputs": [],
            "stateMutability": "nonpayable",
            "type": "function",
            "name": "burn"
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "_target",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "_gasLimit",
                "type": "uint256"
              },
              {
                "internalType": "bytes",
                "name": "_data",
                "type": "bytes"
              }
            ],
            "stateMutability": "payable",
            "type": "function",
            "name": "initiateWithdrawal"
          },
          {
            "inputs": [],
            "stateMutability": "view",
            "type": "function",
            "name": "messageNonce",
            "outputs": [
              {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
              }
            ]
          },
          {
            "inputs": [
              {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
              }
            ],
            "stateMutability": "view",
            "type": "function",
            "name": "sentMessages",
            "outputs": [
              {
                "internalType": "bool",
                "name": "",
                "type": "bool"
              }
            ]
          },
          {
            "inputs": [],
            "stateMutability": "view",
            "type": "function",
            "name": "version",
            "outputs": [
              {
                "internalType": "string",
                "name": "",
                "type": "string"
              }
            ]
          },
          {
            "inputs": [],
            "stateMutability": "payable",
            "type": "receive"
          }
        ],
        "devdoc": {
          "kind": "dev",
          "methods": {
            "initiateWithdrawal(address,uint256,bytes)": {
              "params": {
                "_data": "Data to forward to L1 target.",
                "_gasLimit": "Minimum gas limit for executing the message on L1.",
                "_target": "Address to call on L1 execution."
              }
            },
            "messageNonce()": {
              "returns": {
                "_0": "Nonce of the next message to be sent, with added message version."
              }
            }
          },
          "version": 1
        },
        "userdoc": {
          "kind": "user",
          "methods": {
            "MESSAGE_VERSION()": {
              "notice": "The current message version identifier."
            },
            "burn()": {
              "notice": "Removes all ETH held by this contract from the state. Used to prevent the amount of         ETH on L2 inflating when ETH is withdrawn. Currently only way to do this is to         create a contract and self-destruct it to itself. Anyone can call this function. Not         incentivized since this function is very cheap."
            },
            "initiateWithdrawal(address,uint256,bytes)": {
              "notice": "Sends a message from L2 to L1."
            },
            "messageNonce()": {
              "notice": "Retrieves the next message nonce. Message version will be added to the upper two         bytes of the message nonce. Message version allows us to treat messages as having         different structures."
            },
            "sentMessages(bytes32)": {
              "notice": "Includes the message hashes for all withdrawals"
            }
          },
          "version": 1
        }
      },
      "settings": {
        "remappings": [
          "@cwia/=lib/clones-with-immutable-args/src/",
          "@lib-keccak/=lib/lib-keccak/contracts/lib/",
          "@openzeppelin/contracts-upgradeable/=lib/openzeppelin-contracts-upgradeable/contracts/",
          "@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/",
          "@rari-capital/solmate/=lib/solmate/",
          "@solady-test/=lib/lib-keccak/lib/solady/test/",
          "@solady/=lib/lib-keccak/lib/solady/src/",
          "clones-with-immutable-args/=lib/clones-with-immutable-args/src/",
          "ds-test/=lib/forge-std/lib/ds-test/src/",
          "forge-std/=lib/forge-std/src/",
          "kontrol-cheatcodes/=lib/kontrol-cheatcodes/src/",
          "lib-keccak/=lib/lib-keccak/contracts/",
          "openzeppelin-contracts-upgradeable/=lib/openzeppelin-contracts-upgradeable/",
          "openzeppelin-contracts/=lib/openzeppelin-contracts/",
          "safe-contracts/=lib/safe-contracts/contracts/",
          "solady/=lib/solady/src/",
          "solmate/=lib/solmate/src/"
        ],
        "optimizer": {
          "enabled": true,
          "runs": 999999
        },
        "metadata": {
          "bytecodeHash": "none"
        },
        "compilationTarget": {
          "src/L2/L2ToL1MessagePasser.sol": "L2ToL1MessagePasser"
        },
        "evmVersion": "london",
        "libraries": {}
      },
      "sources": {
        "src/L2/L2ToL1MessagePasser.sol": {
          "keccak256": "0x67f440defc45e97bf1494274a9061876cbdcb10625707c534a0cb04b1c057e21",
          "urls": [
            "bzz-raw://47900ccfcd1e4506d50dd3b14069da285eeb5f783020a0c74f58181b4c011460",
            "dweb:/ipfs/QmNUtEAxiwXT8QDbCHsX3uT4h2fh6k9f8LvMrmRK2N7K61"
          ],
          "license": "MIT"
        },
        "src/libraries/Burn.sol": {
          "keccak256": "0x90a795bcea3ef06d6d5011256c4bd63d1a4271f519246dbf1ee3e8f1c0e21010",
          "urls": [
            "bzz-raw://9f60c3aa77cf0c484ddda4754157cff4dc0e2eace4bea67990daff4c0612ab5f",
            "dweb:/ipfs/QmSYGanMFve9uBC17X7hFneSFnwnJxz86Jgh6MX9BRMweb"
          ],
          "license": "MIT"
        },
        "src/libraries/Encoding.sol": {
          "keccak256": "0x1dafabcbd4877c7abe9698957b0a44b7e911cb8b11c1437a4ed897135669fa87",
          "urls": [
            "bzz-raw://6addfacefa26fdb44f56d73fa0172b97740de75629a962905ec2a20a28d40fff",
            "dweb:/ipfs/QmboHMouqU19Rnbqrfo1gkfnuDBFcPiC9wsKgGtF2W1cNA"
          ],
          "license": "MIT"
        },
        "src/libraries/Hashing.sol": {
          "keccak256": "0x89c07a0ca102cbe57b4e082543f2dd6dae0e1fd4a87908a334bd076fc914e7b8",
          "urls": [
            "bzz-raw://69c83489c9544ab442dc244c2feb2c6811b726a5eb5a509b97fc5ccb90b98c12",
            "dweb:/ipfs/QmPGGJeLasc1HWHzd6odvWcNvFPQrbYtDubZcv8yp1HLtF"
          ],
          "license": "MIT"
        },
        "src/libraries/Types.sol": {
          "keccak256": "0x75900d651301940d24c00d14f0b3b6cbd6dcf379173ceaa31d9bf5be934a9aa4",
          "urls": [
            "bzz-raw://99c2632c5bf4fa3982391c32110eec9fa07917b483b2442cbaf18bdde5bdb24e",
            "dweb:/ipfs/QmSUs6Amkeootf5gKGbKi4mJpvhN2U8i1ED6ef2dskV5xc"
          ],
          "license": "MIT"
        },
        "src/libraries/rlp/RLPWriter.sol": {
          "keccak256": "0x60ac401490f321c9c55e996a2c65151cd5e60de5f8f297e7c94d541c29820bb6",
          "urls": [
            "bzz-raw://070f5814db07e4a89173d44a36d90e4261ce530f7336034c01635347f2c2d88b",
            "dweb:/ipfs/QmXqr9yW5Kc8MYgr5wSehU5AiqS9pZ4FKxv7vwiwpZCcyV"
          ],
          "license": "MIT"
        },
        "src/universal/ISemver.sol": {
          "keccak256": "0xba34562a8026f59886d2e07d1d58d90b9691d00e0788c6263cef6c22740cab44",
          "urls": [
            "bzz-raw://0826f998632f83c103c3085bf2e872db79a69022b6d2e0444c83a64ca5283c2a",
            "dweb:/ipfs/QmcJ7PNqkAfKqbjFGRordtAg1v9DvcBSKvdTkVvciLyvQR"
          ],
          "license": "MIT"
        }
      },
      "version": 1
    },
    "storageLayout": {
      "storage": [
        {
          "astId": 89798,
          "contract": "src/L2/L2ToL1MessagePasser.sol:L2ToL1MessagePasser",
          "label": "sentMessages",
          "offset": 0,
          "slot": "0",
          "type": "t_mapping(t_bytes32,t_bool)"
        },
        {
          "astId": 89801,
          "contract": "src/L2/L2ToL1MessagePasser.sol:L2ToL1MessagePasser",
          "label": "msgNonce",
          "offset": 0,
          "slot": "1",
          "type": "t_uint240"
        }
      ],
      "types": {
        "t_bool": {
          "encoding": "inplace",
          "label": "bool",
          "numberOfBytes": "1"
        },
        "t_bytes32": {
          "encoding": "inplace",
          "label": "bytes32",
          "numberOfBytes": "32"
        },
        "t_mapping(t_bytes32,t_bool)": {
          "encoding": "mapping",
          "key": "t_bytes32",
          "label": "mapping(bytes32 => bool)",
          "numberOfBytes": "32",
          "value": "t_bool"
        },
        "t_uint240": {
          "encoding": "inplace",
          "label": "uint240",
          "numberOfBytes": "30"
        }
      }
    },
    "userdoc": {
      "version": 1,
      "kind": "user",
      "methods": {
        "MESSAGE_VERSION()": {
          "notice": "The current message version identifier."
        },
        "burn()": {
          "notice": "Removes all ETH held by this contract from the state. Used to prevent the amount of         ETH on L2 inflating when ETH is withdrawn. Currently only way to do this is to         create a contract and self-destruct it to itself. Anyone can call this function. Not         incentivized since this function is very cheap."
        },
        "initiateWithdrawal(address,uint256,bytes)": {
          "notice": "Sends a message from L2 to L1."
        },
        "messageNonce()": {
          "notice": "Retrieves the next message nonce. Message version will be added to the upper two         bytes of the message nonce. Message version allows us to treat messages as having         different structures."
        },
        "sentMessages(bytes32)": {
          "notice": "Includes the message hashes for all withdrawals"
        }
      },
      "events": {
        "MessagePassed(uint256,address,address,uint256,uint256,bytes,bytes32)": {
          "notice": "Emitted any time a withdrawal is initiated."
        },
        "WithdrawerBalanceBurnt(uint256)": {
          "notice": "Emitted when the balance of this contract is burned."
        }
      },
      "notice": "The L2ToL1MessagePasser is a dedicated contract where messages that are being sent from         L2 to L1 can be stored. The storage root of this contract is pulled up to the top level         of the L2 output to reduce the cost of proving the existence of sent messages."
    },
    "devdoc": {
      "version": 1,
      "kind": "dev",
      "methods": {
        "initiateWithdrawal(address,uint256,bytes)": {
          "params": {
            "_data": "Data to forward to L1 target.",
            "_gasLimit": "Minimum gas limit for executing the message on L1.",
            "_target": "Address to call on L1 execution."
          }
        },
        "messageNonce()": {
          "returns": {
            "_0": "Nonce of the next message to be sent, with added message version."
          }
        }
      },
      "events": {
        "MessagePassed(uint256,address,address,uint256,uint256,bytes,bytes32)": {
          "params": {
            "data": "The data to be forwarded to the target on L1.",
            "gasLimit": "The minimum amount of gas that must be provided when withdrawing.",
            "nonce": "Unique value corresponding to each withdrawal.",
            "sender": "The L2 account address which initiated the withdrawal.",
            "target": "The L1 account address the call will be send to.",
            "value": "The ETH value submitted for withdrawal, to be forwarded to the target.",
            "withdrawalHash": "The hash of the withdrawal."
          }
        },
        "WithdrawerBalanceBurnt(uint256)": {
          "params": {
            "amount": "Amount of ETh that was burned."
          }
        }
      },
      "title": "L2ToL1MessagePasser"
    },
    "ast": {
      "absolutePath": "src/L2/L2ToL1MessagePasser.sol",
      "id": 89932,
      "exportedSymbols": {
        "Burn": [
          100998
        ],
        "Encoding": [
          101941
        ],
        "Hashing": [
          102452
        ],
        "ISemver": [
          107973
        ],
        "L2ToL1MessagePasser": [
          89931
        ],
        "Types": [
          102868
        ]
      },
      "nodeType": "SourceUnit",
      "src": "32:4387:149",
      "nodes": [
        {
          "id": 89772,
          "nodeType": "PragmaDirective",
          "src": "32:23:149",
          "nodes": [],
          "literals": [
            "solidity",
            "0.8",
            ".15"
          ]
        },
        {
          "id": 89774,
          "nodeType": "ImportDirective",
          "src": "57:48:149",
          "nodes": [],
          "absolutePath": "src/libraries/Types.sol",
          "file": "src/libraries/Types.sol",
          "nameLocation": "-1:-1:-1",
          "scope": 89932,
          "sourceUnit": 102869,
          "symbolAliases": [
            {
              "foreign": {
                "id": 89773,
                "name": "Types",
                "nodeType": "Identifier",
                "overloadedDeclarations": [],
                "referencedDeclaration": 102868,
                "src": "66:5:149",
                "typeDescriptions": {}
              },
              "nameLocation": "-1:-1:-1"
            }
          ],
          "unitAlias": ""
        },
        {
          "id": 89776,
          "nodeType": "ImportDirective",
          "src": "106:52:149",
          "nodes": [],
          "absolutePath": "src/libraries/Hashing.sol",
          "file": "src/libraries/Hashing.sol",
          "nameLocation": "-1:-1:-1",
          "scope": 89932,
          "sourceUnit": 102453,
          "symbolAliases": [
            {
              "foreign": {
                "id": 89775,
                "name": "Hashing",
                "nodeType": "Identifier",
                "overloadedDeclarations": [],
                "referencedDeclaration": 102452,
                "src": "115:7:149",
                "typeDescriptions": {}
              },
              "nameLocation": "-1:-1:-1"
            }
          ],
          "unitAlias": ""
        },
        {
          "id": 89778,
          "nodeType": "ImportDirective",
          "src": "159:54:149",
          "nodes": [],
          "absolutePath": "src/libraries/Encoding.sol",
          "file": "src/libraries/Encoding.sol",
          "nameLocation": "-1:-1:-1",
          "scope": 89932,
          "sourceUnit": 101942,
          "symbolAliases": [
            {
              "foreign": {
                "id": 89777,
                "name": "Encoding",
                "nodeType": "Identifier",
                "overloadedDeclarations": [],
                "referencedDeclaration": 101941,
                "src": "168:8:149",
                "typeDescriptions": {}
              },
              "nameLocation": "-1:-1:-1"
            }
          ],
          "unitAlias": ""
        },
        {
          "id": 89780,
          "nodeType": "ImportDirective",
          "src": "214:46:149",
          "nodes": [],
          "absolutePath": "src/libraries/Burn.sol",
          "file": "src/libraries/Burn.sol",
          "nameLocation": "-1:-1:-1",
          "scope": 89932,
          "sourceUnit": 101015,
          "symbolAliases": [
            {
              "foreign": {
                "id": 89779,
                "name": "Burn",
                "nodeType": "Identifier",
                "overloadedDeclarations": [],
                "referencedDeclaration": 100998,
                "src": "223:4:149",
                "typeDescriptions": {}
              },
              "nameLocation": "-1:-1:-1"
            }
          ],
          "unitAlias": ""
        },
        {
          "id": 89782,
          "nodeType": "ImportDirective",
          "src": "261:52:149",
          "nodes": [],
          "absolutePath": "src/universal/ISemver.sol",
          "file": "src/universal/ISemver.sol",
          "nameLocation": "-1:-1:-1",
          "scope": 89932,
          "sourceUnit": 107974,
          "symbolAliases": [
            {
              "foreign": {
                "id": 89781,
                "name": "ISemver",
                "nodeType": "Identifier",
                "overloadedDeclarations": [],
                "referencedDeclaration": 107973,
                "src": "270:7:149",
                "typeDescriptions": {}
              },
              "nameLocation": "-1:-1:-1"
            }
          ],
          "unitAlias": ""
        },
        {
          "id": 89931,
          "nodeType": "ContractDefinition",
          "src": "722:3696:149",
          "nodes": [
            {
              "id": 89789,
              "nodeType": "VariableDeclaration",
              "src": "857:61:149",
              "nodes": [],
              "constant": true,
              "documentation": {
                "id": 89786,
                "nodeType": "StructuredDocumentation",
                "src": "768:84:149",
                "text": "@notice The L1 gas limit set when eth is withdrawn using the receive() function."
              },
              "mutability": "constant",
              "name": "RECEIVE_DEFAULT_GAS_LIMIT",
              "nameLocation": "883:25:149",
              "scope": 89931,
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              },
              "typeName": {
                "id": 89787,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "857:7:149",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "value": {
                "hexValue": "3130305f303030",
                "id": 89788,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "911:7:149",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_100000_by_1",
                  "typeString": "int_const 100000"
                },
                "value": "100_000"
              },
              "visibility": "internal"
            },
            {
              "id": 89793,
              "nodeType": "VariableDeclaration",
              "src": "981:42:149",
              "nodes": [],
              "constant": true,
              "documentation": {
                "id": 89790,
                "nodeType": "StructuredDocumentation",
                "src": "925:51:149",
                "text": "@notice The current message version identifier."
              },
              "functionSelector": "3f827a5a",
              "mutability": "constant",
              "name": "MESSAGE_VERSION",
              "nameLocation": "1004:15:149",
              "scope": 89931,
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_uint16",
                "typeString": "uint16"
              },
              "typeName": {
                "id": 89791,
                "name": "uint16",
                "nodeType": "ElementaryTypeName",
                "src": "981:6:149",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint16",
                  "typeString": "uint16"
                }
              },
              "value": {
                "hexValue": "31",
                "id": 89792,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "1022:1:149",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "visibility": "public"
            },
            {
              "id": 89798,
              "nodeType": "VariableDeclaration",
              "src": "1094:44:149",
              "nodes": [],
              "constant": false,
              "documentation": {
                "id": 89794,
                "nodeType": "StructuredDocumentation",
                "src": "1030:59:149",
                "text": "@notice Includes the message hashes for all withdrawals"
              },
              "functionSelector": "82e3702d",
              "mutability": "mutable",
              "name": "sentMessages",
              "nameLocation": "1126:12:149",
              "scope": 89931,
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_bytes32_$_t_bool_$",
                "typeString": "mapping(bytes32 => bool)"
              },
              "typeName": {
                "id": 89797,
                "keyType": {
                  "id": 89795,
                  "name": "bytes32",
                  "nodeType": "ElementaryTypeName",
                  "src": "1102:7:149",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  }
                },
                "nodeType": "Mapping",
                "src": "1094:24:149",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_bytes32_$_t_bool_$",
                  "typeString": "mapping(bytes32 => bool)"
                },
                "valueType": {
                  "id": 89796,
                  "name": "bool",
                  "nodeType": "ElementaryTypeName",
                  "src": "1113:4:149",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  }
                }
              },
              "visibility": "public"
            },
            {
              "id": 89801,
              "nodeType": "VariableDeclaration",
              "src": "1205:25:149",
              "nodes": [],
              "constant": false,
              "documentation": {
                "id": 89799,
                "nodeType": "StructuredDocumentation",
                "src": "1145:55:149",
                "text": "@notice A unique value hashed with each withdrawal."
              },
              "mutability": "mutable",
              "name": "msgNonce",
              "nameLocation": "1222:8:149",
              "scope": 89931,
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_uint240",
                "typeString": "uint240"
              },
              "typeName": {
                "id": 89800,
                "name": "uint240",
                "nodeType": "ElementaryTypeName",
                "src": "1205:7:149",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint240",
                  "typeString": "uint240"
                }
              },
              "visibility": "internal"
            },
            {
              "id": 89818,
              "nodeType": "EventDefinition",
              "src": "1869:222:149",
              "nodes": [],
              "anonymous": false,
              "documentation": {
                "id": 89802,
                "nodeType": "StructuredDocumentation",
                "src": "1237:627:149",
                "text": "@notice Emitted any time a withdrawal is initiated.\n @param nonce          Unique value corresponding to each withdrawal.\n @param sender         The L2 account address which initiated the withdrawal.\n @param target         The L1 account address the call will be send to.\n @param value          The ETH value submitted for withdrawal, to be forwarded to the target.\n @param gasLimit       The minimum amount of gas that must be provided when withdrawing.\n @param data           The data to be forwarded to the target on L1.\n @param withdrawalHash The hash of the withdrawal."
              },
              "eventSelector": "02a52367d10742d8032712c1bb8e0144ff1ec5ffda1ed7d70bb05a2744955054",
              "name": "MessagePassed",
              "nameLocation": "1875:13:149",
              "parameters": {
                "id": 89817,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 89804,
                    "indexed": true,
                    "mutability": "mutable",
                    "name": "nonce",
                    "nameLocation": "1914:5:149",
                    "nodeType": "VariableDeclaration",
                    "scope": 89818,
                    "src": "1898:21:149",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 89803,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "1898:7:149",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 89806,
                    "indexed": true,
                    "mutability": "mutable",
                    "name": "sender",
                    "nameLocation": "1945:6:149",
                    "nodeType": "VariableDeclaration",
                    "scope": 89818,
                    "src": "1929:22:149",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 89805,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "1929:7:149",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 89808,
                    "indexed": true,
                    "mutability": "mutable",
                    "name": "target",
                    "nameLocation": "1977:6:149",
                    "nodeType": "VariableDeclaration",
                    "scope": 89818,
                    "src": "1961:22:149",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 89807,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "1961:7:149",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 89810,
                    "indexed": false,
                    "mutability": "mutable",
                    "name": "value",
                    "nameLocation": "2001:5:149",
                    "nodeType": "VariableDeclaration",
                    "scope": 89818,
                    "src": "1993:13:149",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 89809,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "1993:7:149",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 89812,
                    "indexed": false,
                    "mutability": "mutable",
                    "name": "gasLimit",
                    "nameLocation": "2024:8:149",
                    "nodeType": "VariableDeclaration",
                    "scope": 89818,
                    "src": "2016:16:149",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 89811,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "2016:7:149",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 89814,
                    "indexed": false,
                    "mutability": "mutable",
                    "name": "data",
                    "nameLocation": "2048:4:149",
                    "nodeType": "VariableDeclaration",
                    "scope": 89818,
                    "src": "2042:10:149",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes"
                    },
                    "typeName": {
                      "id": 89813,
                      "name": "bytes",
                      "nodeType": "ElementaryTypeName",
                      "src": "2042:5:149",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_storage_ptr",
                        "typeString": "bytes"
                      }
                    },
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 89816,
                    "indexed": false,
                    "mutability": "mutable",
                    "name": "withdrawalHash",
                    "nameLocation": "2070:14:149",
                    "nodeType": "VariableDeclaration",
                    "scope": 89818,
                    "src": "2062:22:149",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    },
                    "typeName": {
                      "id": 89815,
                      "name": "bytes32",
                      "nodeType": "ElementaryTypeName",
                      "src": "2062:7:149",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "1888:202:149"
              }
            },
            {
              "id": 89823,
              "nodeType": "EventDefinition",
              "src": "2219:53:149",
              "nodes": [],
              "anonymous": false,
              "documentation": {
                "id": 89819,
                "nodeType": "StructuredDocumentation",
                "src": "2097:117:149",
                "text": "@notice Emitted when the balance of this contract is burned.\n @param amount Amount of ETh that was burned."
              },
              "eventSelector": "7967de617a5ac1cc7eba2d6f37570a0135afa950d8bb77cdd35f0d0b4e85a16f",
              "name": "WithdrawerBalanceBurnt",
              "nameLocation": "2225:22:149",
              "parameters": {
                "id": 89822,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 89821,
                    "indexed": true,
                    "mutability": "mutable",
                    "name": "amount",
                    "nameLocation": "2264:6:149",
                    "nodeType": "VariableDeclaration",
                    "scope": 89823,
                    "src": "2248:22:149",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 89820,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "2248:7:149",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "2247:24:149"
              }
            },
            {
              "id": 89827,
              "nodeType": "VariableDeclaration",
              "src": "2307:40:149",
              "nodes": [],
              "baseFunctions": [
                107972
              ],
              "constant": true,
              "documentation": {
                "id": 89824,
                "nodeType": "StructuredDocumentation",
                "src": "2278:24:149",
                "text": "@custom:semver 1.1.0"
              },
              "functionSelector": "54fd4d50",
              "mutability": "constant",
              "name": "version",
              "nameLocation": "2330:7:149",
              "scope": 89931,
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_string_memory_ptr",
                "typeString": "string"
              },
              "typeName": {
                "id": 89825,
                "name": "string",
                "nodeType": "ElementaryTypeName",
                "src": "2307:6:149",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                }
              },
              "value": {
                "hexValue": "312e312e30",
                "id": 89826,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "string",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "2340:7:149",
                "typeDescriptions": {
                  "typeIdentifier": "t_stringliteral_6815ba53416ba06aff1932cc76b3832272bafab9bc8e066be382e32b06ba5546",
                  "typeString": "literal_string \"1.1.0\""
                },
                "value": "1.1.0"
              },
              "visibility": "public"
            },
            {
              "id": 89842,
              "nodeType": "FunctionDefinition",
              "src": "2437:112:149",
              "nodes": [],
              "body": {
                "id": 89841,
                "nodeType": "Block",
                "src": "2464:85:149",
                "nodes": [],
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "expression": {
                            "id": 89832,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -15,
                            "src": "2493:3:149",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 89833,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "src": "2493:10:149",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "id": 89834,
                          "name": "RECEIVE_DEFAULT_GAS_LIMIT",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 89789,
                          "src": "2505:25:149",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "arguments": [
                            {
                              "hexValue": "",
                              "id": 89837,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "2538:2:149",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                                "typeString": "literal_string \"\""
                              },
                              "value": ""
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                                "typeString": "literal_string \"\""
                              }
                            ],
                            "id": 89836,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "2532:5:149",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_bytes_storage_ptr_$",
                              "typeString": "type(bytes storage pointer)"
                            },
                            "typeName": {
                              "id": 89835,
                              "name": "bytes",
                              "nodeType": "ElementaryTypeName",
                              "src": "2532:5:149",
                              "typeDescriptions": {}
                            }
                          },
                          "id": 89838,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2532:9:149",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes_memory_ptr",
                            "typeString": "bytes memory"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          {
                            "typeIdentifier": "t_bytes_memory_ptr",
                            "typeString": "bytes memory"
                          }
                        ],
                        "id": 89831,
                        "name": "initiateWithdrawal",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 89917,
                        "src": "2474:18:149",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$_t_bytes_memory_ptr_$returns$__$",
                          "typeString": "function (address,uint256,bytes memory)"
                        }
                      },
                      "id": 89839,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2474:68:149",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 89840,
                    "nodeType": "ExpressionStatement",
                    "src": "2474:68:149"
                  }
                ]
              },
              "documentation": {
                "id": 89828,
                "nodeType": "StructuredDocumentation",
                "src": "2354:78:149",
                "text": "@notice Allows users to withdraw ETH by sending directly to this contract."
              },
              "implemented": true,
              "kind": "receive",
              "modifiers": [],
              "name": "",
              "nameLocation": "-1:-1:-1",
              "parameters": {
                "id": 89829,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "2444:2:149"
              },
              "returnParameters": {
                "id": 89830,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "2464:0:149"
              },
              "scope": 89931,
              "stateMutability": "payable",
              "virtual": false,
              "visibility": "external"
            },
            {
              "id": 89865,
              "nodeType": "FunctionDefinition",
              "src": "2915:154:149",
              "nodes": [],
              "body": {
                "id": 89864,
                "nodeType": "Block",
                "src": "2940:129:149",
                "nodes": [],
                "statements": [
                  {
                    "assignments": [
                      89847
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 89847,
                        "mutability": "mutable",
                        "name": "balance",
                        "nameLocation": "2958:7:149",
                        "nodeType": "VariableDeclaration",
                        "scope": 89864,
                        "src": "2950:15:149",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 89846,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "2950:7:149",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "visibility": "internal"
                      }
                    ],
                    "id": 89853,
                    "initialValue": {
                      "expression": {
                        "arguments": [
                          {
                            "id": 89850,
                            "name": "this",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -28,
                            "src": "2976:4:149",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_L2ToL1MessagePasser_$89931",
                              "typeString": "contract L2ToL1MessagePasser"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_contract$_L2ToL1MessagePasser_$89931",
                              "typeString": "contract L2ToL1MessagePasser"
                            }
                          ],
                          "id": 89849,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "2968:7:149",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 89848,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "2968:7:149",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 89851,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2968:13:149",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "id": 89852,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "balance",
                      "nodeType": "MemberAccess",
                      "src": "2968:21:149",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "2950:39:149"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "id": 89857,
                          "name": "balance",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 89847,
                          "src": "3008:7:149",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "expression": {
                          "id": 89854,
                          "name": "Burn",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 100998,
                          "src": "2999:4:149",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_Burn_$100998_$",
                            "typeString": "type(library Burn)"
                          }
                        },
                        "id": 89856,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "eth",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 100970,
                        "src": "2999:8:149",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$returns$__$",
                          "typeString": "function (uint256)"
                        }
                      },
                      "id": 89858,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2999:17:149",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 89859,
                    "nodeType": "ExpressionStatement",
                    "src": "2999:17:149"
                  },
                  {
                    "eventCall": {
                      "arguments": [
                        {
                          "id": 89861,
                          "name": "balance",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 89847,
                          "src": "3054:7:149",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "id": 89860,
                        "name": "WithdrawerBalanceBurnt",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 89823,
                        "src": "3031:22:149",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_event_nonpayable$_t_uint256_$returns$__$",
                          "typeString": "function (uint256)"
                        }
                      },
                      "id": 89862,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "3031:31:149",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 89863,
                    "nodeType": "EmitStatement",
                    "src": "3026:36:149"
                  }
                ]
              },
              "documentation": {
                "id": 89843,
                "nodeType": "StructuredDocumentation",
                "src": "2555:355:149",
                "text": "@notice Removes all ETH held by this contract from the state. Used to prevent the amount of\n         ETH on L2 inflating when ETH is withdrawn. Currently only way to do this is to\n         create a contract and self-destruct it to itself. Anyone can call this function. Not\n         incentivized since this function is very cheap."
              },
              "functionSelector": "44df8e70",
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "burn",
              "nameLocation": "2924:4:149",
              "parameters": {
                "id": 89844,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "2928:2:149"
              },
              "returnParameters": {
                "id": 89845,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "2940:0:149"
              },
              "scope": 89931,
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "external"
            },
            {
              "id": 89917,
              "nodeType": "FunctionDefinition",
              "src": "3311:650:149",
              "nodes": [],
              "body": {
                "id": 89916,
                "nodeType": "Block",
                "src": "3410:551:149",
                "nodes": [],
                "statements": [
                  {
                    "assignments": [
                      89876
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 89876,
                        "mutability": "mutable",
                        "name": "withdrawalHash",
                        "nameLocation": "3428:14:149",
                        "nodeType": "VariableDeclaration",
                        "scope": 89916,
                        "src": "3420:22:149",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        },
                        "typeName": {
                          "id": 89875,
                          "name": "bytes32",
                          "nodeType": "ElementaryTypeName",
                          "src": "3420:7:149",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        "visibility": "internal"
                      }
                    ],
                    "id": 89892,
                    "initialValue": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "arguments": [],
                              "expression": {
                                "argumentTypes": [],
                                "id": 89881,
                                "name": "messageNonce",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 89930,
                                "src": "3534:12:149",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                                  "typeString": "function () view returns (uint256)"
                                }
                              },
                              "id": 89882,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "3534:14:149",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "expression": {
                                "id": 89883,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": -15,
                                "src": "3574:3:149",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 89884,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "src": "3574:10:149",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "id": 89885,
                              "name": "_target",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 89868,
                              "src": "3610:7:149",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "expression": {
                                "id": 89886,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": -15,
                                "src": "3642:3:149",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 89887,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "value",
                              "nodeType": "MemberAccess",
                              "src": "3642:9:149",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "id": 89888,
                              "name": "_gasLimit",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 89870,
                              "src": "3679:9:149",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "id": 89889,
                              "name": "_data",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 89872,
                              "src": "3712:5:149",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes_memory_ptr",
                                "typeString": "bytes memory"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              {
                                "typeIdentifier": "t_bytes_memory_ptr",
                                "typeString": "bytes memory"
                              }
                            ],
                            "expression": {
                              "id": 89879,
                              "name": "Types",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 102868,
                              "src": "3481:5:149",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_Types_$102868_$",
                                "typeString": "type(library Types)"
                              }
                            },
                            "id": 89880,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "WithdrawalTransaction",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 102867,
                            "src": "3481:27:149",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_struct$_WithdrawalTransaction_$102867_storage_ptr_$",
                              "typeString": "type(struct Types.WithdrawalTransaction storage pointer)"
                            }
                          },
                          "id": 89890,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "structConstructorCall",
                          "lValueRequested": false,
                          "names": [
                            "nonce",
                            "sender",
                            "target",
                            "value",
                            "gasLimit",
                            "data"
                          ],
                          "nodeType": "FunctionCall",
                          "src": "3481:251:149",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_WithdrawalTransaction_$102867_memory_ptr",
                            "typeString": "struct Types.WithdrawalTransaction memory"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_struct$_WithdrawalTransaction_$102867_memory_ptr",
                            "typeString": "struct Types.WithdrawalTransaction memory"
                          }
                        ],
                        "expression": {
                          "id": 89877,
                          "name": "Hashing",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 102452,
                          "src": "3445:7:149",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_Hashing_$102452_$",
                            "typeString": "type(library Hashing)"
                          }
                        },
                        "id": 89878,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "hashWithdrawal",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 102427,
                        "src": "3445:22:149",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_struct$_WithdrawalTransaction_$102867_memory_ptr_$returns$_t_bytes32_$",
                          "typeString": "function (struct Types.WithdrawalTransaction memory) pure returns (bytes32)"
                        }
                      },
                      "id": 89891,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "3445:297:149",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "3420:322:149"
                  },
                  {
                    "expression": {
                      "id": 89897,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "baseExpression": {
                          "id": 89893,
                          "name": "sentMessages",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 89798,
                          "src": "3753:12:149",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_bytes32_$_t_bool_$",
                            "typeString": "mapping(bytes32 => bool)"
                          }
                        },
                        "id": 89895,
                        "indexExpression": {
                          "id": 89894,
                          "name": "withdrawalHash",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 89876,
                          "src": "3766:14:149",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": true,
                        "nodeType": "IndexAccess",
                        "src": "3753:28:149",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "hexValue": "74727565",
                        "id": 89896,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "bool",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "3784:4:149",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "value": "true"
                      },
                      "src": "3753:35:149",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "id": 89898,
                    "nodeType": "ExpressionStatement",
                    "src": "3753:35:149"
                  },
                  {
                    "eventCall": {
                      "arguments": [
                        {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "id": 89900,
                            "name": "messageNonce",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 89930,
                            "src": "3818:12:149",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                              "typeString": "function () view returns (uint256)"
                            }
                          },
                          "id": 89901,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "3818:14:149",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "expression": {
                            "id": 89902,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -15,
                            "src": "3834:3:149",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 89903,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "src": "3834:10:149",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "id": 89904,
                          "name": "_target",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 89868,
                          "src": "3846:7:149",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "expression": {
                            "id": 89905,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -15,
                            "src": "3855:3:149",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 89906,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "value",
                          "nodeType": "MemberAccess",
                          "src": "3855:9:149",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 89907,
                          "name": "_gasLimit",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 89870,
                          "src": "3866:9:149",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 89908,
                          "name": "_data",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 89872,
                          "src": "3877:5:149",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes_memory_ptr",
                            "typeString": "bytes memory"
                          }
                        },
                        {
                          "id": 89909,
                          "name": "withdrawalHash",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 89876,
                          "src": "3884:14:149",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          {
                            "typeIdentifier": "t_bytes_memory_ptr",
                            "typeString": "bytes memory"
                          },
                          {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        ],
                        "id": 89899,
                        "name": "MessagePassed",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 89818,
                        "src": "3804:13:149",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_event_nonpayable$_t_uint256_$_t_address_$_t_address_$_t_uint256_$_t_uint256_$_t_bytes_memory_ptr_$_t_bytes32_$returns$__$",
                          "typeString": "function (uint256,address,address,uint256,uint256,bytes memory,bytes32)"
                        }
                      },
                      "id": 89910,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "3804:95:149",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 89911,
                    "nodeType": "EmitStatement",
                    "src": "3799:100:149"
                  },
                  {
                    "id": 89915,
                    "nodeType": "UncheckedBlock",
                    "src": "3910:45:149",
                    "statements": [
                      {
                        "expression": {
                          "id": 89913,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "UnaryOperation",
                          "operator": "++",
                          "prefix": true,
                          "src": "3934:10:149",
                          "subExpression": {
                            "id": 89912,
                            "name": "msgNonce",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 89801,
                            "src": "3936:8:149",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint240",
                              "typeString": "uint240"
                            }
                          },
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint240",
                            "typeString": "uint240"
                          }
                        },
                        "id": 89914,
                        "nodeType": "ExpressionStatement",
                        "src": "3934:10:149"
                      }
                    ]
                  }
                ]
              },
              "documentation": {
                "id": 89866,
                "nodeType": "StructuredDocumentation",
                "src": "3075:231:149",
                "text": "@notice Sends a message from L2 to L1.\n @param _target   Address to call on L1 execution.\n @param _gasLimit Minimum gas limit for executing the message on L1.\n @param _data     Data to forward to L1 target."
              },
              "functionSelector": "c2b3e5ac",
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "initiateWithdrawal",
              "nameLocation": "3320:18:149",
              "parameters": {
                "id": 89873,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 89868,
                    "mutability": "mutable",
                    "name": "_target",
                    "nameLocation": "3347:7:149",
                    "nodeType": "VariableDeclaration",
                    "scope": 89917,
                    "src": "3339:15:149",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 89867,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "3339:7:149",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 89870,
                    "mutability": "mutable",
                    "name": "_gasLimit",
                    "nameLocation": "3364:9:149",
                    "nodeType": "VariableDeclaration",
                    "scope": 89917,
                    "src": "3356:17:149",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 89869,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "3356:7:149",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 89872,
                    "mutability": "mutable",
                    "name": "_data",
                    "nameLocation": "3388:5:149",
                    "nodeType": "VariableDeclaration",
                    "scope": 89917,
                    "src": "3375:18:149",
                    "stateVariable": false,
                    "storageLocation": "memory",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes"
                    },
                    "typeName": {
                      "id": 89871,
                      "name": "bytes",
                      "nodeType": "ElementaryTypeName",
                      "src": "3375:5:149",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_storage_ptr",
                        "typeString": "bytes"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "3338:56:149"
              },
              "returnParameters": {
                "id": 89874,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "3410:0:149"
              },
              "scope": 89931,
              "stateMutability": "payable",
              "virtual": false,
              "visibility": "public"
            },
            {
              "id": 89930,
              "nodeType": "FunctionDefinition",
              "src": "4282:134:149",
              "nodes": [],
              "body": {
                "id": 89929,
                "nodeType": "Block",
                "src": "4336:80:149",
                "nodes": [],
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "id": 89925,
                          "name": "msgNonce",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 89801,
                          "src": "4383:8:149",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint240",
                            "typeString": "uint240"
                          }
                        },
                        {
                          "id": 89926,
                          "name": "MESSAGE_VERSION",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 89793,
                          "src": "4393:15:149",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint16",
                            "typeString": "uint16"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint240",
                            "typeString": "uint240"
                          },
                          {
                            "typeIdentifier": "t_uint16",
                            "typeString": "uint16"
                          }
                        ],
                        "expression": {
                          "id": 89923,
                          "name": "Encoding",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 101941,
                          "src": "4353:8:149",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_Encoding_$101941_$",
                            "typeString": "type(library Encoding)"
                          }
                        },
                        "id": 89924,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "encodeVersionedNonce",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 101870,
                        "src": "4353:29:149",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint240_$_t_uint16_$returns$_t_uint256_$",
                          "typeString": "function (uint240,uint16) pure returns (uint256)"
                        }
                      },
                      "id": 89927,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "4353:56:149",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "functionReturnParameters": 89922,
                    "id": 89928,
                    "nodeType": "Return",
                    "src": "4346:63:149"
                  }
                ]
              },
              "documentation": {
                "id": 89918,
                "nodeType": "StructuredDocumentation",
                "src": "3967:310:149",
                "text": "@notice Retrieves the next message nonce. Message version will be added to the upper two\n         bytes of the message nonce. Message version allows us to treat messages as having\n         different structures.\n @return Nonce of the next message to be sent, with added message version."
              },
              "functionSelector": "ecc70428",
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "messageNonce",
              "nameLocation": "4291:12:149",
              "parameters": {
                "id": 89919,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "4303:2:149"
              },
              "returnParameters": {
                "id": 89922,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 89921,
                    "mutability": "mutable",
                    "name": "",
                    "nameLocation": "-1:-1:-1",
                    "nodeType": "VariableDeclaration",
                    "scope": 89930,
                    "src": "4327:7:149",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 89920,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "4327:7:149",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "4326:9:149"
              },
              "scope": 89931,
              "stateMutability": "view",
              "virtual": false,
              "visibility": "public"
            }
          ],
          "abstract": false,
          "baseContracts": [
            {
              "baseName": {
                "id": 89784,
                "name": "ISemver",
                "nodeType": "IdentifierPath",
                "referencedDeclaration": 107973,
                "src": "754:7:149"
              },
              "id": 89785,
              "nodeType": "InheritanceSpecifier",
              "src": "754:7:149"
            }
          ],
          "canonicalName": "L2ToL1MessagePasser",
          "contractDependencies": [
            101014
          ],
          "contractKind": "contract",
          "documentation": {
            "id": 89783,
            "nodeType": "StructuredDocumentation",
            "src": "315:407:149",
            "text": "@custom:proxied\n @custom:predeploy 0x4200000000000000000000000000000000000016\n @title L2ToL1MessagePasser\n @notice The L2ToL1MessagePasser is a dedicated contract where messages that are being sent from\n         L2 to L1 can be stored. The storage root of this contract is pulled up to the top level\n         of the L2 output to reduce the cost of proving the existence of sent messages."
          },
          "fullyImplemented": true,
          "linearizedBaseContracts": [
            89931,
            107973
          ],
          "name": "L2ToL1MessagePasser",
          "nameLocation": "731:19:149",
          "scope": 89932,
          "usedErrors": []
        }
      ],
      "license": "MIT"
    },
    "id": 149
  }

export const L2ToL1MessagePasserAbi = L2ToL1MessagePasserForgeArtifacts['abi']