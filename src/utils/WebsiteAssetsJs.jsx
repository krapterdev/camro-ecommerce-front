import { useEffect } from "react";

const WebsiteAssetsJs = () => {
  useEffect(() => {
    const scriptUrls = [
      "/src/assets/website/vendor/bootstrap/dist/js/bootstrap.bundle.min.js",
      // "/src/assets/website/jjyfgjkgjkfjs",
    ];

    const addedScripts = [];

    scriptUrls.forEach((src) => {
      const script = document.createElement("script");
      script.src = src;
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
      addedScripts.push(script);
    });

    return () => {
      addedScripts.forEach((script) => {
        if (script.parentNode) {
          script.parentNode.removeChild(script);
        }
      });
    };
  }, []);

  return null;
};

export default WebsiteAssetsJs;
