import React, { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import gsap from 'gsap';
import MagneticButton from '../components/MagneticButton';
import { Phone, Mail, MessageCircle } from 'lucide-react';

export default function Contact() {
    const containerRef = useRef(null);
    const [formState, setFormState] = useState({ name: '', email: '', phone: '', message: '' });

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Entrance animation for the contact grid
            gsap.from('.contact-element', {
                y: 50,
                opacity: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: "power3.out",
                delay: 0.2
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    const handleChange = (e) => {
        setFormState({ ...formState, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Submission effect
        gsap.to('.submit-btn', { scale: 1.1, duration: 0.1, yoyo: true, repeat: 1, backgroundColor: '#111111', color: '#E8E4DD' });

        try {
            const response = await fetch("https://formspree.io/f/xzdaqazo", {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formState)
            });

            if (response.ok) {
                setTimeout(() => alert('Bericht succesvol verzonden! We nemen zo snel mogelijk contact met u op.'), 500);
                setFormState({ name: '', email: '', phone: '', message: '' });
            } else {
                setTimeout(() => alert('Oeps! Er was een probleem bij het verzenden van het formulier.'), 500);
            }
        } catch (error) {
            setTimeout(() => alert('Er is een netwerkfout opgetreden, probeer het later opnieuw.'), 500);
        }
    };

    return (
        <div ref={containerRef} className="w-full bg-brutal-paper min-h-screen pt-32 pb-40 px-6 uppercase font-mono text-brutal-black">
            <Helmet>
                <title>Contact | Op Dreef Motoren – Maak een Afspraak</title>
                <meta name="description" content="Neem contact op met Op Dreef Motoren in Zonnemaire. Bel, WhatsApp of mail ons voor een afspraak. Openingstijden ma-za, ook in de avonduren." />
                <link rel="canonical" href="https://opdreefmotoren.nl/contact" />
                <meta property="og:title" content="Contact | Op Dreef Motoren" />
                <meta property="og:description" content="Neem contact op voor onderhoud of reparatie van je motor, scooter of brommer in Zonnemaire." />
                <meta property="og:url" content="https://opdreefmotoren.nl/contact" />
            </Helmet>
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 relative">

                {/* LEFT COLUMN: Data & Hours */}
                <div className="contact-element flex flex-col pt-12">
                    <div className="mb-16 border-b-4 border-brutal-black pb-8">
                        <h1 className="font-grotesk font-black text-5xl md:text-7xl uppercase tracking-tighter mb-6 leading-none">
                            Contact
                        </h1>
                        <p className="text-lg opacity-80 max-w-sm mb-8">
                            Vul het formulier in en we nemen binnen uiterlijk 24 uur contact met je op. Liever direct contact:
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mb-4 font-bold text-sm tracking-widest">
                            <a href="tel:+31613989857" className="flex items-center gap-2 p-4 border-2 border-brutal-black hover:bg-brutal-red hover:text-brutal-paper hover:border-brutal-red transition-colors group">
                                <Phone size={18} className="group-hover:animate-bounce" /> Bellen
                            </a>
                            <a href="https://wa.me/31613989857" className="flex items-center gap-2 p-4 border-2 border-brutal-black hover:bg-[#25D366] hover:text-white hover:border-[#25D366] transition-colors group">
                                <MessageCircle size={18} className="group-hover:animate-bounce" /> WhatsApp
                            </a>
                            <a href="mailto:info@opdreefmotoren.nl" className="flex items-center gap-2 p-4 border-2 border-brutal-black hover:bg-brutal-black hover:text-brutal-paper transition-colors group">
                                <Mail size={18} className="group-hover:animate-bounce" /> Mailen
                            </a>
                        </div>
                    </div>

                    {/* Openingstijden Tabular Data */}
                    <div className="contact-element border-4 border-brutal-black bg-white">
                        <div className="bg-brutal-black text-brutal-paper px-4 py-2 font-bold flex justify-between tracking-widest text-sm">
                            <span>OP DREEF MOTOREN</span>
                            <span>OPENINGSTIJDEN</span>
                        </div>

                        <div className="divide-y-2 divide-brutal-black">
                            {[
                                { day: "Maandag", hours: "09:00 - 17:00" },
                                { day: "Dinsdag", hours: "09:00 - 17:00" },
                                { day: "Woensdag", hours: <><span className="block">11:00 - 17:00</span><span className="block">19:00 - 21:00</span></>, highlight: true },
                                { day: "Donderdag", hours: "09:00 - 17:00" },
                                { day: "Vrijdag", hours: "09:00 - 17:00" },
                                { day: "Zaterdag", hours: "11:00 - 17:00" },
                                { day: "Zondag", hours: "GESLOTEN", closed: true },
                            ].map((time, idx) => (
                                <div key={idx} className={`grid grid-cols-2 items-center p-4 font-bold group cursor-pointer transition-colors ${time.closed ? "bg-brutal-black text-brutal-paper opacity-50 block" : "hover:bg-[#25D366] text-brutal-black hover:text-white"}`}>
                                    <div className="tracking-widest">{time.day}</div>
                                    <div className={`text-right ${time.closed ? "text-brutal-red" : ""}`}>{time.hours}</div>
                                </div>
                            ))}
                        </div>

                        <div className="p-4 bg-brutal-offwhite text-xs border-t-2 border-brutal-black leading-relaxed opacity-70 border-l-4 border-l-brutal-red">
                            <span className="font-bold text-brutal-red">LET OP:</span> Het kan voorkomen dat wij tijdens openingstijden kort afwezig zijn i.v.m. de pick-up service of testritten. Bel ons gerust voordat u langs wilt komen.
                        </div>
                    </div>
                </div>

                {/* RIGHT COLUMN: The Form */}
                <div className="contact-element lg:pt-32">
                    <div className="border-l-8 border-t-8 border-brutal-black p-8 md:p-12 relative bg-brutal-offwhite shadow-[16px_16px_0_#E63B2E]">
                        <div className="absolute top-0 right-0 p-2 font-bold text-sm tracking-widest opacity-30 select-none">
                            CONTACTFORMULIER
                        </div>
                        <h2 className="font-grotesk font-bold text-3xl mb-8 tracking-tighter">
                            Waar kunnen we <br />u mee helpen?
                        </h2>

                        <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                            {/* Custom Input Styles */}
                            <div className="relative group">
                                <label className="absolute -top-3 left-4 bg-brutal-offwhite px-2 text-xs font-bold tracking-widest text-brutal-black group-focus-within:text-brutal-red transition-colors z-10">
                                    Naam
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formState.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-transparent border-4 border-brutal-black p-4 outline-none focus:border-brutal-red transition-colors font-mono placeholder:opacity-0 focus:placeholder:opacity-30 relative z-0"
                                    placeholder="Voer naam in..."
                                />
                            </div>

                            <div className="relative group">
                                <label className="absolute -top-3 left-4 bg-brutal-offwhite px-2 text-xs font-bold tracking-widest text-brutal-black group-focus-within:text-brutal-red transition-colors z-10">
                                    E-mail
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formState.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-transparent border-4 border-brutal-black p-4 outline-none focus:border-brutal-red transition-colors font-mono placeholder:opacity-0 focus:placeholder:opacity-30 relative z-0"
                                    placeholder="name@domein.nl"
                                />
                            </div>

                            <div className="relative group">
                                <label className="absolute -top-3 left-4 bg-brutal-offwhite px-2 text-xs font-bold tracking-widest text-brutal-black group-focus-within:text-brutal-red transition-colors z-10">
                                    Telefoonnummer
                                </label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formState.phone}
                                    onChange={handleChange}
                                    className="w-full bg-transparent border-4 border-brutal-black p-4 outline-none focus:border-brutal-red transition-colors font-mono placeholder:opacity-0 focus:placeholder:opacity-30 relative z-0"
                                    placeholder="06 12345678"
                                />
                            </div>

                            <div className="relative group">
                                <label className="absolute -top-3 left-4 bg-brutal-offwhite px-2 text-xs font-bold tracking-widest text-brutal-black group-focus-within:text-brutal-red transition-colors z-10">
                                    Bericht
                                </label>
                                <textarea
                                    name="message"
                                    value={formState.message}
                                    onChange={handleChange}
                                    required
                                    rows="5"
                                    className="w-full bg-transparent border-4 border-brutal-black p-4 outline-none focus:border-brutal-red transition-colors font-mono placeholder:opacity-0 focus:placeholder:opacity-30 relative z-0 resize-none"
                                    placeholder="Beschrijf het probleem of verzoek..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="submit-btn border-4 border-brutal-red border-dashed p-6 font-grotesk font-black text-2xl tracking-widest text-brutal-red hover:bg-[#25D366] hover:border-[#25D366] hover:text-white hover:border-solid transition-all mix-blend-multiply w-full relative overflow-hidden group mt-4 flex justify-between items-center"
                            >
                                <span>VERSTUUR</span>
                                {/* Visual hover scanline effect */}
                                <div className="absolute top-0 left-0 w-full h-[2px] bg-brutal-paper opacity-0 group-hover:opacity-100 mix-blend-overlay" style={{ animation: 'scanline 2s linear infinite' }}></div>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
