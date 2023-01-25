// import "hardhat-deploy";
import "@nomiclabs/hardhat-ethers";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { subtask, task, types } from "hardhat/config";
import { TASK_DEPLOY } from "hardhat-deploy"

import { deployFactoryAndRouter } from "../deployers/deploy";

const deployUniswap = async(hre: HardhatRuntimeEnvironment, addTokens?: boolean) => {
    console.log(hre.config)
    const { abi } = await hre.artifacts.readArtifact('Lock')
    const signer = (await hre.ethers.getSigners())[0]
    const { factory, router } = await deployFactoryAndRouter(hre, signer, signer)
    // const r = await router.deployed()
    console.log('factory: ', factory.address, 'router', router.address)

    

    // const deployments = await hre.deployments.all()
    // const artifacts = await hre.artifacts.getArtifactPaths()

    // console.log(deployments)
    // console.log(artifacts)

    
    // await hre.run(TASK_DEPLOY)
}

subtask("deploy-after", "deploys after")
.setAction(async(taskArgs, hre) => {
    console.log(hre.config.paths.artifacts)
    
})


task("deploy-uniswap0", "Deploy Uniswap Suite")
.addOptionalParam("addTokens", "Should deploy with tokens")
.setAction(async(taskArgs, hre) => {
    const { addTokens } = taskArgs;
    
    await deployUniswap(hre, true)
})

task("deploy-uniswap", "DEPLOYYY")
.setAction(async(taskArgs, hre) => {
    // await hre.run('deploy', { write: true })
    await deployUniswap(hre, true)
})

export default deployUniswap;