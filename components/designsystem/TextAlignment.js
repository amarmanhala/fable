import React, {useState} from 'react';
import { AlignCenter, AlignLeft, AlignRight, Star } from "react-feather";
import { useSelector, useDispatch } from "react-redux";


const TextAlignment = () => {
    const dispatch = useDispatch();
    const changeTextAlignment = (type) => {
      dispatch({
        type: "CHANGE_TEXT_ALIGNMENT",
        payload: type,
      });
  
    };
    return (
        <>
            <button onClick={() => changeTextAlignment("left")}><AlignLeft color="white" size={34}></AlignLeft></button>
            <button onClick={() => changeTextAlignment("center")}><AlignCenter color="white" size={34}></AlignCenter></button>
            <button onClick={() => changeTextAlignment("right")}><AlignRight color="white" size={34}></AlignRight></button>
        </>
    );
}

export default TextAlignment;
