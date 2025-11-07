import React from 'react';

const Resaltar = ({ children, className }) => {
    return (
        <span className={` text-Textos font-semibold 
            bg-gray-100 px-1 py-0.5 rounded-md transition-all duration-300 ease-in-out 
            hover:bg-Botones hover:text-Fondo  ${className}`}>
            {children}
        </span>
    );
};

export default Resaltar;