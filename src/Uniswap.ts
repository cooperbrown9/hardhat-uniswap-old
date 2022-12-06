import { HardhatRuntimeEnvironment } from "hardhat/types";
import { useEnvironment } from "./helpers";


export class Uniswap {
    public hre: HardhatRuntimeEnvironment;

    constructor(_hre: HardhatRuntimeEnvironment) {
        this.hre = _hre;
        
    }
    public async deploy() {
        
    }

}