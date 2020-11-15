import React from "react";

function Video() {
  return (
    <div className="video">
      <iframe
        width="1265"
        height="700"
        src="https://www.youtube.com/embed/2Vv-BfVoq4g"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
}

export default Video;
