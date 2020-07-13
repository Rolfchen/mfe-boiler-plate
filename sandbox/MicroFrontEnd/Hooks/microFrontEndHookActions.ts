import { ScriptMeta } from "./Types/ScriptMeta";

export const microFrontEndHookActions = {
  setIsLoaded: (isLoaded: boolean) => ({
    type: "SET_IS_LOADED",
    isLoaded
  }),
  setEntry: (entry: ScriptMeta) => ({
    type: "SET_ENTRY",
    entry
  }),
  setDependencies: (dependencies: ScriptMeta[]) => ({
    type: "SET_DEPENDENCIES",
    dependencies
  }),
  setDependencyQueue: (dependencyQueue: {
    [id: string]: boolean
  }) => ({
    type: "SET_DEPENDENCY_QUEUE",
    dependencyQueue
  }),
};

export default microFrontEndHookActions;
