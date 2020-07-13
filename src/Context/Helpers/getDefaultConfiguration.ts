import { ConfigurationStateType } from "../Types/ConfigurationStateType";

const { API_URL = "http://localhost:3000/api/v1" } = process.env;

export const getDefaultConfiguration = (): ConfigurationStateType => {
  return {
    apiDomain: API_URL,
  };
};

export default getDefaultConfiguration;
