import { Fragment } from "react";
import * as MFEComponents from "../MFEComponents";

export type RenderableName = keyof typeof MFEComponents | "";

type GetRenderableComponent = (name: RenderableName) => React.FunctionComponent;

export const getRenderableComponent: GetRenderableComponent = (name) => {
  const renderableComponent = MFEComponents[name] || Fragment;
  return renderableComponent;
};

export default getRenderableComponent;
