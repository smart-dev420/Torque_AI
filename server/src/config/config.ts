import dotenv from "dotenv";
import { GoogleAdsApi } from "google-ads-api";
dotenv.config({ path: "./.env" });

//* SERVER
//* Configuration for the main server
const SERVER_HOSTNAME = process.env.SERVER_HOSTNAME;
const SERVER_PORT = process.env.PORT || process.env.SERVER_PORT;

const SERVER = {
  hostname: SERVER_HOSTNAME,
  port: SERVER_PORT,
};

const client = new GoogleAdsApi({
  client_id: process.env.CLIENT_ID!,
  client_secret: process.env.CLIENT_SECRET!,
  developer_token: process.env.DEVELOPER_TOKEN!,
});

const config = {
  server: SERVER,
  client,
};

export default config;
