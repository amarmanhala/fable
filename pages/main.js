import React, { useState } from "react";
import Editor from "../components/designsystem/Editor"
import Sidebar from "../components/designsystem/Sidebar";

export default function Main() {
  return (
    <div className="flex flex-column w-full h-screen bg-darkBackground">
    <Sidebar></Sidebar>
     <div className="flex flex-row justify-center justify-center w-full h-full items-center"> <Editor></Editor></div>
      </div>
  );
}
