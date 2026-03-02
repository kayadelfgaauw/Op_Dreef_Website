import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import MagneticButton from '../components/MagneticButton';
import { Link } from 'react-router-dom';
import { Truck, Wrench, PenTool, Search, ThermometerSnowflake, Settings, Bike, Chrome, Beaker, ShieldAlert, Car, MapPin } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const services = [
    { id: "SV-01", icon: Truck, title: "Ophalen aan huis", desc: "Start je tweewieler niet? En heb je geen mogelijkheid om hem te brengen? Wij halen hem gratis bij je thuis op.", img: "/images/23-IMG_2617.webp" },
    { id: "SV-02", icon: Wrench, title: "Reparaties", desc: "Van piepjes en lekkages tot vastlopers en startproblemen, bij ons kun je terecht voor alle algemene en specifieke reparaties.", img: "/images/52-IMG_2801.webp" },
    { id: "SV-03", icon: PenTool, title: "Kleine beurt", desc: "We voeren een controle en onderhoudsbeurt uit op de belangrijkste onderdelen, zodat je soepel kan blijven rijden.", img: "/images/24-IMG_2618.webp" },
    { id: "SV-04", icon: Search, title: "Grote beurt", desc: "Bij een grote beurt controleren we je voertuig van top tot teen. Alles wordt nagelopen, afgesteld en, waar nodig, vervangen.", img: "/images/32-IMG_2638.webp" },
    { id: "SV-05", icon: ThermometerSnowflake, title: "Winterklaar maken", desc: "Wij zorgen dat je goed voorbereid het koude seizoen in kan met controle op banden, olie, accu en andere essentiële onderdelen. Zo voorkom je startproblemen en rijd je veilig de winter door.", img: "/images/11-IMG_2605.webp" },
    { id: "SV-06", icon: Settings, title: "Installeren van accessoires/opties", desc: "Van valbeugels tot een telefoonhouder of topkoffer: we installeren je accessoires netjes en veilig, zoals het hoort.", img: "/images/55-IMG_2822.webp" },
    { id: "SV-07", icon: Bike, title: "Customized projecten", desc: "Heb je een uniek idee of wil je jouw tweewieler volledig naar wens laten aanpassen? Wij denken mee en bouwen precies wat jij voor ogen hebt.", img: "/images/48-IMG_2754.webp" },
    { id: "SV-08", icon: Chrome, title: "Bandenservice", desc: "Versleten of zachte banden? We vervangen, balanceren en controleren je banden zodat je weer veilig de weg op kunt.", img: "/images/60-IMG_2845.webp" },
    { id: "SV-09", icon: Beaker, title: "Roestherstel en spuitwerk", desc: "Zit er roest op je frame of wil je een frisse, nieuwe laklaag? Wij herstellen schade en zorgen voor strak spuitwerk, zodat je voertuig er weer als nieuw uitziet.", img: "/images/61-IMG_2871.webp" },
    { id: "SV-10", icon: ShieldAlert, title: "Diagnose en storingsoplossing", desc: "Onverklaarbaar probleem of storing? We sporen de oorzaak op met professionele diagnoseapparatuur en lossen het vakkundig voor je op.", img: "/images/12-IMG_2606.webp" },
    { id: "SV-11", icon: Car, title: "Leenvervoer", desc: "Wil je mobiel blijven terwijl je tweewieler bij ons is? Geen probleem, wij bieden passend leenvervoer aan.", img: "/images/41-IMG_2700.webp" },
    { id: "SV-12", icon: MapPin, title: "Afleveren aan huis", desc: "Indien gewenst wordt je voertuig weer bij je thuis afgeleverd zodra het klaar is.", img: "/images/3-IMG_2554.webp" }
];

export default function Diensten() {
    const containerRef = useRef(null);
    const headerDrawerRef = useRef(null);
    const imageRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Drawer slide in effect
            gsap.from(headerDrawerRef.current, {
                xPercent: 100,
                opacity: 0,
                duration: 1.2,
                ease: "power4.out",
                delay: 0.2
            });

            // Image slide in effect
            if (imageRef.current) {
                gsap.from(imageRef.current, {
                    xPercent: -50,
                    opacity: 0,
                    rotation: -10,
                    duration: 1.2,
                    ease: "power4.out",
                    delay: 0.4
                });

                gsap.fromTo(imageRef.current.querySelector('img'),
                    { filter: 'grayscale(60%) contrast(110%) brightness(0.9)' },
                    { filter: 'grayscale(0%) contrast(100%) brightness(1)', duration: 3, delay: 0.5 }
                );
            }

            // Airport departure board stagger
            gsap.from('.service-row', {
                opacity: 0,
                rotateX: -90,
                transformOrigin: "50% 0%",
                duration: 0.8,
                stagger: 0.05,
                ease: "back.out(1.5)",
                scrollTrigger: {
                    trigger: '.service-list',
                    start: "top 80%"
                }
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);



    return (
        <div ref={containerRef} className="w-full bg-brutal-paper min-h-screen pb-40">

            {/* HEADER: Index Card Flip Mechanism */}
            <section className="pt-32 px-6 mb-20 overflow-hidden relative">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-center relative">

                    {/* Image Section (Left) */}
                    <div
                        ref={imageRef}
                        className="w-full lg:w-1/2 relative z-0 lg:-mr-16 mb-12 lg:mb-0"
                    >
                        <img
                            src="/Images/Diensten.webp"
                            alt="Onze Diensten"
                            className="w-full h-[400px] lg:h-[600px] object-cover object-left border-8 border-brutal-black shadow-[15px_15px_0_#E63B2E] transition-transform duration-700 -rotate-2 hover:rotate-0"
                        />
                    </div>

                    {/* Text Section (Right) */}
                    <div
                        ref={headerDrawerRef}
                        className="w-full lg:w-2/3 bg-brutal-black text-brutal-paper p-12 lg:p-20 border-l-8 border-brutal-red relative shadow-[-20px_20px_0_#111111] z-10 lg:ml-auto"
                    >
                        <div className="absolute top-4 right-4 font-mono text-xs opacity-50 uppercase tracking-widest">
                            OVERZICHT DIENSTEN
                        </div>
                        <h1 className="font-grotesk font-black text-5xl md:text-7xl uppercase mb-8 text-brutal-offwhite tracking-tighter shadow-sm">
                            Alles onder <br /><span className="text-brutal-red">één dak.</span>
                        </h1>
                        <div className="font-mono text-lg md:text-xl max-w-xl leading-relaxed mb-12">
                            Bij Op Dreef Motoren ben je aan het juiste adres voor alles wat je motor, scooter of brommer nodig heeft. Van regulier onderhoud en reparaties tot maatwerkprojecten en alles daartussenin. Wij bieden <span className="font-bold text-brutal-offwhite">complete service</span> in <span className="font-bold text-brutal-offwhite">Schouwen-Duiveland en omgeving</span>. Hieronder vind je al onze diensten overzichtelijk op een rij.
                        </div>

                        <div className="flex items-center gap-4">
                            <button
                                onClick={() => {
                                    const list = document.querySelector('.service-list');
                                    if (list) list.scrollIntoView({ behavior: 'smooth' });
                                }}
                                className="w-16 h-16 rounded-full border-2 border-brutal-red flex items-center justify-center cursor-pointer hover:bg-brutal-red group transition-colors duration-300 bg-transparent"
                            >
                                <svg className="w-8 h-8 text-brutal-red group-hover:text-brutal-black transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                </svg>
                            </button>
                            <span className="font-mono text-sm uppercase tracking-widest text-brutal-red">
                                Ontdek onze diensten
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            {/* SERVICE INDEX: Departure Board */}
            <section className="px-6 mb-40 relative">
                <div className="service-list max-w-7xl mx-auto border-t-4 border-b-4 border-brutal-black bg-brutal-offwhite">
                    <div className="grid grid-cols-12 gap-4 px-6 py-4 border-b-4 border-brutal-black font-mono text-xs uppercase tracking-widest font-bold opacity-50">
                        <div className="col-span-2 hidden md:block"></div>
                        <div className="col-span-12 md:col-span-6">Dienst</div>
                        <div className="col-span-12 md:col-span-4 hidden md:block text-right">Omschrijving</div>
                    </div>

                    {services.map((service, idx) => (
                        <div
                            key={idx}
                            className="service-row group grid grid-cols-12 gap-4 px-6 py-6 border-b-2 border-brutal-black last:border-b-0 items-center cursor-crosshair hover:bg-brutal-black hover:text-brutal-paper transition-colors duration-200"
                        >
                            <div className="col-span-2 hidden md:flex items-center text-brutal-red h-full">
                                <service.icon className="w-8 h-8 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-transform duration-300" />
                            </div>
                            <div className="col-span-12 md:col-span-6 font-grotesk font-bold text-3xl md:text-4xl uppercase tracking-tighter relative overflow-hidden group-hover:text-brutal-paper flex items-center">
                                <span className="relative z-10 flex gap-4 items-center whitespace-nowrap">
                                    <service.icon className="w-8 h-8 block md:hidden text-brutal-red" />
                                    {service.title}
                                </span>
                                {/* Arrow line on hover */}
                                <div className="ml-6 flex-1 h-1 relative hidden md:block mt-1">
                                    <div className="absolute left-0 top-1/2 -translate-y-1/2 bg-brutal-red h-1 w-0 group-hover:w-full transition-all duration-500 ease-out z-20">
                                        <div className="absolute -right-1 top-1/2 -translate-y-1/2 w-4 h-4 border-t-[4px] border-r-[4px] border-brutal-red rotate-45 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-12 md:col-span-4 text-left md:text-right font-mono text-sm opacity-70 group-hover:opacity-100 group-hover:text-brutal-offwhite">
                                {service.desc}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="px-6 relative flex justify-center pb-20 mt-20">
                <div className="w-full max-w-5xl bg-brutal-paper border-8 border-brutal-black p-12 md:p-24 text-center relative overflow-hidden shadow-[20px_20px_0_#111111] rotate-1 hover:rotate-0 transition-transform duration-500">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000), linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000)', backgroundSize: '20px 20px', backgroundPosition: '0 0, 10px 10px' }}></div>

                    <div className="relative z-10 flex flex-col items-center">
                        <div className="inline-block bg-brutal-black text-brutal-paper px-6 py-2 mb-8 -rotate-3 border-2 border-brutal-black transform hover:rotate-3 transition-transform duration-300">
                            <span className="font-mono text-brutal-red font-bold tracking-widest uppercase text-sm">
                                Klaar voor actie?
                            </span>
                        </div>

                        <h2 className="font-grotesk font-black text-5xl md:text-7xl text-brutal-black uppercase leading-none tracking-tighter mb-8 max-w-3xl drop-shadow-sm">
                            Maak <span className="text-brutal-red">Vandaag Nog</span> <br className="hidden md:block" /> Een Afspraak
                        </h2>

                        <p className="font-mono text-brutal-black/80 max-w-2xl mx-auto mb-12 text-base md:text-lg leading-relaxed font-semibold">
                            Ons ervaren team staat dagelijks voor je klaar met professionele service en vakkennis.
                        </p>

                        <Link to="/contact" className="group relative inline-flex items-center justify-center px-10 py-5 font-grotesk font-bold text-2xl uppercase tracking-wider text-brutal-paper bg-brutal-red border-4 border-brutal-black transition-all hover:-translate-y-2 hover:translate-x-[-4px] hover:shadow-[12px_12px_0_#111] active:translate-y-0 active:translate-x-0 active:shadow-none">
                            <span className="relative z-10 flex items-center gap-4">
                                Direct Contact
                                <svg className="w-8 h-8 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </span>
                        </Link>
                    </div>


                </div>
            </section>

        </div>
    );
}
