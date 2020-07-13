import React from "react";
import { render } from "react-dom";
import {
  createMuiTheme,
  ThemeProvider,
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core";
import { theme as themeConfig, config } from "./Configs";
import { ConfigurationProvider } from "./Context";
import {
  getRenderableComponent,
  RenderableName,
} from "./Helpers/getRenderableComponent";

type RenderComponent = (
  name: RenderableName,
  container: Element | DocumentFragment,
  props?: any,
  theme?: any
) => void;

const themeDefault = createMuiTheme(themeConfig);
const generateClassName = createGenerateClassName({
  productionPrefix: "mfe",
  seed: "FairFarmsBuyers",
});

export const renderComponent: RenderComponent = (
  name = "",
  container,
  props,
  theme = themeDefault
) => {
  const RenderableComponent = getRenderableComponent(name);
  render(
    <StylesProvider generateClassName={generateClassName}>
      <ThemeProvider theme={theme}>
        <ConfigurationProvider config={config}>
          <RenderableComponent {...props}></RenderableComponent>
        </ConfigurationProvider>
      </ThemeProvider>
    </StylesProvider>,
    container
  );
};

export default renderComponent;
