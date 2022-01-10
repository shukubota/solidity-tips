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

## main netへの接続
```
$ geth --datadir "/root/geth-work/mainnet_data" 2>> /home/ubuntu/mainnet_data/e01.log &
```

```
geth --datadir "mainnet_data" attach ipc:mainnet_data/geth.ipc
```