import React from 'react';
import { motion } from "framer-motion"

const Titulo = ({ texto, className, color  }) => {
    return (
        <h2
            className={`text-2xl font-bold 
                md:text-4xl xl:text-5xl leading-tight 
                text-texto text-center
                transition-all duration-300 ease-in-out 
                ${className}`}
        >
            {texto}
        </h2>
    )
}

export default Titulo;