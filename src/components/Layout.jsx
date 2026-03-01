import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import NoiseOverlay from './NoiseOverlay';

export default function Layout() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const getNavClass = ({ isActive }) =>
        `text-lg md:text-xl font-mono uppercase tracking-widest transition-colors ${isActive ? 'text-brutal-red decoration-brutal-black underline decoration-4 underline-offset-8' : 'text-brutal-black hover:text-brutal-red'
        }`;

    const getMobileNavClass = ({ isActive }) =>
        `block w-full text-center text-3xl font-mono font-bold uppercase tracking-widest transition-all duration-200 py-6 px-6 border-b-4 border-brutal-black ${isActive
            ? 'bg-brutal-black text-brutal-paper'
            : 'bg-brutal-offwhite text-brutal-black hover:bg-brutal-red hover:text-brutal-black'
        }`;

    return (
        <div className="min-h-screen flex flex-col relative selection:bg-brutal-red selection:text-brutal-paper">
            <NoiseOverlay />

            {/* Navigation */}
            <nav className="fixed top-0 left-0 w-full z-50 bg-brutal-offwhite border-b-4 border-brutal-black px-6 py-4 flex justify-between items-center">
                <div className="flex items-center gap-2 font-grotesk font-bold text-2xl uppercase tracking-tighter relative z-50">
                    <NavLink to="/">
                        <img src="/Logo/Logo.png" alt="Op Dreef Motoren Logo" className="h-14 w-auto hover:scale-105 transition-transform duration-200" />
                    </NavLink>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="md:hidden flex flex-col justify-center items-center w-12 h-12 border-4 border-brutal-black bg-brutal-offwhite focus:outline-none hover:bg-brutal-red group transition-colors relative z-50 overflow-hidden"
                    aria-label="Menu"
                >
                    <span className={`block w-6 h-1 bg-brutal-black absolute transition-all duration-300 ease-in-out ${isMenuOpen ? 'rotate-45' : '-translate-y-2'}`}></span>
                    <span className={`block w-6 h-1 bg-brutal-black absolute transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-0 translate-x-4' : 'opacity-100'}`}></span>
                    <span className={`block w-6 h-1 bg-brutal-black absolute transition-all duration-300 ease-in-out ${isMenuOpen ? '-rotate-45' : 'translate-y-2'}`}></span>
                </button>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-6 md:gap-8">
                    <NavLink to="/" className={getNavClass}>Home</NavLink>
                    <NavLink to="/ons-team" className={getNavClass}>Ons Team</NavLink>
                    <NavLink to="/diensten" className={getNavClass}>Diensten</NavLink>
                    <NavLink to="/contact" className={getNavClass}>Contact</NavLink>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 z-40 bg-brutal-paper flex flex-col pt-[76px] transition-transform duration-300 ease-in-out md:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="flex-grow flex flex-col border-t-4 border-brutal-black">
                    <NavLink to="/" onClick={() => setIsMenuOpen(false)} className={getMobileNavClass}>Home</NavLink>
                    <NavLink to="/ons-team" onClick={() => setIsMenuOpen(false)} className={getMobileNavClass}>Ons <span className="-ml-3 block inline-block">Team</span></NavLink>
                    <NavLink to="/diensten" onClick={() => setIsMenuOpen(false)} className={getMobileNavClass}>Diensten</NavLink>
                    <NavLink to="/contact" onClick={() => setIsMenuOpen(false)} className={getMobileNavClass}>Contact</NavLink>
                </div>
                {/* Mobile Menu Footer Element */}
                <div className="bg-brutal-black text-brutal-offwhite p-6 mt-auto">
                    <div className="font-mono text-sm uppercase tracking-widest text-center">
                        <p className="mb-2">Dijk van Bommenede 74</p>
                        <p className="text-brutal-red font-bold">Wij sleutelen, jij blijft op dreef.</p>
                    </div>
                </div>
            </div>

            {/* Main Content Area */}
            <main className="flex-grow pt-[84px] md:pt-[90px] w-full">
                <Outlet />
            </main>

            {/* Footer */}
            <footer className="bg-brutal-black text-brutal-paper border-t-8 border-brutal-red py-12 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 font-mono text-sm">
                    <div>
                        <div className="flex items-center gap-2 font-grotesk font-bold text-2xl uppercase tracking-tighter mb-6 text-brutal-offwhite">
                            <img src="/Logo/Logo.png" alt="Op Dreef Motoren Logo" className="h-12 w-auto" />
                        </div>
                        <p className="mb-2">Dijk van Bommenede 74</p>
                        <p className="mb-2">4316 AT, Zonnemaire</p>
                        <p className="text-brutal-red font-bold">KvK: 87091623</p>
                    </div>

                    <div>
                        <h4 className="font-bold text-brutal-red text-lg uppercase mb-4 tracking-widest">Openingstijden</h4>
                        <div className="grid grid-cols-2 gap-2 opacity-80">
                            <span>Ma-Di:</span><span>09:00 - 17:00</span>
                            <span className="self-center">Woensdag:</span><span><span className="block">11:00 - 17:00</span><span className="block">19:00 - 21:00</span></span>
                            <span>Do-Vr:</span><span>09:00 - 17:00</span>
                            <span>Zaterdag:</span><span>11:00 - 17:00</span>
                            <span>Zondag:</span><span className="text-brutal-red">Gesloten</span>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold text-brutal-red text-lg uppercase mb-4 tracking-widest">Connect</h4>
                        <div className="flex flex-col gap-2 opacity-80">
                            <a href="https://www.facebook.com/BrainYourBody" target="_blank" rel="noopener noreferrer" className="hover:text-brutal-red hover:underline decoration-2">Facebook</a>
                            <a href="https://www.instagram.com/opdreef_motoren/" target="_blank" rel="noopener noreferrer" className="hover:text-brutal-red hover:underline decoration-2">Instagram</a>
                            <a href="mailto:contact@opdreefmotoren.nl" className="hover:text-brutal-red hover:underline decoration-2">Email</a>
                            <a href="tel:+31613989857" className="hover:text-brutal-red hover:underline decoration-2">0613989857</a>
                        </div>
                        <p className="mt-6 border-t border-gray-800 pt-4 text-xs opacity-50">
                            Wij sleutelen, jij blijft op dreef.
                        </p>
                    </div>
                </div>
            </footer>

            {/* Sticky WhatsApp Icon */}
            <a
                href="https://wa.me/31613989857"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] border-4 border-brutal-black hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 flex items-center justify-center group"
                aria-label="Contact us on WhatsApp"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
            </a>
        </div>
    );
}
