import React from "react";
import { ConfigurationContext } from "./ConfigurationContext";
import { ConfigurationStateType } from "./Types/ConfigurationStateType";

const { Provider } = ConfigurationContext;

type Props = {
  config: ConfigurationStateType;
  children: any;
};
export const ConfigurationProvider = ({ config, children }: Props) => {
  return <Provider value={config}>{children}</Provider>;
};

export default ConfigurationProvider;
