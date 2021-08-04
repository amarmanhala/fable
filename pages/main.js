import React, { useState } from "react";
import Editor from "../components/designsystem/Editor"

export default function Main() {
  return (
    <div className="flex flex-column w-full h-screen bg-darkBackground">
      <div className="h-full w-2/12 flex flex-row border-r border-dividerDark bg-darkBackground">
        <ul>
          <li>Add note</li>
          <li>Favourite</li>
          <li>Trash</li>
          <li>Categories</li>
        </ul>
      </div>
     <div className="flex flex-row justify-center justify-center w-full h-full items-center"> <Editor></Editor></div>
      </div>
  );
}
