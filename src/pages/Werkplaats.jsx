import React, { useEffect, useRef, useCallback } from 'react';
import { Helmet } from 'react-helmet-async';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';
import SplitTextReveal from '../components/SplitTextReveal';
import MagneticButton from '../components/MagneticButton';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

export default function Werkplaats() {
    const heroRef = useRef(null);
    const introRef = useRef(null);
    const galleryRef = useRef(null);
    const scrollRef = useRef(null);
    const hospitalityRef = useRef(null);
    const ctaRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Hero Boot Sequence
            const tl = gsap.timeline();
            tl.to('.hero-overlay', { height: 0, duration: 1.2, ease: "power4.inOut", delay: 0.2 })
                .from('.hero-headline', { y: 100, opacity: 0, duration: 0.8, ease: "power3.out" }, "-=0.5");

            // Intro Image Animation
            gsap.fromTo('.intro-image-container',
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: introRef.current,
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
                        trigger: introRef.current,
                        start: "top 65%",
                    }
                }
            );

            // Carousel reveal
            gsap.from('.carousel-item', {
                x: 100,
                opacity: 0,
                duration: 1,
                stagger: 0.1,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: galleryRef.current,
                    start: "top 75%"
                }
            });

            // Hospitality reveal
            gsap.from('.hospitality-card', {
                y: 50,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: hospitalityRef.current,
                    start: "top 75%"
                }
            });

            // Final CTA Hard Cut Background
            ScrollTrigger.create({
                trigger: ctaRef.current,
                start: "top 50%",
                toggleClass: { targets: "body", className: "bg-brutal-red" },
            });

        }, heroRef);

        return () => ctx.revert();
    }, []);

    const scrollCarousel = useCallback((direction) => {
        if (!scrollRef.current) return;
        const container = scrollRef.current;
        const cardWidth = container.querySelector('.carousel-item')?.offsetWidth || 450;
        const scrollAmount = cardWidth + 32; // card width + gap
        container.scrollBy({
            left: direction === 'right' ? scrollAmount : -scrollAmount,
            behavior: 'smooth'
        });
    }, []);

    const galleryImages = [
        { src: "/Images/Werkplaats_1.webp", alt: "Eigenaar Sjoerd aan het werk aan een motorfiets in de werkplaats van Op Dreef Service." },
        { src: "/Images/Werkplaats_2.webp", alt: "Het aanzicht van het bedrijfspand van Op Dreef Motoren met verschillende scooters en motoren voor de geopende garagedeur." },
        { src: "/Images/Werkplaats_3.webp", alt: "Een ervaren monteur voert gedetailleerd technisch onderhoud uit aan de elektronica van een klassieke motor." },
        { src: "/Images/Werkplaats_4.webp", alt: "Overzicht van de ruime werkplaats en showroom met een diverse collectie motoren en scooters, waaronder een custom chopper." },
        { src: "/Images/Licht.webp", alt: "Moderne hexagonale LED-verlichting in de werkplaats" },
        { src: "/Images/Werkplaats_6.webp", alt: "Eigenaar Sjoerd en een collega lachend poserend in de modern verlichte werkplaats, omringd door vintage oliebordjes." },
        { src: "/Images/Werkplaats_7.webp", alt: "Een monteur selecteert het juiste gereedschap uit een professioneel zwarte wandmeubel in de opgeruimde werkplaats." },
        { src: "/Images/Werkplaats_9.webp", alt: "Close-up van het Op Dreef Service logo en de RDW-erkenning op de bakstenen gevel van het pand." }
    ];

    return (
        <div className="w-full bg-brutal-paper selection:bg-brutal-red selection:text-brutal-paper pb-20">
            <Helmet>
                <title>Werkplaats | Op Dreef Motoren – Onze Ruimte & Faciliteiten</title>
                <meta name="description" content="Bekijk de werkplaats van Op Dreef Motoren in Zonnemaire. Professionele apparatuur, speelhoek voor kinderen en een warm welkom met koffie." />
                <link rel="canonical" href="https://opdreefmotoren.nl/werkplaats" />
                <meta property="og:title" content="Werkplaats | Op Dreef Motoren" />
                <meta property="og:description" content="Onze professioneel ingerichte werkplaats in Zonnemaire – met speelhoek en koffie." />
                <meta property="og:url" content="https://opdreefmotoren.nl/werkplaats" />
            </Helmet>
            {/* HERO SECTION */}
            <section ref={heroRef} className="relative pt-32 pb-24 px-6 border-b-4 border-brutal-black bg-brutal-offwhite overflow-hidden">
                <div className="hero-overlay absolute top-0 left-0 w-full h-full bg-brutal-black z-10"></div>
                <div className="max-w-7xl mx-auto relative z-20">
                    <h1 className="hero-headline font-grotesk font-black text-6xl md:text-8xl lg:text-9xl uppercase tracking-tighter text-brutal-black leading-[0.85] mb-8">
                        Onze<br />
                        <span className="text-brutal-red">Werkplaats</span><br />
                        Jouw Passie.
                    </h1>
                    <div className="flex justify-end mt-12 md:mt-24">
                        <div className="max-w-2xl font-mono text-brutal-black bg-brutal-paper p-8 border-4 border-brutal-black shadow-[8px_8px_0_rgba(0,0,0,1)]">
                            <p className="text-xl md:text-2xl font-bold uppercase tracking-tight mb-4 text-brutal-red">
                                Professionaliteit tot in de details
                            </p>
                            <p className="leading-relaxed">
                                Met hoogwaardig gereedschap en professionele apparatuur leveren wij werk van hoog niveau. Hier krijgt elke motor, scooter en brommer de aandacht en zorg die het verdient, met precisie en vakkennis.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* GALLERIJ: DE WERKPLAATS IN BEELD */}
            <section ref={galleryRef} className="py-24 px-6 border-b-4 border-brutal-black bg-brutal-black text-brutal-paper">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-16">
                        <h2 className="font-mono text-brutal-red text-sm tracking-widest uppercase mb-4 border-b-2 border-brutal-red pb-2 inline-block w-fit">
                            [ EEN KIJKJE ACHTER DE SCHERMEN ]
                        </h2>
                        <SplitTextReveal
                            elementType="h3"
                            className="font-grotesk font-bold text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight leading-none"
                            text="Transparant & Vakkundig"
                        />
                    </div>

                    {/* Drag-to-scroll reel */}
                    <div className="relative mt-8 group/carousel">
                        <div
                            ref={scrollRef}
                            className="flex gap-8 overflow-x-auto pb-12 pt-4 px-4 no-scrollbar cursor-grab active:cursor-grabbing snap-x snap-mandatory"
                            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                        >
                            {galleryImages.map((image, index) => {
                                // Subtle random rotations for that hand-placed neobrutalist look
                                const rotations = ['-rotate-1', 'rotate-1', '-rotate-2', 'rotate-2', 'rotate-0'];
                                const rotation = rotations[index % rotations.length];

                                return (
                                    <div
                                        key={index}
                                        className={`carousel-item flex-none w-[300px] md:w-[450px] aspect-[4/3] border-4 border-brutal-black bg-white shadow-[12px_12px_0_#E63B2E] transition-all duration-500 hover:shadow-[20px_20px_0_#111111] hover:-translate-y-2 hover:rotate-0 group snap-center ${rotation}`}
                                    >
                                        <div className="absolute top-4 left-4 z-20 font-mono text-xs font-bold bg-brutal-black text-white px-3 py-1 border-2 border-brutal-black uppercase tracking-widest">
                                            [ {String(index + 1).padStart(2, '0')} ]
                                        </div>
                                        <img
                                            src={image.src}
                                            alt={image.alt}
                                            className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700"
                                            loading="lazy"
                                        />
                                        <div className="absolute bottom-4 right-4 z-20 font-mono text-[10px] font-bold text-white bg-brutal-red px-2 py-1 uppercase tracking-tighter opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            Werkplaats // Op Dreef
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Navigation arrows */}
                        <div className="flex items-center justify-end gap-3 mt-4">
                            <button
                                onClick={() => scrollCarousel('left')}
                                aria-label="Vorige foto"
                                className="group/btn relative w-14 h-14 bg-brutal-black border-3 border-brutal-black text-brutal-paper flex items-center justify-center shadow-[4px_4px_0_#E63B2E] hover:shadow-[6px_6px_0_#E63B2E] hover:-translate-x-0.5 hover:-translate-y-0.5 active:shadow-none active:translate-x-[4px] active:translate-y-[4px] transition-all duration-200 cursor-pointer"
                            >
                                <ChevronLeft size={24} className="transition-transform duration-200 group-hover/btn:-translate-x-0.5" />
                            </button>
                            <button
                                onClick={() => scrollCarousel('right')}
                                aria-label="Volgende foto"
                                className="group/btn relative w-14 h-14 bg-brutal-red border-3 border-brutal-black text-brutal-paper flex items-center justify-center shadow-[4px_4px_0_#111111] hover:shadow-[6px_6px_0_#111111] hover:translate-x-0.5 hover:-translate-y-0.5 active:shadow-none active:translate-x-[4px] active:translate-y-[4px] transition-all duration-200 cursor-pointer"
                            >
                                <ChevronRight size={24} className="transition-transform duration-200 group-hover/btn:translate-x-0.5" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* HOSPITALITY: GASTVRIJHEID & CADEAUS */}
            <section ref={hospitalityRef} className="py-24 px-6 border-b-4 border-brutal-black bg-brutal-paper">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-16 text-center">
                        <SplitTextReveal
                            elementType="h3"
                            className="font-grotesk font-bold text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight text-brutal-black leading-none mb-6"
                            text="Meer dan alleen sleutelen"
                        />
                        <p className="font-mono text-lg max-w-2xl mx-auto text-brutal-black/80">
                            Terwijl wij met passie aan je tweewieler werken, zorgen wij ervoor dat jij - en je gezelschap - je helemaal thuis voelen bij op dreef.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Speelhoek */}
                        <div className="hospitality-card flex flex-col border-4 border-brutal-black bg-brutal-offwhite p-6 md:p-10 shadow-[8px_8px_0_rgba(0,0,0,1)] hover:translate-x-1 hover:-translate-y-1 hover:shadow-[12px_12px_0_rgba(0,0,0,1)] transition-all duration-300">
                            <h4 className="font-grotesk font-bold text-3xl uppercase tracking-tight text-brutal-black mb-6 flex items-center gap-3">
                                Speelhoek <span className="bg-brutal-red text-brutal-paper text-xs py-1 px-3 rounded-full tracking-widest">KIDS WELKOM</span>
                            </h4>
                            <div className="mb-8 border-4 border-brutal-black overflow-hidden relative group">
                                <img
                                    src="/Images/Werkplaats_speelhoek.webp"
                                    alt="Speelhoek in de werkplaats"
                                    className="w-full h-[300px] object-cover filter transition-transform duration-500 scale-105 group-hover:scale-100"
                                />
                            </div>
                            <p className="font-mono text-brutal-black opacity-80 leading-relaxed max-w-sm">
                                Wachten hoeft niet saai te zijn. We hebben een speciale, veilige speelhoek ingericht zodat ook de kleinste monteurs in de dop zich uitstekend vermaken terwijl wij jouw voertuig in topconditie brengen. De koffie staat klaar!
                            </p>
                        </div>

                        {/* Cadeaubon */}
                        <div className="hospitality-card flex flex-col border-4 border-brutal-black bg-brutal-offwhite p-6 md:p-10 shadow-[8px_8px_0_rgba(0,0,0,1)] hover:translate-x-1 hover:-translate-y-1 hover:shadow-[12px_12px_0_rgba(0,0,0,1)] transition-all duration-300">
                            <h4 className="font-grotesk font-bold text-3xl uppercase tracking-tight text-brutal-black mb-6">
                                Geef Passie Cadeau
                            </h4>
                            <div className="mb-8 border-4 border-brutal-black overflow-hidden relative group">
                                <img
                                    src="/Images/Cadeaubon.webp"
                                    alt="Op Dreef Motoren Cadeaubon"
                                    className="w-full h-[300px] object-cover filter transition-transform duration-500 scale-105 group-hover:scale-100"
                                />
                            </div>
                            <p className="font-mono text-brutal-black opacity-80 leading-relaxed max-w-sm mb-8">
                                Op zoek naar het perfecte cadeau voor een motorliefhebber? Onze cadeaubonnen zijn in te wisselen voor al onze diensten, van uitgebreid onderhoud tot specialistische reparaties.
                            </p>
                            <div className="mt-auto">
                                <Link to="/contact" className="inline-flex items-center gap-2 border-b-2 border-brutal-black pb-1 text-brutal-black hover:text-brutal-red hover:border-brutal-red transition-colors font-mono uppercase tracking-widest text-sm font-bold">
                                    Vraag ernaar in de werkplaats <ArrowUpRight size={16} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* MASSIVE FOOTER CTA */}
            <section ref={ctaRef} className="py-40 px-6 bg-brutal-offwhite transition-colors duration-0 border-t-8 border-brutal-black">
                <div className="max-w-5xl mx-auto text-center flex flex-col items-center">
                    <SplitTextReveal
                        elementType="h2"
                        className="font-serif-display italic text-6xl md:text-8xl lg:text-9xl mb-12 text-brutal-black"
                        text="Kom snel langs."
                    />
                    <p className="font-mono text-xl max-w-2xl mx-auto mb-16 text-brutal-black font-bold tracking-tight">
                        De koffie staat klaar, de deuren staan open en onze gedreven monteurs kunnen niet wachten om aan een nieuwe dag te beginnen.
                    </p>
                    <MagneticButton className="text-xl md:text-2xl py-6 px-12 !bg-brutal-red !text-white !border-2 !border-brutal-red hover:!bg-transparent hover:!text-brutal-red w-full md:w-auto uppercase font-bold tracking-wider transition-colors hover:!border-brutal-red text-center flex justify-center shadow-[4px_4px_0_rgba(0,0,0,1)] active:translate-y-[2px] active:shadow-none cursor-pointer group">
                        <Link to="/contact" className="w-full h-full flex items-center justify-center">
                            Plan je bezoek
                        </Link>
                    </MagneticButton>
                </div>
            </section>
        </div>
    );
}
