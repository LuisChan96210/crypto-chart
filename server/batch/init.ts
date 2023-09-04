import config from "config";

import { CryptowatchConfig } from "../../config/config.js";
import CryptowatchOhlcv from "./lib/cryptowatch/ohlcv.js";

const cryptowatchConfig: CryptowatchConfig = config.get("cryptowatch");
const quoteAssets = cryptowatchConfig.quoteAssets;
const baseAsset = cryptowatchConfig.baseAsset;
const exchange = cryptowatchConfig.exchange;
const initialDataLimit = cryptowatchConfig.initialDataLimit;

quoteAssets.map(async (quoteAsset: string) => {
  const ohlcv = new CryptowatchOhlcv(exchange, quoteAsset, baseAsset, initialDataLimit);
  const data = await ohlcv.get();
  ohlcv.insert(data);
});
