# Deposit 

# 1. Approve some amount for OptimismPortal on L1 ERC20 token address
cast send 0x5FbDB2315678afecb367f032d93F642f64180aa3 "approve(address, uint256)" 0x959922bE3CAee4b8Cd9a407cc3ac1C251C2007B1  2ether  --private-key 3b6b5a15db6a8ab7f432a5d7fa211f4bab00f440a2dd53291fb80f82d64fb7a3 --gas-limit 521800  --gas-price 12000000000 
# 2. OptimismPortal  在从L1账户 （private key)   转账ERC20 token 到L2的另外一个账户上作为它的native token  depositERC20Transaction
cast send 0x959922bE3CAee4b8Cd9a407cc3ac1C251C2007B1 "depositERC20Transaction(address,uint256,uint256, uint64,bool,bytes)" 0x0591b04e12Cf792cb1b321fDE27283c15371aCd1  2ether  2ether 521800 false 0x --private-key 3b6b5a15db6a8ab7f432a5d7fa211f4bab00f440a2dd53291fb80f82d64fb7a3 --gas-limit 521800  --gas-price 12000000000 
# 3. checking sender L1 balance
cast call  0x5FbDB2315678afecb367f032d93F642f64180aa3 "balanceOf(address)"  0x0591b04e12Cf792cb1b321fDE27283c15371aCd1 
