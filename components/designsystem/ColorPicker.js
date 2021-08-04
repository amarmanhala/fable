import React, {useState} from 'react'; 

const ColorPicker = ({onClick, color, small}) => {
    return (
        <div>
            <button className={`h-8 w-8 rounded-full border-white focus:outline-none border-2`} style={{background: color}} onClick={onClick}></button>
        </div>
    );
}

export default ColorPicker;
