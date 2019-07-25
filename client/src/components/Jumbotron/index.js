import React from "react";

function Jumbotron({ children }) {
  return (
    <div
      style={{ color:"white", height: 300, clear: "both", paddingTop: 120, textAlign: "center", backgroundImage: 'url("https://png.pngtree.com/thumb_back/fh260/back_pic/02/65/63/65578876d4f20e9.jpg")' }}
      className="jumbotron"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
