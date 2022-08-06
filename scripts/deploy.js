const hre = require("hardhat");

async function main() {
  const contract = await hre.ethers.getContractFactory("MetaMusic");
  const metaMusic = await contract.deploy();
  await metaMusic.deployed();

  console.log("Contract deployed");
  console.log("Address:" + metaMusic.address);
}

main()
  .then(() => {
    process.exit(0);
  })
  .catch((err) => {
    console.log(err);
    process.exit(0);
  });
