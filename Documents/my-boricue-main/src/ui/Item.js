import React from 'react';

const Item = ({ children, className, icon = false }) => {
    return (
        <div className={`flex items-center text-left space-x-3 p-4 bg-white rounded-lg shadow-md  hover:bg-gray-100 transition-all duration-300 ease-in-out text-base md:text-lg lg:text-xl ${className}`}>
            {icon && (

                { icon }

            )}
            <div className="text-gray-700">{children}</div>
        </div>
    );
};

export default Item