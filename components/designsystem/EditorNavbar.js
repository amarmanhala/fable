import React, { useState } from "react";
import ColorPicker from "./ColorPicker";
import { motion } from "framer-motion";
import { AlignCenter, AlignLeft, AlignRight, Star } from "react-feather";
import BackgroundColorPicker from "./BackgroundColorPicker";
import { useSelector, useDispatch } from "react-redux";
import TextAlignment from "./TextAlignment";


const EditorNavbar = () => {
  const [openColorMenu, setopenColorMenu] = useState(false);
  const [selectedColor, setselectedColor] = useState(
    "linear-gradient(155.85deg, #DA2CC8 -2.92%, #FF8327 82.65%)"
  );
  const [openTextAlignMenu, setopenTextAlignMenu] = useState(false);
  const [textHighlight, settextHighlight] = useState(true);
  const textColors = [
    "#fff",
    "#000",
    "#2495FF",
    "#6ACA43",
    "#FFC84E",
    "#FD8D32",
    "#ED4956",
    "#D10869",
    "#A306BA",
    "#D87981",
    "#E8BFC0",
    "#E8BFC0",
    "#E8C7A4",
    "#BF8140",
    "#3D2020",
    "#194325",
    "#363636",
    "#555555",
    "#737373",
    "#B2B2B2",
    "#C7C7C7",
  ];

  const dispatch = useDispatch();
  const updateTextColor = (color) => {
    dispatch({
      type: "CHANGE_TEXT_COLOR",
      payload: color,
    });
  };

  function handleColorSelection(color) {
   setselectedColor(color);
   updateTextColor(color);
   setopenColorMenu(false);
  }

  return (
    <div>
      <header className="w-full flex flex-col py-4 px-10">
        <div className="flex flex-row justify-between">
          <div className="flex flex-row">
            <div className="px-2">
              <ColorPicker
                onClick={() => {
                  setopenColorMenu(!openColorMenu);
                  setopenTextAlignMenu(false);
                }}
                color={selectedColor}
              ></ColorPicker>
            </div>
            <div className="px-2">
              <button
                onClick={() => {
                  setopenTextAlignMenu(!openTextAlignMenu);
                  setopenColorMenu(false);
                }}
              >
                <AlignCenter color="white" size={34}>
                  {" "}
                </AlignCenter>
              </button>
            </div>
            <div className="px-2">
              <button
                onClick={() => {
                  settextHighlight(!textHighlight);
                  setopenColorMenu(false);
                }}
                className={textHighlight ? "bg-white" : "bg-transparent"}
              >
                <Star size={28} color={textHighlight ? "black" : "white"}>
                  {" "}
                </Star>
              </button>
            </div>
          </div>
          <div>
            <BackgroundColorPicker color="bg-blue-600"></BackgroundColorPicker>
          </div>
        </div>
        {openColorMenu ? (
          <motion.div
            className="py-2 flex flex-row w-full justify-between overflow-scroll"
            animate={{ y: 6 }}
          >
            {textColors.map((color, i) => {
              return (
                <div key={i} className="mr-1">
                  <ColorPicker
                    color={color}
                    onClick={() => { handleColorSelection(color)}}
                    small={true}
                  ></ColorPicker>
                </div>
              );
            })}
          </motion.div>
        ) : null}

        {openTextAlignMenu ? (
          <motion.div
            className="pt-3 flex flex-row w-40 justify-between"
            animate={{ y: 6 }}
          >
            <TextAlignment></TextAlignment>
          </motion.div>
        ) : null}
      </header>
    </div>
  );
};

export default EditorNavbar;
