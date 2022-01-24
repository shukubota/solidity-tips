# solidity-tips

```
docker-compose up
docker-copmpose exec app bash
```

```
geth --networkid "15" --nodiscover --datadir "eth_private_net" console 2>> eth_private_net/geth_err.log
```

```
geth --networkid "15" --nodiscover --datadir "eth_private_net"
```
でサーバを立てる

```
geth --datadir "eth_private_net" attach ipc:eth_private_net/geth.ipc
```
でconsoleに入る

```
geth --networkid "15" --nodiscover --datadir "eth_private_net" --http --http.addr 0.0.0.0
```

### mining
前提としてgeth initをして初期化していないとmining進みません
geth consoleに入って
```
$ miner.start()
```

```
ethash.getHashrate()
```
でhashrateの確認

```
eth.blockNumber
```
でblockNumberの確認

## main netへの接続
```
$ geth --datadir "/root/geth-work/mainnet_data" 2>> /home/ubuntu/mainnet_data/e01.log &
```

```
geth --datadir "mainnet_data" attach ipc:mainnet_data/geth.ipc
```

## dapp
```
meteor --allow-superuser
```