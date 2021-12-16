import React from 'react';

export default function TextInput(props) {
    return (
        <>
            <input type={props.type} value={props.value} onChange={props.onChange} aria-label={props.ariaLabel} title={props.title} required spellCheck="false" aria-invalid="false" autoCapitalize="off" autoComplete="off" autoCorrect="off" placeholder={props.placeholder} className="bg-transparent border border-borderDark px-3 py-4 rounded-md outline-none placeholder-gray-600 focus:outline-none focus:border-gray-400 text-white font-normal"></input>
        </>
    )
}
