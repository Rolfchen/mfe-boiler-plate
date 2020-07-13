export type RenderComponent = (
  componentName: string,
  ref: any,
  props?: {
    [propName: string]: any
  }
) => void;
