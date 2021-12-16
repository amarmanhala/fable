import React, { useState } from "react";
import { useSelector, shallowEqual } from "react-redux";
import EditorNavbar from "./EditorNavbar";

export default function Main() {
  const getColor = () => {
    return useSelector(
      (state) => ({
        editorBackgroundColor: state.editorBackgroundColor,
        textColor: state.textColor,
        textAlignment: state.textAlignment,
        textHighlighted: state.textHighlighted,
        textBold: state.textBold,
        fontSize: state.fontSize,
      }),
      shallowEqual
    );
  };
  
  const { editorBackgroundColor, textColor, textAlignment, textBold, fontSize } = getColor();

  return (
    <div
      className="flex flex-col w-3/5 h-5/6 border border-dividerDark rounded-3xl"
      style={{ background: editorBackgroundColor }}
    >
      <EditorNavbar></EditorNavbar>
      <div className="flex flex-row h-full px-10 py-4">
        <div className="container">
          <div className="overflow-auto">
            <div
              className="whitespace-pre-wrap	break-words"
              id="highlights"
            ></div>
          </div>
          <textarea
            className={`w-full h-full resize-none bg-transparent outline-none focus-none ${textBold ? 'font-black' : 'font-medium'}`}
            placeholder="Type something..."
            style={{ color: textColor, textAlign: textAlignment, fontSize: fontSize + "px"}}
            id="notes"
          ></textarea>
          
        </div>
      </div>
    </div>
  );
}
