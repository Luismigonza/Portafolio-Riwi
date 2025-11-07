import React from 'react';
import { motion } from "framer-motion"
const Boton = ({ texto, className, onClick }) => {
    return (
        <motion.button
            onClick={onClick}
            className={`bg-gradient-to-r from-Botones to-Titulos text-white font-semibold py-3 px-8 rounded-full shadow-lg 
                    transition-all duration-200 ease-in-out
                    focus:outline-none focus:ring-2 focus:ring-Botones focus:ring-opacity-50 ${className}`}
            whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(230, 57, 70, 0.5)" }}
            whileTap={{ scale: 0.95 }}
        >
            {texto}
        </motion.button>
    )
}


export default Boton;