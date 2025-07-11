import { useEffect } from "react";

const WebsiteAssetsCss = () => {
  useEffect(() => {
    const cssUrls = [

      "/src/assets/website/icons/iconly/index.min.css",
      "/src/assets/website/icons/feather/css/iconfont.css",
      "/src/assets/website/icons/fontawesome/css/all.min.css",
      "/src/assets/website/icons/flaticon/flaticon_pixio.css",
      "/src/assets/website/css/style.css",
      // "/src/assets/website/jhfgjhjhhs",
    ];

    const links = [];

    cssUrls.forEach((href) => {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = href;
      link.type = "text/css";
      document.head.appendChild(link);
      links.push(link);
    });

    return () => {
      links.forEach((link) => {
        if (link.parentNode) link.parentNode.removeChild(link);
      });
    };
  }, []);

  return null;
};

export default WebsiteAssetsCss;
