import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomiclabs/hardhat-vyper";

const config: HardhatUserConfig = {
  vyper: {
    compilers: [{ version: "0.2.1" }, { version: "0.3.0" }],
  },
};

export default config;
