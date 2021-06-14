const { expect } = require("chai");

describe("BloomBall", function () {
  let BloomBallToken, token, admin, privateSell, burn, referral, promotion, dev, addr1, addr2, addr3, addr4;

  beforeEach(async () => {
    [admin, privateSell, burn, referral, promotion, dev, addr1, addr2, addr3, addr4] = await ethers.getSigners();
    BloomBallToken = await ethers.getContractFactory("BloomBall");
    token = await BloomBallToken.deploy(
      admin.address,
      burn.address,
      referral.address,
      promotion.address,
      privateSell.address,
      dev.address
    );
    await token.deployed();
  });

  describe("Deploy Contract", () => {
    it("Should set the right owner", async () => {
      expect(await token.admin()).to.equal(admin.address);
    });

    it("Should allocate 50% of total supply to burn address", async () => {
      const totalSupply = await token.totalSupply();
      const burnAllowance = await token.connect(burn).allowance(admin.address, burn.address);
      const amountToBurn = totalSupply
        .mul(100 * 50)
        .div(100 * 100)
        .toString();
      expect(burnAllowance).to.be.equal(amountToBurn);
    });

    it("Should allocate 8% of total supply to developer address", async () => {
      const totalSupply = await token.totalSupply();
      const devAllowance = await token.connect(burn).allowance(admin.address, dev.address);
      const devAmount = totalSupply
        .mul(100 * 8)
        .div(100 * 100)
        .toString();
      expect(devAllowance).to.be.equal(devAmount);
    });

    it("Should allocate 4.5% of total supply to promotion address", async () => {
      const totalSupply = await token.totalSupply();
      const promotionAllowance = await token.connect(burn).allowance(admin.address, promotion.address);
      const promotionAmount = totalSupply
        .mul(100 * 4.5)
        .div(100 * 100)
        .toString();
      expect(promotionAllowance).to.be.equal(promotionAmount);
    });

    it("Should allocate 2.5% of total supply to referral address", async () => {
      const totalSupply = await token.totalSupply();
      const refAllowance = await token.connect(burn).allowance(admin.address, referral.address);
      const refAmount = totalSupply
        .mul(100 * 2.5)
        .div(100 * 100)
        .toString();
      expect(refAllowance).to.be.equal(refAmount);
    });

    it("Should burn 1% of allocated burn amount", async () => {
      const totalSupply = await token.totalSupply();
      const burnAmount = totalSupply.mul(100 * 50).div(100 * 100);
      const dailyBurnAmount = burnAmount.mul(100 * 1).div(100 * 100);
      await token.connect(burn).burn(dailyBurnAmount);
      const burnAllowance = await token.connect(burn).allowance(admin.address, burn.address);
      expect(burnAllowance).to.be.equal(burnAmount.sub(dailyBurnAmount).toString());
    });

    it("Should burn all burn amount in 100 times", async () => {
      const totalSupply = await token.totalSupply();
      const burnAmount = totalSupply.mul(100 * 50).div(100 * 100);
      const dailyBurnAmount = burnAmount.mul(100 * 1).div(100 * 100);
      let counter = 0;
      while (counter < 100) {
        await token.connect(burn).burn(dailyBurnAmount);
        counter++;
      }
      const burnAllowance = await token.connect(burn).allowance(admin.address, burn.address);
      expect(burnAllowance).to.be.equal(0);
    });

    it("Should transfer tokens between account", async () => {
      await token.transfer(addr1.address, 50);
      const addr1Balance = await token.balanceOf(addr1.address);
      expect(addr1Balance).to.equal(50);

      await token.connect(addr1).transfer(addr2.address, 50);
      const addr2Balance = await token.balanceOf(addr2.address);
      expect(addr2Balance).to.equal(50);
    });

    it("Should fail if sender doesn't have enough tokens", async () => {
      const initialAdminBalance = await token.balanceOf(admin.address);

      await expect(token.connect(addr1).transfer(admin.address, 1)).to.be.revertedWith("Insuffiencet balance");

      expect(await token.balanceOf(admin.address)).to.equal(initialAdminBalance);
    });

    it("Should update balance after transfers", async () => {
      const initialAdminBalance = await token.balanceOf(admin.address);

      await token.transfer(addr1.address, 1000);
      await token.transfer(addr2.address, 9000);

      const newAdminBalance = await token.balanceOf(admin.address);

      expect(newAdminBalance).to.equal(initialAdminBalance.sub(1000 + 9000));
      const addr1Balance = await token.balanceOf(addr1.address);
      expect(addr1Balance).to.equal(1000);
      const addr2Balance = await token.balanceOf(addr2.address);
      expect(addr2Balance).to.equal(9000);
    });

    it("Should have allowance", async () => {
      await token.transfer(addr1.address, 5000);
      await token.connect(addr1).approve(addr2.address, 1500);
      expect(await token.connect(addr2).allowance(addr1.address, addr2.address)).to.be.equal(1500);
    });

    it("Should transferFromAllowance", async () => {
      await token.transfer(addr1.address, 5000);
      await token.connect(addr1).approve(addr2.address, 1500);
      await token.connect(addr2).transferFrom(addr1.address, addr3.address, 700);
      expect(await token.connect(addr2).allowance(addr1.address, addr2.address)).to.be.equal(1500 - 700);
      expect(await token.connect(addr3).balanceOf(addr3.address)).to.be.equal(700);
    });
  });
});
