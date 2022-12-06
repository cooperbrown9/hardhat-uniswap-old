import "hardhat-deploy";
import "@nomiclabs/hardhat-ethers";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { task, types } from "hardhat/config";

import { deployFactory } from "../deployers/deploy";

const deployUniswap = async(hre: HardhatRuntimeEnvironment, addTokens?: boolean) => {
    const { abi } = await hre.artifacts.readArtifact('Lock')
    // console.log('ABI', abi)
    console.log('add tokens', addTokens)
    // console.log(hre.network.config)
    const signer = (await hre.ethers.getSigners())[0]
    await deployFactory(signer, signer)
}


task("deploy-uniswap0", "Deploy Uniswap Suite")
.addOptionalParam("addTokens", "Should deploy with tokens")
.setAction(async(taskArgs, hre) => {
    const { addTokens } = taskArgs;
    
    await deployUniswap(hre, true)
})

task("deploy-uniswap", "DEPLOYYY")
.setAction(async(taskArgs, hre) => {
    await hre.run("deploy")
    await deployUniswap(hre, true)
})

export default deployUniswap;