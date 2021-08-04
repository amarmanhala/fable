import React, {useState} from 'react';
import { useSelector, useDispatch } from "react-redux";

const BackgroundColorPicker = ({color}) => {
    const bgColors = [
        "linear-gradient(155.85deg, #DA2CC8 -2.92%, #FF8327 82.65%)",
        "linear-gradient(134.98deg, #C22EE2 5.83%, #46A0FC 69.26%)",
        "linear-gradient(123.92deg, #57C335 0%, #2EC4E6 112.9%)",
        "linear-gradient(128.83deg, #ED5155 15.1%, #FBBE5A 100%)",
        "linear-gradient(128.83deg, #CF32D5 15.1%, #FA627D 100%)",
        "linear-gradient(119.55deg, #EF5349 0%, #F87933 15.06%, #FCBE50 36.51%, #92C252 53.76%, #3B98E8 71.65%, #374ED9 85.14%, #8816C0 95.31%)",
        "1E1E1E",
        "#000",
        "#E5E5E5",
        "transparent",
      ];
      const [colorCounter, setColorCounter] = useState(0);
      const [currentColor, setCurrentColor] = useState(bgColors[0]);
      const editorBackgroundColor = useSelector(
        (state) => state.editorBackgroundColor
      );
      const dispatch = useDispatch();
      const updateBackgroundColor = () => {
        dispatch({
          type: "CHANGE_EDITOR_BACKGROUND_COLOR",
          payload: bgColors[colorCounter],
        });
    
        setColorCounter(colorCounter === 9 ? colorCounter - 9 : colorCounter + 1);
        setCurrentColor(bgColors[colorCounter]);
      };
    return (
        <div>
        <button className="h-8 w-8 rounded-full border-white focus:outline-none border-2" style={{background: currentColor}} onClick={updateBackgroundColor}></button>
    </div>
    );
}

export default BackgroundColorPicker;
