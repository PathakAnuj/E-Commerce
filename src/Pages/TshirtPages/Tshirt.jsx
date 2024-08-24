import React, { useState } from "react";
import "./App.css";

const Tshirt = () => {
  const [color, setColor] = useState("white");
  const [image, setImage] = useState(null);
  const [text, setText] = useState("");
  const [textSize, setTextSize] = useState(12);
  const [textColor,setTextColor]=useState("black")

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  const handleImageChange = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleTextSizeChange = (e) => {
    setTextSize(e.target.value);
  };

  const handleTextColorChange=(e)=>{
    setTextColor(e.target.value)
  }

  return (
    <div className="tshirt">
      <div className="tshirt-container">
        <div className="tshirt-image">
          <img src={image} alt="" />
        </div>
        <div className="tshirt-text">
          <p style={{ fontSize: textSize + "px",color:textColor }}>{text}</p>
        </div>
      </div>
      <div className="settings">
        <h2>Settings</h2>
        <div className="setting-item">
          <label htmlFor="color">Change T-shirt Color</label>
          <select name="color" id="color" onChange={handleColorChange}>
            <option value="white">White</option>
            <option value="black">Black</option>
            <option value="red">Red</option>
            <option value="blue">Blue</option>
          </select>
        </div>
        <div className="setting-item">
          <label htmlFor="image">Change Image</label>
          <input
            type="file"
            name="image"
            id="image"
            onChange={handleImageChange}
          />
        </div>
        <div className="setting-item">
          <label htmlFor="text">Write Text</label>
          <input
            type="text"
            name="text"
            id="text"
            onChange={handleTextChange}
          />
        </div>
        <div className="setting-item">
          <label htmlFor="textSize">Text Size</label>
          <input
            type="range"
            name="textSize"
            id="textSize"
            min="12"
            max="36"
            onChange={handleTextSizeChange}
          />
        </div>
        <div className="setting-item">
          <label htmlFor="textColor">Text Color</label>
          <input
            type="color"
            name="textColor"
            id="textColor"
            onChange={handleTextColorChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Tshirt;