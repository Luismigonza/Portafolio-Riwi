import React from 'react';
import { motion } from "framer-motion"

const Parrafo = ({ children, clas, color }) => {
    return (
        <p
            className={`text-gray-500 leading-relaxed 
                mb-4 text-justify text-sm md:text-base
                transition-all duration-300 ease-in-out 
                hover:text-black ${clas}`}
            style={{color: color}}
        >
            {children}
        </p>
    )
}

export default Parrafo;