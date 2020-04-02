import * as React from 'react';

export const Button = ({ className, onClick, name }) =>
    <button {...{ className, onClick }}>
        { name }
    </button>