const { expect } = require("chai");

describe("BloomBall", function () {
  it("Should return the new greeting once it's changed", async function () {
    const BloomBall = await ethers.getContractFactory("BloomBall");
    const bloomball = await BloomBall.deploy();

    await bloomball.deployed();
  });
});
