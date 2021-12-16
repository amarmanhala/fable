import React from 'react';

const Sidebar = () => {
    return (
        <div className="flex flex-col h-full sm:w-96 w-full bg-sidebarDark border-r border-dividerDark">
            <div className="py-6 px-5 border-b border-dividerDark">
          <span className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
            Notes Stories
          </span>
        </div>

        <div className="pt-5 pb-2 px-5">
          <span className="text-white opacity-40 text-lg font-medium">
              
            Notes
          </span>
        </div>
        <ul className="px-3 w-full text-white opacity-90">
            <li className="py-2 px-2 hover:bg-teritary cursor-pointer rounded-lg">Lorem</li>
            <li className="py-2 px-2 hover:bg-teritary cursor-pointer rounded-lg">Lorem</li>
            <li className="py-2 px-2 hover:bg-teritary cursor-pointer rounded-lg">Lorem</li>
        </ul>
        </div>
    );
}

export default Sidebar;
