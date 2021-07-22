import React from "react";
import "../styles/widgets.css";

function Widgets() {
  return (
    <div className="widgets">
      <iframe
      title='facebook'
        src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fapple%2Fposts%2F3750647745027803&show_text=true&width=500"
        width="300"
        height="100%"
        style={{border: 'none', overflow: 'hidden'}}
        scrolling="no"
        frameborder="0"
        allowfullscreen="true"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
}

export default Widgets;
