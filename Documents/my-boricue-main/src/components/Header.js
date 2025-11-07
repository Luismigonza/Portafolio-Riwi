"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)

    const menuItems = [
    { name: "Acerca de", href: "/acerca" },
    { name: "Servicios", href: "/servicios" },
    { name: "Contactanos", href: "/contactanos" },
    { name: "Preguntas", href: "/preguntas" },
    { name: "Aplicacion boricue", href: "/login" },
]

return (
    <header className="bg-uno sticky top-0 z-40 w-full text-Textos">
        <div className=" p-2 container w-full mx-auto flex justify-between items-center">
            <Link href="/" className="text-texto text-2xl font-bold flex items-center">
                <Image src={'/LogoBoricueCircular.png'} width={90} height={90} className="mr-2" />
            </Link>
            {/* Desktop Menu */}
            <nav className=" hidden  md:flex bg-fondo p-2 w-8/12  justify-end space-x-6">
                {menuItems.map((item) => (
                    <Link key={item.name} href={item.href} className=" hover:text-dos text-texto text-lg transition-all duration-300 ease-in-out relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-Botones after:transition-all after:duration-300 hover:after:w-full">
                        {item.name}
                    </Link>
                ))}
            </nav>

            {/* Mobile Menu Button */}
            <button className={`md:hidden ${!isOpen ? 'text-texto' : 'text-dos'} focus:outline-none`} onClick={() => setIsOpen(!isOpen)}>
                <svg
                    className="w-6 h-6"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    {isOpen ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
                </svg>
            </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
            {isOpen && (
                <motion.nav
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="md:hidden bg-Fondo/95 backdrop-blur-sm border-b border-Divisiones shadow-lg"
                >
                    <div className="container mx-auto px-4 py-2">
                        {menuItems.map((item) => (
                            <motion.div
                                key={item.name}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.2 }}
                            >
                                <Link
                                    href={item.href}
                                    className="block py-3 px-4 text-lg font-medium text-texto hover:text-dos hover:bg-Divisiones/10 rounded-md transition duration-300 ease-in-out"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </motion.nav>
            )}
        </AnimatePresence>
    </header>
)
}

export default Header