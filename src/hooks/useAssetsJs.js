import { useEffect } from "react";

const useAssetsJs = (urls = []) => {
  useEffect(() => {
    const scripts = urls.map((src) => {
      const script = document.createElement("script");
      script.src = src;
      script.async = true;
      document.body.appendChild(script);
      return script;
    });

    return () => {
      scripts.forEach((script) => {
        if (script.parentNode) script.parentNode.removeChild(script);
      });
    };
  }, [urls]);
};

export default useAssetsJs;