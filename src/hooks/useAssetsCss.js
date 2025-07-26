import { useEffect } from "react";

const useAssetsCss = (urls = []) => {
  useEffect(() => {
    const links = urls.map((href) => {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.type = "text/css";
      link.href = href;
      document.head.appendChild(link);
      return link;
    });

    return () => {
      links.forEach((link) => {
        if (link.parentNode) link.parentNode.removeChild(link);
      });
    };
  }, [urls]);
};

export default useAssetsCss;