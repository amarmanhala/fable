import React from 'react';

const H1 = (props) => {
    return (
        <h1 className="dark:text-textPrimaryDark text-textPrimary text-4xl font-semibold tracking-wide">{props.children}</h1>
    )
}
export {H1};