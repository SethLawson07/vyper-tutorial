import { time, loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("Store", function () {
  // We define a fixture to reuse the same setup in every store.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every store.
  async function deployStoreFixture() {

    // Contracts are deployed using the first signer/account by default
    const [owner, otherAccount] = await ethers.getSigners();

    const Store = await ethers.getContractFactory("Store");
    const store = await Store.deploy();

    return { store, owner };
  }

  describe("Deployment", function () {
    it("", async function () {
      const { store } = await loadFixture(deployStoreFixture);
      
   
    });

    it("test", async function () {
      const { store, owner } = await loadFixture(deployStoreFixture);
      await store.store(12);
      let value : integer = await store.getNb();
      console.log(value);
      
    });

});

});