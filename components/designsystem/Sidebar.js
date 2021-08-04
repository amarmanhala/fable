import React from 'react';

const Sidebar = () => {
    return (
        <div className="h-full w-2/12 bg-darkHeader flex flex-row">
            <ul>
                <li>Add note</li>
                <li>Favourite</li>
                <li>Trash</li>
                <li>Categories</li>
            </ul>
        </div>
    );
}

export default Sidebar;
