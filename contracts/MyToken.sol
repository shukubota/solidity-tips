// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.11;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MyToken is ERC20 {
  struct LastSpent {
    address from;
    address to;
    uint256 amount;
  }
  LastSpent private _last;

  constructor(string memory name, string memory symbol) ERC20(name, symbol) public {}

  function _beforeTokenTransfer (address from, address to, uint256 amount) internal virtual override {
    _last.from = from;
    _last.to = to;
    _last.amount = amount;
  }
}