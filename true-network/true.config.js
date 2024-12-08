import { TrueApi, testnet } from "@truenetworkio/sdk";

// If you are not in a NodeJS environment, please comment the code following code:
import dotenv from "dotenv";
dotenv.config();

export const getTrueNetworkInstance = async () => {
  const trueApi = await TrueApi.create(config.account.secret);

  await trueApi.setIssuer(config.issuer.hash);

  return trueApi;
};

export const config = {
  network: testnet,
  account: {
    address: "iLVDid7RvLmzBctjcb8ZH58BC7MchK5gDaKFqGWnKVoGW4y",
    secret: process.env.TRUE_NETWORK_SECRET_KEY ?? "",
  },
  issuer: {
    name: "memoraAi",
    hash: "0x11a336f83fee98a9986b8184ea0602b9b88922eb09e949dcf202743d49f4c033",
  },
  algorithm: {
    id: undefined,
    path: "acm",
    schemas: [],
  },
};
