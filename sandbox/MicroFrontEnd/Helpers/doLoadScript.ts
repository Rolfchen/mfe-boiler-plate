/**
 * large inspiration from Sackrin's react-micro-ui-hook
 * @url https://github.com/sackrin/react-micro-ui-hooks
 *
 * @obsolete
 */

type DoLoadScript = (url: string, id: string) => Promise<boolean>;

export const doLoadScript: DoLoadScript = (url, id) =>
  new Promise((resolve, reject) => {
    const scriptElement = document.getElementById(id);
    if (!scriptElement) {
      const tag = document.createElement("script");
      tag.src = url;
      tag.id = id;

      tag.onload = () => {
        resolve(true);
      };
      tag.onerror = () => {
        reject(false);
      };
      document.getElementsByTagName("head")[0].appendChild(tag);
    } else {
      resolve(true);
    }
  });

export default doLoadScript;
