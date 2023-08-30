import React from "react";

function Box(props) {
  const style = {
    backgroundColor: props.on ? "#222222" : "transparent",
  };

  return <div style={style} onClick={props.toggle} className="box"></div>;
}

export default Box;
