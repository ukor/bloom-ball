//SPDX-License-Identifier: MIT
pragma solidity ^0.8.1;

import "hardhat/console.sol";

contract BloomBall {
  mapping(address => uint256) private _balances;

  mapping(address => mapping(address => uint256)) private _allowances;

  uint256 private _totalSupply;

  string private _name;
  string private _symbol;
  uint8 private _decimals;

  address public admin;

  address internal _referralAddress;
  address internal _burnerAddress;
  address internal _promotionAddress;
  address internal _privateSellAddress;
  address internal _developerAddress;

  event Transfer(address from, address to, uint256 value);

  event Approval(address from, address recipient, uint256 amount);

  constructor(
    address _admin,
    address _burnAddress,
    address _refAddress,
    address _promoAddress,
    address _earlySellAddress,
    address _devAddress
  ) {
    _name = "Bloom Ball";
    _symbol = "BBT";
    _decimals = 15;

    admin = _admin;
    _mint(admin, 1 * 10**decimals());
    // allocation
    _burnerAddress = _burnAddress;
    _referralAddress = _refAddress;
    _promotionAddress = _promoAddress;
    _privateSellAddress = _earlySellAddress;
    _developerAddress = _devAddress;
    _burnAllocation();
    _referralAllocation();
    _promotionAllocation();
    _privateSellAllocation();
    _devAllocation();
  }

  function name() public view returns (string memory) {
    return _name;
  }

  function symbol() public view returns (string memory) {
    return _symbol;
  }

  function decimals() public view returns (uint8) {
    return _decimals;
  }

  function totalSupply() public view returns (uint256) {
    return _totalSupply;
  }

  function balanceOf(address account) public view returns (uint256) {
    return _balances[account];
  }

  /// Transfer value from sender to recipient
  function transfer(address recipient, uint256 amount) public returns (bool) {
    _transfer(msg.sender, recipient, amount);

    return true;
  }

  /// Returns the amount of value a spender is allowed to spend on behalf of the owner
  function allowance(address _tokenOwner, address spender) public view returns (uint256) {
    return _allowances[_tokenOwner][spender];
  }

  // Set amount that a spender is allowed to spend on behalf of the sender
  function approve(address spender, uint256 amount) public returns (bool) {
    _approve(msg.sender, spender, amount);

    return true;
  }

  /// Allows spender transfer from owner using allowance
  function transferFrom(
    address _tokenOwner,
    address _recipient,
    uint256 _amount
  ) public returns (bool) {
    _transfer(_tokenOwner, _recipient, _amount);

    uint256 currentAllowance = _allowances[_tokenOwner][msg.sender];
    require(currentAllowance >= _amount, "Amount exceeds allowance");
    _approve(_tokenOwner, msg.sender, currentAllowance - _amount);

    return true;
  }

  function increaseAllowance(address spender, uint256 addedValue) public returns (bool) {
    uint256 currentAllowance = _allowances[msg.sender][spender];
    _approve(msg.sender, spender, currentAllowance + addedValue);
    return true;
  }

  // destroy tokens
  function burn(uint256 _amount) public returns (bool) {
    require(msg.sender == _burnerAddress, "Only burn address allowed");
    _burn(msg.sender, _amount);

    return true;
  }

  function decreaseAllowance(address spender, uint256 subtractedValue) public returns (bool) {
    uint256 currentAllowance = _allowances[msg.sender][spender];
    require(currentAllowance >= subtractedValue, "Decreased allowance below zero");
    _approve(msg.sender, spender, currentAllowance - subtractedValue);

    return true;
  }

  /// Set amount a spender can spend on behalf of the owner
  function _approve(
    address _owner,
    address spender,
    uint256 amount
  ) internal {
    require(_owner != address(0), "Approve from zero address");
    require(spender != address(0), "Approve to zero address");

    _allowances[_owner][spender] = amount;
    emit Approval(_owner, spender, amount);
  }

  function _transfer(
    address sender,
    address recipient,
    uint256 amount
  ) internal {
    require(sender != address(0), "Transfering from zero address");
    require(recipient != address(0), "Transfering to zero address");

    uint256 senderBalance = _balances[sender];
    require(senderBalance >= amount, "Insuffiencet balance");
    _balances[sender] = senderBalance - amount;
    _balances[recipient] += amount;

    emit Transfer(sender, recipient, amount);
  }

  /// create new tokens and emit event from the zero address
  function _mint(address account, uint256 amount) internal {
    require(account != address(0), "Mint to the zero address");

    _totalSupply += amount;
    _balances[account] += amount;
    emit Transfer(address(0), account, amount);
  }

  /// Destroy tokens - Send amount
  function _burn(address _bunnerAddress, uint256 amount) internal {
    require(_bunnerAddress != address(0), "Burn from the zero address");
    uint256 currentBurnAllowance = _allowances[admin][_bunnerAddress];
    require(currentBurnAllowance >= amount, "Insufficient amount to burn");

    uint256 accountBalance = _balances[admin];
    require(accountBalance >= amount, "Burn amount exceeds balance");
    // deduct from admin token balance (total suply)
    _balances[admin] = accountBalance - amount;
    _totalSupply -= amount;

    // update burner address allowance
    _approve(admin, _burnerAddress, currentBurnAllowance - amount);

    emit Transfer(admin, address(0), amount);
  }

  // approve the refferal address to spend 2.5% (250bp) of total supply
  function _referralAllocation() internal onlyAdmin {
    uint256 amount = (totalSupply() * (100 * 2.5)) / (100 * 100);
    approve(_referralAddress, amount);
  }

  // approve the dev address to spend 8% (800bp) of total supply
  function _devAllocation() internal onlyAdmin {
    uint256 amount = (totalSupply() * (100 * 8)) / (100 * 100);
    approve(_developerAddress, amount);
  }

  // approve the promotion address to spend 4.5 (450bp) of total supply
  function _promotionAllocation() internal onlyAdmin {
    uint256 amount = (totalSupply() * (100 * 4.5)) / (100 * 100);
    approve(_promotionAddress, amount);
  }

  // approve the private sell address to spend 15% (150bp) of total supply
  function _privateSellAllocation() internal onlyAdmin {
    uint256 amount = (totalSupply() * (100 * 15)) / (100 * 100);
    approve(_privateSellAddress, amount);
  }

  // allocate the amount of bloom ball token to burn
  // 50% (500bp) as been approve to be burnt from the total supply
  function _burnAllocation() internal onlyAdmin {
    uint256 amount = (totalSupply() * (100 * 50)) / (100 * 100);
    approve(_burnerAddress, amount);
  }

  modifier onlyAdmin() {
    require(msg.sender == admin, "Only admin operation");

    _;
  }

  modifier largerThen10000(uint256 _value) {
    require((_value / 10000) * 10000 == _value, "Amount is too low.");
    _;
  }
}
