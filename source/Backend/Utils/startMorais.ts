import Moralis from "moralis";


export const startMorais = async () => {
  if (!Moralis.Core.isStarted) {
    await Moralis.start({
      apiKey: process.env.MORALISKEY,
    });
    
  }
};
