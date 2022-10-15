# 1. Import module
import json
from web3 import Web3

# 2. Set web3 module
infura_url = "https://mainnet.infura.io/v3/4aa4782b11fd4c27953f53bf3748ec04"
web3 = Web3(Web3.HTTPProvider(infura_url))

# 3. Print Connection check
print(web3.isConnected())

# 4. Get Block Number
print(web3.eth.blockNumber)

# 5. Print account balances
# account = "0xd26114cd6EE289AccF82350c8d8487fedB8A0C07"
account = "0x0330f4B1eeAb3cBC3316Efa2Fd49D93abaE52109"
balance = web3.eth.getBalance(account)
print(web3.fromWei(balance, "ether"))