/**
 * large inspiration (and many borrowed codes) from Sackrin's react-micro-ui-hook
 * @url https://github.com/sackrin/react-micro-ui-hooks
 */

import { useEffect, useState, useCallback } from "react";
import superagent from "superagent";

import type { RenderComponent } from "./Types/RenderComponent";
import type { RenderComponentById } from "./Types/RenderComponentById";

type UseMicroFrontEnd = (
  mfeDomain: string,
  libName: string
) => {
  isLoaded: boolean,
  renderComponent: RenderComponent,
  renderComponentById: RenderComponentById
};

export const useMicroFrontEnd: UseMicroFrontEnd = (mfeDomain, libName) => {

  // @TODO - use Reducer
  const [isLoaded, setIsLoaded] = useState(false);
  const [entry, setEntry] = useState({
    id: `${libName}-main.js`,
    url: ""
  });

  const [dependencyQueue, setDependencyQueue] = useState(null);

  const EventMFEMounted = "MFEMounted";

  const handleMFEMounted = (e) => {
    setIsLoaded(true);
  }

  useEffect(() => {
    window.addEventListener(EventMFEMounted, handleMFEMounted);
  }, []);

  useEffect(() => {
    if (!isLoaded) {
      loadScripts(mfeDomain);
    }
  }, [isLoaded]);

  useEffect(() => {
    if (dependencyQueue !== null) {
      const allLoaded = Object.values<boolean>(dependencyQueue).reduce<boolean>((loaded, nextCheck) => {
        return loaded && nextCheck;
      }, true);
      if (allLoaded) {
        loadMainEntry();
      }
    }
  }, [dependencyQueue]);

  const renderComponent = useCallback(
    (componentName, ref, prop) => {
      window[libName].renderComponent(componentName, ref, prop);
    },
    [isLoaded]
  );

  const renderComponentById = useCallback(
    (componentName, id, prop) => {
      window[libName].renderComponentById(componentName, id, prop);
    },
    [isLoaded]
  );

  const loadMainEntry = () => {
    // If not loaded, try load it.
    if (document.head.querySelector(`script[src="${entry.url}"]`) === null) {
      const entryElement = document.createElement("script");
      entryElement.src = entry.url;
      entryElement.id = entry.id;
      entryElement.onload = () => {
        if (window[libName] && !isLoaded) {
          window.dispatchEvent(new CustomEvent(EventMFEMounted, {
            detail: {
              name: libName
            }
          }));
        }

      }
      entryElement.onerror = () => {
        // @TODO - Error rejection!

      }
      document.head.appendChild(entryElement);
    }
  }

  const loadScripts = async (microUiDomain) => {
    const manifestUrl = `${microUiDomain}/components/manifest`;
    //try {
    const response = await superagent.get(manifestUrl);
    const manifest = response.body;
    const entryScriptId = "main.js";
    const entryUrl = `${microUiDomain}/components${manifest[entryScriptId]}`;
    setEntry({
      id: `${libName}-${entryScriptId}`,
      url: entryUrl
    });

    const dependencies = Object.entries<string>(manifest).reduce(
      (dependencyList, scriptEntry) => {
        const [id, path] = scriptEntry;
        if (id !== entryScriptId && !path.includes(".map")) {
          return [
            ...dependencyList,
            {
              id,
              url: `${microUiDomain}/components${path}`
            }
          ]
        }
        return dependencyList;
      },
      []
    );

    if (dependencies.length > 0) {
      const dependencyLoadQueue = dependencies.reduce((queue, dependency) => {
        return {
          ...queue,
          [dependency.id]: false
        };
      }, {});
      setDependencyQueue(dependencyLoadQueue);
      dependencies.forEach((scriptMeta) => {
        if (document.getElementById(`${libName}-${scriptMeta.id}`) === null) {
          //if (document.querySelector(`script[src="${scriptMeta.url}]`) === null) {
          const entryElement = document.createElement("script");
          entryElement.src = scriptMeta.url;
          entryElement.id = `${libName}-${scriptMeta.id}`;
          entryElement.onload = () => {
            // @TODO - This should be called after ALL dependencies are loaded.
            setDependencyQueue({
              ...dependencyQueue,
              [scriptMeta.id]: true
            });

          }
          entryElement.onerror = () => {
            console.log("error");
          }
          if (document.querySelector(`script[src="${scriptMeta.url}]`) === null) {
            document.head.appendChild(entryElement);
          }
        }
      });
    }


  };

  return {
    isLoaded,
    renderComponent,
    renderComponentById
  }

}

export default useMicroFrontEnd;
