import React, { createContext } from "react";
import { getDefaultConfiguration } from "./Helpers";

export const ConfigurationContext = createContext(getDefaultConfiguration());

export default ConfigurationContext;
