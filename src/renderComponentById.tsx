import renderComponent from "./renderComponent";
import {
  RenderableName,
} from "./Helpers/getRenderableComponent";

type RenderComponentById = (
  name: RenderableName,
  domId?: string,
  props?: any
) => void;

export const renderComponentById: RenderComponentById = (
  name = "",
  domId = "root",
  props
) => {
  const appContainer = document.getElementById(domId);
  renderComponent(name, appContainer, props);
};

export default renderComponentById;
