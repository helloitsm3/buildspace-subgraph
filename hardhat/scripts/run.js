const hre = require("hardhat");

async function main() {
    const Buildspace = await hre.ethers.getContractFactory("Buildspace");
    const buildspace = await Buildspace.deploy("");

    await buildspace.deployed();
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
