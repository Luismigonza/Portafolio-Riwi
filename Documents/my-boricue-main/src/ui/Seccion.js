import React from 'react';
import { motion } from "framer-motion"

const Seccion = ({ children, className }) => {
    return (
        <section
            className={`bg-fondo flex flex-col w-full p-6 py-12 md:p-8 rounded-2xl space-y-6 space-x-6
                max-w-screen-lg min-h-[50vh]
                bg-opacity-90
                ${className}`}

        >
            {children}
        </section>
    )
}
export default Seccion