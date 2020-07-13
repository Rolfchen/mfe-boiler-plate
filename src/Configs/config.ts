import { ConfigurationStateType } from "../Context/Types/ConfigurationStateType";

const { API_URL = "http://localhost:3000/api/v1" } = process.env;

export const config: ConfigurationStateType = {
  apiDomain: API_URL,
};

export default config;
