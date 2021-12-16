import React, {useState} from 'react';  
import '../../styles/Slider.module.css'
import { useSelector, useDispatch, shallowEqual } from "react-redux";

const Slider = () => {
    const [fontSize, setFontSize] = useState(null);

    const dispatch = useDispatch();
  const changeFontSize = e => {
    dispatch({
      type: "FONT_SIZE",
      payload: e.target.value,
    });
  };
   
  const handleChange = e => {
      
      setFontSize(e.target.value);
      console.log(fontSize);
      changeFontSize();
  }

    return (
        <div>
            <input type="range" id="#slider" min="20" max="40" name="fontSize" onChange={changeFontSize}></input>
        </div>
    );
}

export default Slider;
