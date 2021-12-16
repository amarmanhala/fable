import React, { useState } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { Bold } from "react-feather";

const TextBold = () => {
  const getTextBold = () => {
    return useSelector(
      (state) => ({
        textBold: state.textBold,
      }),
      shallowEqual
    );
  };
  const dispatch = useDispatch();
  const changeTextBold = () => {
    dispatch({
      type: "IS_TEXT_BOLD",
      payload: !textBold,
    });
  };
  const { textBold } = getTextBold();

  return (
    <>
      <button
        onClick={() => {
          changeTextBold();
        }}
        className={`focus:outline-none ${textBold ? "bg-white rounded h-auto" : "bg-transparent"}`}
      >
        <Bold size={26} color={textBold ? "black" : "white"}>
          {" "}
        </Bold>
      </button>
    </>
  );
};

export default TextBold;
