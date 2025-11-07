import React from "react"
import { MapPin, Phone, Mail, Leaf, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

const Footer = () => {
    return (
        <footer className="relative bg-gradient-to-br from-uno via-uno to-fondo text-texto py-16 overflow-hidden">
            {/* Forma decorativa */}
            <div className="absolute top-0 left-0 w-full h-20 bg-white opacity-10 transform -skew-y-6"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    <div className="space-y-4">
                        <h4 className="text-2xl font-bold mb-4 flex items-center">
                            <Leaf className="mr-2" />
                            Boricue
                        </h4>
                        <p className="text-sm leading-relaxed">
                            Promovemos la sostenibilidad y la economía circular, ofreciendo una plataforma para intercambiar, donar o
                            vender residuos y materiales. Juntos, creamos un futuro más verde.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-xl font-bold mb-4">Enlaces Rápidos</h4>
                        <ul className="space-y-2">
                            {["Inicio", "Acerca de", "Servicios", "Contáctanos", "Términos y Condiciones"].map((item, index) => (
                                <li key={index}>
                                    <a
                                        href={`/${item.toLowerCase().replace(/ /g, "-")}`}
                                        className="hover:text-green-300 transition-colors duration-300 flex items-center"
                                    >
                                        <span className="mr-2">&#8250;</span> {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-xl font-bold mb-4">Contáctanos</h4>
                        <ul className="space-y-4">
                            {[
                                { icon: <MapPin />, text: "Calatrava Itagui Cl. 63 #58B-03" },
                                { icon: <Phone />, text: "+57 313 664 0809" },
                                { icon: <Mail />, text: "BoricueTeAyuda@Boricue.com" },
                            ].map((item, index) => (
                                <li key={index} className="flex items-start">
                                    <span className="mr-2 mt-1">{item.icon}</span>
                                    <p>{item.text}</p>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-xl font-bold mb-4">Síguenos</h4>
                        <div className="flex space-x-4">
                            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                                <a key={index} href="#" className="hover:text-green-300 transition-colors duration-300">
                                    <Icon size={24} />
                                </a>
                            ))}
                        </div>
                        <div className="mt-6">
                            <h5 className="font-semibold mb-2">Suscríbete a nuestro boletín</h5>
                            <form className="flex">
                                <input
                                    type="email"
                                    placeholder="Tu correo electrónico"
                                    className="py-2 px-3 w-full rounded-l-md focus:outline-none focus:ring-2 focus:ring-green-400 text-gray-800"
                                />
                                <button
                                    type="submit"
                                    className="bg-green-500 hover:bg-green-600 transition-colors duration-300 py-2 px-4 rounded-r-md"
                                >
                                    Enviar
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-white border-opacity-20 text-center">
                    <p>&copy; {new Date().getFullYear()} Boricue. Todos los derechos reservados.</p>
                </div>
            </div>

            {/* Elemento visual ambiental */}
            <div
                className="absolute bottom-0 right-0 w-40 h-40 md:w-64 md:h-64 bg-contain bg-no-repeat bg-right-bottom opacity-10"
                style={{ backgroundImage: "url('/placeholder.svg?height=256&width=256')" }}
            ></div>
        </footer>
    )
}

export default Footer

