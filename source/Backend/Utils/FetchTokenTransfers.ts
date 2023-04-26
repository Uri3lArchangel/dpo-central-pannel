import Moralis from "moralis";
import { EvmChain } from "@moralisweb3/common-evm-utils";
import { startMorais } from "./startMorais";


export const fetchTransfers = async () => {
  try {
   await startMorais()
    const address = process.env.TOKENADDR!
    const chain = EvmChain.ARBITRUM;
    const response  = await Moralis.EvmApi.token.getTokenTransfers({
        address,chain
    })
    // console.log(response.toJSON())
    return response.toJSON()
  } catch (err) {
    console.log(err)
  }
};
