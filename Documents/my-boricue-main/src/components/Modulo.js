"use client" 
import React, { useState } from 'react';
import { motion } from "framer-motion";
import Titulo from '../ui/Titulo';
import Parrafo from '../ui/Parrafo';
import Item from '../ui/Item';
import Resaltar from '../ui/Resaltar';
import { FaThumbtack, FaRegLightbulb, FaFire } from 'react-icons/fa'; // Importando los íconos correspondientes
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";

const Modulo = ({ titulo, detalles }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border border-gray-300 rounded-xl p-4 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
            <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold md:text-2xl">{titulo}</h3>
                <span className="text-xl">{isOpen ? <IoIosArrowDown size={25}/> : <IoIosArrowForward size={25}/>}</span>
            </div>

            {isOpen && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
                    <ul className="flex flex-col space-y-4 text-left p-4  ">
                        {detalles.map((detalle, index) => (
                            <li key={index} className="text-base lg:text-lg flex">{detalle}</li>
                        ))}
                    </ul>
                </motion.div>
            )}
        </div>
    );
};

export default Modulo;