import React from "react";
import { Link } from "react-router-dom";

const WebsiteHomeVideoSection = () => {
  return (
    <>
      <section className="Video">
        <video
          src="src/assets/website/images/video.mp4"
          loop
          autoPlay
          muted
          className="w-100"
        />
      </section>
    </>
  );
};

export default WebsiteHomeVideoSection;
