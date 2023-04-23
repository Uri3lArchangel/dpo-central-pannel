import Moralis from "moralis";
import { EvmChain } from "@moralisweb3/common-evm-utils";
import { startMorais } from "./startMorais";

const address = process.env.TOKENADDR!
console.log("address",address)


export const fetchBalance = async () => {
  try {
    await startMorais()
    const chain = EvmChain.ARBITRUM;
    const response = await Moralis.EvmApi.token.getTokenPrice({
      address,
      chain,
    });

    return response.raw.usdPrice.toFixed(2);
  } catch (err:any) {
    // console.log(err)
  return (err.details.response.data.message);
  }
};
