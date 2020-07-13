import React, { useState, useRef, useEffect } from "react";
import superagent from "superagent";
import { doLoadScript } from "./Helpers";
import { useMicroFrontEnd } from "./Hooks";

type MicroFrontEndComponentProps = {
  microUiDomain: string;
  microUiName: string;
  componentName: string;
  children: any;
  [propName: string]: any;
};

const MicroFrontEndComponent = ({
  // @TODO: Probably should read this from .env. This is just an example
  microUiDomain = "https://mfe-buyers-dev.fairfarms.com.au",
  microUiName = "mfeFairFarmsBuyers",
  componentName = "StatisticsOverview",
  children,
  ...props
}: MicroFrontEndComponentProps) => {
  const { isLoaded, renderComponent } = useMicroFrontEnd(
    microUiDomain,
    microUiName
  );
  const rootRef = useRef(null);

  useEffect(() => {
    if (isLoaded) {
      renderComponent(componentName, rootRef.current, props);
    }
  }, [isLoaded]);

  return (
    <React.Fragment>
      {isLoaded ? <div ref={rootRef}></div> : children}
    </React.Fragment>
  );
};

export default MicroFrontEndComponent;
