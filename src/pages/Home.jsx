import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronRight, ArrowUpRight } from 'lucide-react';
import SplitTextReveal from '../components/SplitTextReveal';
import MagneticButton from '../components/MagneticButton';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
    const heroRef = useRef(null);
    const overOnsRef = useRef(null);
    const uspRef = useRef(null);
    const reviewsRef = useRef(null);
    const ctaRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Hero Boot Sequence
            const tl = gsap.timeline();
            tl.to('.hero-overlay', { height: 0, duration: 1.2, ease: "power4.inOut", delay: 0.2 })
                .from('.hero-headline', { y: 100, opacity: 0, duration: 0.8, ease: "power3.out" }, "-=0.5")
                .from('.hero-btn', { scale: 0, opacity: 0, duration: 0.5, stagger: 0.1, ease: "back.out(1.7)" }, "-=0.4");

            // Hero Image Color-in
            gsap.fromTo('.hero-bg-img',
                { filter: 'grayscale(60%) contrast(110%) brightness(0.9)' },
                { filter: 'grayscale(0%) contrast(100%) brightness(1)', duration: 3, delay: 0.5 }
            );

            // Over Ons Image Animation
            gsap.fromTo('.intro-image-container',
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: overOnsRef.current,
                        start: "top 70%",
                    }
                }
            );

            gsap.fromTo('.intro-image',
                { scale: 1.15, filter: 'grayscale(60%) contrast(110%) brightness(0.9)' },
                {
                    scale: 1,
                    filter: 'grayscale(0%) contrast(100%) brightness(1)',
                    duration: 2,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: overOnsRef.current,
                        start: "top 65%",
                    }
                }
            );

            // USP Hover Inversions (Handled via CSS group-hover mainly, but entrance via GSAP)
            gsap.from('.usp-card', {
                y: 100,
                opacity: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: uspRef.current,
                    start: "top 80%"
                }
            });

            // Horizontal Ticker Tape 
            gsap.to('.ticker-track', {
                xPercent: -50,
                ease: "none",
                duration: 25,
                repeat: -1
            });

            // Horizontal Ticker Tape Reverse
            gsap.fromTo('.ticker-track-reverse',
                { xPercent: -50 },
                {
                    xPercent: 0,
                    ease: "none",
                    duration: 35,
                    repeat: -1
                }
            );

            // Horizontal Ticker Tape Fast
            gsap.to('.ticker-track-fast', {
                xPercent: -50,
                ease: "none",
                duration: 18,
                repeat: -1
            });

            // Final CTA Hard Cut Background (Handled via ScrollTrigger toggleClass)
            ScrollTrigger.create({
                trigger: ctaRef.current,
                start: "top 50%",
                toggleClass: { targets: "body", className: "bg-brutal-red" },
            });

        }, heroRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={heroRef} className="w-full">
            {/* HERO SECTION */}
            <section className="relative min-h-[90vh] flex flex-col justify-end px-6 pb-20 pt-32 overflow-hidden border-b-4 border-brutal-black">
                {/* Absolute Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1558981420-c532902e58b4?auto=format&fit=crop&q=80&w=2500"
                        alt="Motorcycle engine detail, stark industrial lighting"
                        className="hero-bg-img w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-brutal-black/40"></div>
                    {/* Boot sequence curtain */}
                    <div className="hero-overlay absolute top-0 left-0 w-full h-full bg-brutal-black z-10"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto w-full">
                    <h1 className="hero-headline font-grotesk font-black text-6xl md:text-8xl lg:text-9xl uppercase tracking-tighter text-brutal-offwhite leading-[0.85] mb-8 mix-blend-difference">
                        Wij sleutelen,<br />
                        <span className="text-transparent stroke-text" style={{ WebkitTextStroke: '2px #F5F3EE' }}>jij blijft</span><br />
                        op dreef.
                    </h1>
                    <div className="flex flex-col md:flex-row gap-4 max-w-2xl font-mono text-brutal-paper bg-brutal-black/80 p-6 border-l-4 border-brutal-red backdrop-blur-sm mb-12">
                        <p>
                            Hét adres voor onderhoud en reparatie van je motor, scooter of brommer op Schouwen-Duiveland.
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-6">
                        <div className="hero-btn">
                            <MagneticButton>
                                <Link to="/contact" className="flex items-center gap-2">
                                    Maak een afspraak <ChevronRight size={20} />
                                </Link>
                            </MagneticButton>
                        </div>
                        <div className="hero-btn">
                            <Link to="/diensten" className="inline-flex items-center gap-2 border-b-2 border-brutal-paper pb-1 text-brutal-paper hover:text-brutal-red hover:border-brutal-red transition-colors font-mono uppercase tracking-widest text-sm pt-4">
                                Bekijk onze diensten <ArrowUpRight size={16} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* OVER ONS - SPLIT SCREEN */}
            <section ref={overOnsRef} className="py-32 px-6 border-b-4 border-brutal-black bg-brutal-paper">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-stretch">
                    <div className="flex flex-col justify-center">
                        <h2 className="font-mono text-brutal-red text-sm tracking-widest uppercase mb-4 border-b-2 border-brutal-red pb-2 inline-block w-fit">
                            [ OVER OP DREEF MOTOREN ]
                        </h2>
                        <SplitTextReveal
                            elementType="h3"
                            className="font-grotesk font-bold text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight mb-8 leading-none"
                            text="passie voor techniek & tweewielers"
                        />
                        <div className="font-mono text-brutal-black/80 space-y-6 text-sm md:text-base max-w-md">
                            <p>
                                Of je nu een doorgewinterde motorrijder bent of je scooter dagelijks gebruikt voor woon-werkverkeer, wij zorgen ervoor dat je voertuig in topconditie blijft.
                            </p>
                            <p>
                                Vanuit onze werkplaats in Zonnemaire bieden we een breed scala aan diensten aan. Van een snelle check-up tot complexe reparaties en custom projecten. Wij onderscheiden ons door onze persoonlijke aanpak, transparante communicatie en flexibele service.
                            </p>
                        </div>
                    </div>

                    <div className="intro-image-container relative min-h-[500px] w-full border-4 border-brutal-black overflow-hidden bg-brutal-black rounded-[2rem]">
                        <img
                            src="/Images/Introductie.webp"
                            alt="Het team van Op Dreef Service aan het werk in een modern verlichte werkplaats in Zonnemaire, waarbij meerdere monteurs gelijktijdig onderhoud plegen aan verschillende motoren op heftafels."
                            className="intro-image w-full h-full object-cover origin-center"
                        />
                    </div>
                </div>
            </section>

            {/* WHY CHOOSE US - USPs */}
            <section ref={uspRef} className="bg-brutal-offwhite border-b-4 border-brutal-black">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y-4 md:divide-y-0 lg:divide-x-4 divide-brutal-black border-brutal-black border-t-0">
                    {[
                        { id: "01", title: "Vakkundigheid", desc: "Jarenlange ervaring met diverse merken en typen motoren en scooters." },
                        { id: "02", title: "Flexibiliteit", desc: "Ook in de avonduren en weekenden staan we voor je klaar met korte wachttijden." },
                        { id: "03", title: "Ophaalservice", desc: "In heel Schouwen-Duiveland halen we je defecte voertuig kosteloos op." },
                        { id: "04", title: "Persoonlijk", desc: "Je spreekt direct met de monteur die aan je voertuig werkt." }
                    ].map((usp, index) => (
                        <div key={index} className="usp-card group relative p-12 min-h-[400px] flex flex-col justify-between overflow-hidden cursor-crosshair transition-colors duration-500 hover:bg-brutal-red hover:text-brutal-paper">
                            <div className="font-mono text-6xl font-bold opacity-20 group-hover:opacity-100 transition-opacity z-10">
                                {usp.id}
                            </div>
                            <div className="z-10 relative">
                                <h3 className="font-grotesk font-black text-3xl uppercase tracking-tighter mb-4 pr-12 group-hover:text-brutal-paper">
                                    {usp.title}
                                </h3>
                                <p className="font-mono text-sm leading-relaxed opacity-70 group-hover:opacity-100 text-brutal-black group-hover:text-brutal-paper group-hover:font-medium">
                                    {usp.desc}
                                </p>
                            </div>

                            {/* Giant crosshair hover effect */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-0 group-hover:w-[150%] group-hover:h-[150%] transition-all duration-700 ease-out z-0 opacity-0 group-hover:opacity-10 pointer-events-none mix-blend-overlay border-[1px] border-brutal-paper rounded-full flex items-center justify-center">
                                <div className="w-full h-[1px] bg-brutal-paper absolute"></div>
                                <div className="h-full w-[1px] bg-brutal-paper absolute"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* TICKER TAPE REVIEWS */}
            <section ref={reviewsRef} className="py-24 flex flex-col justify-center bg-brutal-black text-brutal-paper overflow-hidden relative cursor-help">
                <div className="absolute top-0 w-full h-8 bg-black z-10 border-b-2 border-brutal-red" style={{ backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 10px, #E63B2E 10px, #E63B2E 20px)", opacity: 0.2 }}></div>

                <div className="flex whitespace-nowrap pt-4 pb-2 ticker-track-fast font-mono text-lg uppercase tracking-widest pl-4 hover:[animation-play-state:paused] hover:text-brutal-red transition-colors opacity-40">
                    {[1, 2, 3, 4].map((n) => (
                        <React.Fragment key={n}>
                            <span className="inline-block px-12">"Heel goed, vriendelijk en meedenkend geholpen door Sjoerd!" - Edwin V.</span>
                            <span className="inline-block text-brutal-red">///</span>
                            <span className="inline-block px-12">"Topzaak, haal- en brengservice voor de brommer, top reparatie!" - Mark L.</span>
                            <span className="inline-block text-brutal-red">///</span>
                            <span className="inline-block px-12">"Zeer laagdrempelig in contact en flexibel." - Daan H.</span>
                            <span className="inline-block text-brutal-red">///</span>
                        </React.Fragment>
                    ))}
                </div>

                <div className="flex whitespace-nowrap py-2 ticker-track-reverse font-mono text-lg uppercase tracking-widest pl-4 hover:[animation-play-state:paused] hover:text-brutal-red transition-colors opacity-70">
                    {[1, 2, 3, 4].map((n) => (
                        <React.Fragment key={n}>
                            <span className="inline-block px-12">"Zal zeker nog meer gebruik maken van zijn dienst!" - Peter K.</span>
                            <span className="inline-block text-brutal-red">///</span>
                            <span className="inline-block px-12">"Geweldige zaak, snel en vakkundig geholpen." - Lisa B.</span>
                            <span className="inline-block text-brutal-red">///</span>
                            <span className="inline-block px-12">"Heel prettig geholpen, absolute aanrader." - Jeroen T.</span>
                            <span className="inline-block text-brutal-red">///</span>
                        </React.Fragment>
                    ))}
                </div>

                <div className="flex whitespace-nowrap pt-2 pb-4 ticker-track font-mono text-lg uppercase tracking-widest pl-4 hover:[animation-play-state:paused] hover:text-brutal-red transition-colors opacity-40">
                    {[1, 2, 3, 4].map((n) => (
                        <React.Fragment key={n}>
                            <span className="inline-block px-12">"Mijn motor loopt weer als een zonnetje!" - Thomas V.</span>
                            <span className="inline-block text-brutal-red">///</span>
                            <span className="inline-block px-12">"Eerlijk advies en goede communicatie." - Rick S.</span>
                            <span className="inline-block text-brutal-red">///</span>
                            <span className="inline-block px-12">"Vakwerk afgeleverd, super blij mee!" - Anouk M.</span>
                            <span className="inline-block text-brutal-red">///</span>
                        </React.Fragment>
                    ))}
                </div>

                <div className="absolute bottom-0 w-full h-8 bg-black z-10 border-t-2 border-brutal-red" style={{ backgroundImage: "repeating-linear-gradient(-45deg, transparent, transparent 10px, #E63B2E 10px, #E63B2E 20px)", opacity: 0.2 }}></div>
            </section>

            {/* MASSIVE FOOTER CTA */}
            <section ref={ctaRef} className="py-40 px-6 bg-brutal-offwhite transition-colors duration-0 border-b-8 border-brutal-black">
                <div className="max-w-5xl mx-auto text-center flex flex-col items-center">
                    <SplitTextReveal
                        elementType="h2"
                        className="font-serif-display italic text-6xl md:text-8xl lg:text-9xl mb-12 text-brutal-black"
                        text="Relaxed op pad."
                    />
                    <p className="font-mono text-xl max-w-2xl mx-auto mb-16 text-brutal-black font-bold tracking-tight">
                        Zorgeloos rijden begint bij Op Dreef. Plan vandaag nog je afspraak in.
                    </p>
                    <MagneticButton className="text-xl md:text-2xl py-6 px-12 !bg-brutal-red !text-white !border-2 !border-brutal-red hover:!bg-transparent hover:!text-brutal-red w-full md:w-auto uppercase font-bold tracking-wider transition-colors hover:!border-brutal-red text-center flex justify-center shadow-[4px_4px_0_rgba(0,0,0,1)] active:translate-y-[2px] active:shadow-none cursor-pointer group">
                        <Link to="/contact" className="w-full h-full flex items-center justify-center">
                            Boek je afspraak nu
                        </Link>
                    </MagneticButton>
                </div>
            </section>
        </div>
    );
}
