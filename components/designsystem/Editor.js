import React, { useState } from "react";
import { useSelector, shallowEqual } from "react-redux";
import EditorNavbar from "./EditorNavbar";
import TextAlignment from "./TextAlignment";

export default function Main() {
  const getColor = () => {
    return useSelector(
      (state) => ({
        editorBackgroundColor: state.editorBackgroundColor,
        textColor: state.textColor,
        textAlignment: state.textAlignment,
      }),
      shallowEqual
    );
  };
  const { editorBackgroundColor, textColor, textAlignment } = getColor();

  return (
    <div
      className="flex flex-col w-3/5 h-5/6 border border-dividerDark rounded-3xl"
      style={{ background: editorBackgroundColor }}
    >
      <EditorNavbar></EditorNavbar>
      <div className="flex flex-row h-full px-10 py-4">
        <textarea
          className="w-full h-full resize-none text-xl bg-transparent outline-none focus-none"
          placeholder="Type something..."
          style={{color: textColor, textAlign: textAlignment}}
        ></textarea>
      </div>
    </div>
  );
}
