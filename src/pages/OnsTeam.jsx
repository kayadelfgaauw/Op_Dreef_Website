import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import SplitTextReveal from '../components/SplitTextReveal';
import MagneticButton from '../components/MagneticButton';

gsap.registerPlugin(ScrollTrigger);

export default function OnsTeam() {
    const containerRef = useRef(null);
    const profilesRef = useRef([]);

    // We'll manage an array of refs using a callback
    const addToProfilesRef = (el) => {
        if (el && !profilesRef.current.includes(el)) {
            profilesRef.current.push(el);
        }
    };

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Animate each profile block on scroll
            profilesRef.current.forEach((profile, i) => {
                // Subtle fade-in + slide-up for name block
                gsap.fromTo(profile.querySelector('.profile-name-block'),
                    { opacity: 0, y: 20 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.8,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: profile,
                            start: "top 75%"
                        }
                    }
                );

                // Subtle staggered fade-in + slide-up for text paragraphs
                gsap.fromTo(profile.querySelectorAll('.profile-text-paragraph'),
                    { opacity: 0, y: 20 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.7,
                        stagger: 0.15,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: profile,
                            start: "top 70%"
                        }
                    }
                );

                gsap.fromTo(profile.querySelector('.profile-img'),
                    { filter: 'grayscale(60%) contrast(110%) brightness(0.9)', opacity: 0.6 },
                    {
                        filter: 'grayscale(0%) contrast(100%) brightness(1)',
                        opacity: 1,
                        duration: 2,
                        scrollTrigger: {
                            trigger: profile,
                            start: "top 65%"
                        }
                    }
                );
            });

            // Hero Group Image Animation
            gsap.fromTo('.hero-group-img',
                { filter: 'grayscale(60%) contrast(110%) brightness(0.9)', opacity: 0.5 },
                {
                    filter: 'grayscale(0%) contrast(100%) brightness(1)',
                    opacity: 1,
                    duration: 2,
                    scrollTrigger: {
                        trigger: '.hero-group-section',
                        start: "top 65%"
                    }
                }
            );

            // Hero Intro Animation
            gsap.fromTo('.hero-text-block',
                { opacity: 0, y: 50 },
                { opacity: 1, y: 0, duration: 1, ease: 'power3.out', stagger: 0.2 }
            );

        }, containerRef);
        return () => ctx.revert();
    }, []);

    // Background patterns per section — alternating dots (Sjoerd) and diagonal lines (Niek)
    const dotPattern = 'bg-[radial-gradient(#111_1.5px,transparent_1.5px)] [background-size:28px_28px]';
    const linePattern = 'bg-[repeating-linear-gradient(-45deg,#111_0,#111_1px,transparent_1px,transparent_16px)] [background-size:22px_22px]';
    const sectionPatterns = [
        dotPattern,   // Sjoerd: dots
        linePattern,  // Sun: lines
        dotPattern,   // Tycho: dots
        linePattern,  // Cees: lines
        dotPattern,   // Niek: dots
    ];

    const team = [
        {
            name: "Sjoerd",
            role: "Hoofdmonteur en Eigenaar",
            image: "/Images/Sjoerd.webp",
            alt: "Sjoerd zit ontspannen naast een glimmende oranje Harley-Davidson op de heftafel, klaar voor onderhoud of reparatie in de werkplaats.",
            fileId: "87091623",
            text: [
                "Motors, scooters en brommers, ik vond ze al geweldig voordat ik wist hoe je \u201Cbougie\u201D uitspreekt.",
                "Die passie is uit de hand gelopen en heet nu Op Dreef Motoren.",
                "Samen met mijn toegewijde team zet ik me elke dag vol trots en energie in. Niks mooier dan een tevreden klant die weer lekker de weg op kan."
            ],
            color: "border-brutal-red",
            textColor: "text-brutal-red",
            align: "right"
        },
        {
            name: "Sun",
            role: "Planning & Financiën",
            image: "/Images/Sun.webp",
            alt: "Sun staat achter de houten balie van de ontvangstruimte bij Op Dreef Service, met op de voorgrond diverse Motul onderhoudsproducten en cadeaubonnen.",
            fileId: "55819022",
            text: [
                "Als je man dag en nacht met motoren bezig is, kun je maar beter meedoen, en dat doe ik uiteraard met plezier.",
                "Geen zorgen, het sleutelen laat ik aan de mannen over.",
                "Ik focus me op waar ik goed in ben: het klantcontact, de financiën en alles daartussenin. Zo zorgen we samen voor kwaliteit, service én een warm welkom."
            ],
            color: "border-brutal-red",
            textColor: "text-brutal-red",
            align: "left"
        },
        {
            name: "Tycho",
            role: "Assistent Monteur",
            image: "/Images/Tycho.webp",
            alt: "Tycho opent een gereedschapslade in de strak georganiseerde zwarte kastenwand van de werkplaats onder moderne hexagonale LED-verlichting.",
            fileId: "64921004",
            text: [
                "Als student Engineering en schoonbroer van Sjoerd rolde ik al snel de werkplaats in.",
                "Deze baan sluit dan ook perfect aan bij mijn studie en helpt me om praktijk en theorie te combineren.",
                "Bij Op Dreef leer ik niet alleen alles over techniek en klantgerichtheid, maar ook – niet te vergeten – hoe ik mijn schoonbroer zo nu en dan te slim af kan zijn."
            ],
            color: "border-brutal-red",
            textColor: "text-brutal-red",
            align: "right"
        },
        {
            name: "Cees",
            role: "Elektrospecialist",
            image: "/Images/Cees.webp",
            alt: "Cees van Op Dreef Service werkt met een glimlach aan een klassieke Honda motorfiets in een modern uitgeruste werkplaats met professioneel gereedschap.",
            fileId: "22019844",
            text: [
                "Met tientallen jaren ervaring als technisch specialist ondersteun ik, als opa van Sjoerd, het team van Op Dreef bij de complexere klussen.",
                "Mijn kennis draag ik met plezier over aan de jongere generatie.",
                "We vormen een hecht team waar vakmanschap en gezelligheid hand in hand gaan. Zolang de koffie sterk is en het gereedschap scherp, hoor je mij niet klagen!"
            ],
            color: "border-brutal-red",
            textColor: "text-brutal-red",
            align: "left"
        },
        {
            name: "Niek",
            role: "Assistent Monteur",
            image: "/Images/Niek.webp",
            alt: "Niek poseert bij een Aprilia bromfiets en diverse scooters in de showroom van Op Dreef Service op Schouwen-Duiveland.",
            fileId: "38920194",
            text: [
                "Scooters en brommers hebben mij altijd al getrokken. Aanpakken, netjes werken en oog voor detail vind ik belangrijk in alles wat ik doe.",
                "Naast mijn opleiding tot timmerman, ben ik thuis vaak bezig met technische projectjes.",
                "Sleutelen zit er gewoon in en bij Op Dreef kan ik die passie elke dag verder uitbouwen."
            ],
            color: "border-brutal-red",
            textColor: "text-brutal-red",
            align: "right",
            imagePosition: "object-[center_25%]"
        }
    ];

    return (
        <div ref={containerRef} className="w-full bg-brutal-offwhite print:bg-white text-brutal-black font-mono">
            <Helmet>
                <title>Ons Team | Op Dreef Motoren – Maak Kennis met Ons</title>
                <meta name="description" content="Maak kennis met het team van Op Dreef Motoren in Zonnemaire. Een familiebedrijf waar passie voor techniek en persoonlijke service centraal staan." />
                <link rel="canonical" href="https://opdreefmotoren.nl/ons-team" />
                <meta property="og:title" content="Ons Team | Op Dreef Motoren" />
                <meta property="og:description" content="Maak kennis met het team van Op Dreef Motoren – passie voor techniek én mensen." />
                <meta property="og:url" content="https://opdreefmotoren.nl/ons-team" />
            </Helmet>
            {/* INVISIBLE HALO SVG FOR FILTERS */}
            <svg width="0" height="0" className="absolute -z-10">
                <defs>
                    <filter id="halftone">
                        <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 5 -2" result="highcontrast" />
                    </filter>
                </defs>
            </svg>

            {/* HERO — MOBILE: stacked (photo on top, content below) / DESKTOP: photo as background */}

            {/* MOBILE HERO PHOTO (hidden on desktop) */}
            <div className="md:hidden hero-group-section relative h-[55vh] border-b-4 border-brutal-black overflow-hidden">
                <img
                    src="/Images/Hero_over_ons.webp"
                    alt="Het volledige team van Op Dreef Service poseert glimlachend in de ruime motorwerkplaats in Zonnemaire, omringd door diverse motoren en scooters."
                    className="hero-group-img w-full h-full object-cover object-[center_80%] scale-125"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>


                {/* Title overlaid at bottom of photo on mobile */}
                <h1 className="absolute bottom-4 left-6 font-grotesk font-black text-7xl uppercase tracking-tighter leading-[0.85] text-white hero-text-block drop-shadow-[0_4px_30px_rgba(0,0,0,0.6)]">
                    ONS<br />TEAM
                </h1>


            </div>

            {/* MOBILE TEXT CARD (hidden on desktop) */}
            <div className="md:hidden bg-brutal-paper border-b-8 border-brutal-black px-6 py-10">
                <div className="hero-text-block font-mono text-base border-l-4 border-brutal-red pl-6 py-2 bg-white/95 border-2 border-r-4 border-b-4 border-brutal-black p-4 shadow-[6px_6px_0_rgba(0,0,0,0.8)]">
                    <p className="font-bold mb-4 uppercase tracking-wide border-b-2 border-brutal-red pb-2 inline-block">Ons team staat voor je klaar</p>
                    <p className="opacity-90 mb-6 font-medium text-left md:text-justify">
                        Wij zijn Op Dreef Motoren, een familiebedrijf waar de liefde voor techniek én mensen centraal staat. Elke dag werken we met plezier aan motors, scooters en brommers. We stellen ons team graag aan je voor.
                    </p>
                    <Link to="/contact" className="inline-block text-sm font-bold bg-brutal-black text-white px-6 py-3 hover:bg-brutal-red transition-colors uppercase tracking-widest border-2 border-transparent hover:border-black cursor-pointer shadow-[2px_2px_0_rgba(0,0,0,1)] active:translate-y-[2px] active:shadow-none">
                        Direct contact
                    </Link>
                </div>
            </div>

            {/* DESKTOP HERO (hidden on mobile) */}
            <section className="hero-group-section hidden md:flex relative min-h-[90vh] border-b-8 border-brutal-black overflow-hidden items-end">
                <img
                    src="/Images/Hero_over_ons.webp"
                    alt="Het volledige team van Op Dreef Service poseert glimlachend in de ruime motorwerkplaats in Zonnemaire, omringd door diverse motoren en scooters."
                    className="hero-group-img absolute inset-0 w-full h-full object-cover object-[center_60%]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30 pointer-events-none"></div>



                <div className="relative z-10 w-full px-6 pb-16 pt-40 flex flex-row justify-between items-end gap-12">
                    <h1 className="font-grotesk font-black text-9xl lg:text-[10rem] uppercase tracking-tighter leading-[0.85] text-white hero-text-block drop-shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
                        ONS<br />TEAM
                    </h1>
                    <div className="hero-text-block max-w-xl font-mono text-lg border-l-4 border-brutal-red pl-6 py-2 bg-white/95 backdrop-blur-sm border-2 border-r-4 border-b-4 border-brutal-black p-4 relative shadow-[6px_6px_0_rgba(0,0,0,0.8)]">
                        <p className="font-bold mb-4 uppercase tracking-wide border-b-2 border-brutal-red pb-2 inline-block">Ons team staat voor je klaar</p>
                        <p className="opacity-90 mb-6 font-medium text-left md:text-justify">
                            Wij zijn Op Dreef Motoren, een familiebedrijf waar de liefde voor techniek én mensen centraal staat. Elke dag werken we met plezier aan motors, scooters en brommers. We stellen ons team graag aan je voor.
                        </p>
                        <Link to="/contact" className="inline-block text-sm font-bold bg-brutal-black text-white px-6 py-3 hover:bg-brutal-red transition-colors uppercase tracking-widest border-2 border-transparent hover:border-black cursor-pointer shadow-[2px_2px_0_rgba(0,0,0,1)] active:translate-y-[2px] active:shadow-none">
                            Direct contact
                        </Link>
                    </div>
                </div>
            </section>

            {/* TEAM PROFILES — each section has its own unique background pattern */}
            <div>
                {team.map((member, index) => (
                    <section
                        key={member.name}
                        ref={addToProfilesRef}
                        className={`relative py-24 px-6 border-b-4 border-brutal-black overflow-hidden ${index % 2 === 0 ? 'bg-brutal-paper' : 'bg-brutal-offwhite'}`}
                    >
                        {/* Unique background pattern overlay per section */}
                        <div className={`absolute inset-0 ${sectionPatterns[index]} opacity-[0.06] pointer-events-none`}></div>

                        <div className={`relative max-w-7xl mx-auto flex flex-col ${member.align === 'right' ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 lg:gap-20 items-center`}>
                            {/* Portrait */}
                            <div className="w-full md:w-1/2 relative group perspective-1000">
                                <div className="absolute top-0 right-0 p-2 bg-brutal-black text-brutal-paper font-mono text-[10px] md:text-xs uppercase z-20 border-2 border-brutal-black shadow-[4px_4px_0_#E63B2E]">
                                    Naam: {member.name.toUpperCase()}
                                </div>
                                <div className="relative border-4 border-brutal-black p-4 bg-white rounded-[2rem] transform transition-transform duration-500 group-hover:-translate-y-2 group-hover:translate-x-2 z-10 w-full">
                                    <div className="absolute inset-0 border-4 border-brutal-black rounded-[2rem] -translate-x-4 translate-y-4 -z-10 bg-black mix-blend-overlay"></div>
                                    <img
                                        src={member.image}
                                        alt={member.alt || `${member.name} Portrait`}
                                        className={`profile-img w-full h-[500px] lg:h-[600px] object-cover ${member.imagePosition || 'object-center'} mix-blend-multiply rounded-[1.5rem] cursor-pointer`}
                                    />
                                    <div className="absolute bottom-6 left-6 bg-brutal-red text-white py-1 px-3 text-xs md:text-sm font-bold uppercase tracking-wider border-2 border-black rotate-[-2deg]">
                                        Functie: {member.role.substring(0, 30)}
                                    </div>
                                </div>
                            </div>

                            {/* Text / Redaction */}
                            <div className="w-full md:w-1/2 flex flex-col justify-center gap-8 font-mono text-lg md:text-xl leading-relaxed relative z-10">
                                <div className={`profile-name-block relative border-l-8 ${member.color} pl-6 py-2 bg-white/70 backdrop-blur-sm p-4 border-t-2 border-r-2 border-b-2 border-brutal-black max-w-fit shadow-[8px_8px_0_rgba(0,0,0,1)]`}>
                                    <h2 className="font-grotesk font-black text-5xl md:text-6xl uppercase tracking-tighter mb-2">{member.name}</h2>
                                    <p className={`${member.textColor} text-sm md:text-base uppercase tracking-widest font-bold`}>{member.role}</p>
                                </div>

                                <div className="space-y-6">
                                    {member.text.map((paragraph, i) => (
                                        <p key={i} className="profile-text-paragraph relative inline-block font-medium w-full text-left md:text-justify">
                                            {paragraph}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>
                ))}
            </div>

            {/* CTA FOOTER TILE */}
            <section className="py-32 px-6 bg-brutal-black text-brutal-paper border-b-8 border-brutal-red relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: "repeating-linear-gradient(45deg, #E63B2E 0, #E63B2E 2px, transparent 2px, transparent 10px)" }}></div>
                <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center">
                    <SplitTextReveal
                        elementType="h2"
                        className="font-grotesk font-black text-5xl md:text-7xl lg:text-8xl uppercase tracking-tighter mb-6 text-brutal-paper mix-blend-difference"
                        text="Wij sleutelen,"
                    />
                    <SplitTextReveal
                        elementType="h2"
                        className="font-serif-display italic text-5xl md:text-7xl lg:text-8xl mb-8 text-brutal-red"
                        text="jij blijft op dreef."
                    />
                    <p className="font-mono text-lg md:text-xl max-w-2xl mx-auto mb-12 opacity-80 border-t-2 border-brutal-paper/30 pt-8 uppercase tracking-widest text-center">
                        Betrouwbaar, flexibel en vakkundig –<br /> ook in de avonduren.
                    </p>
                    <MagneticButton className="text-xl md:text-2xl py-6 px-12 bg-brutal-red text-white border-2 border-brutal-red hover:bg-transparent hover:text-brutal-red w-full md:w-auto uppercase font-bold tracking-wider transition-colors hover:border-brutal-red text-center flex justify-center shadow-[4px_4px_0_rgba(255,255,255,0.1)] active:translate-y-[2px] active:shadow-none cursor-pointer group">
                        <Link to="/contact" className="w-full h-full flex items-center justify-center">
                            Boek je afspraak nu
                        </Link>
                    </MagneticButton>
                </div>
            </section>
        </div>
    );
}
