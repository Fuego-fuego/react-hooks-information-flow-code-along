import React, { useState } from "react";
import { getRandomColor } from "./randomColorGenerator.js";
import Child from "./Child";

function Parent() {
  const randomColor = getRandomColor();
  const [color, setColor] = useState("yellow");  
  const [childrenColor, setChildrenColor] = useState("#FFF");

  function handlechangecolor(newChildColor){
    const newRandomColor = getRandomColor();
    setColor(newRandomColor);
    setChildrenColor(newChildColor);
  }

  return (
    <div className="parent" style={{ backgroundColor: color }}>
      <Child color ={childrenColor} onChangeColor={handlechangecolor}/>
      <Child color ={childrenColor} onChangeColor={handlechangecolor}/>
    </div>
  );
}

export default Parent;
