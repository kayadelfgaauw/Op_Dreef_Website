import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { AlertTriangle, X, Phone } from 'lucide-react';

export default function AnnouncementPopup() {
    const location = useLocation();
    const [prevPath, setPrevPath] = useState(location.pathname);
    const [isOpen, setIsOpen] = useState(true);
    const [isVisible, setIsVisible] = useState(false);

    // Adjust state during render when route changes
    if (location.pathname !== prevPath) {
        setPrevPath(location.pathname);
        setIsOpen(true);
        setIsVisible(false);
    }

    // Trigger transition shortly after opening
    useEffect(() => {
        if (isOpen && !isVisible) {
            const timer = setTimeout(() => setIsVisible(true), 50);
            return () => clearTimeout(timer);
        }
    }, [isOpen, isVisible]);

    // Prevent body scrolling when the popup is active
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    const handleClose = () => {
        setIsVisible(false);
        // Wait for the transition to complete before unmounting
        const timer = setTimeout(() => {
            setIsOpen(false);
        }, 300);
        return () => clearTimeout(timer);
    };

    if (!isOpen) return null;

    return (
        <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-3 md:p-4 overflow-y-auto"
            role="dialog"
            aria-modal="true"
            aria-labelledby="announcement-title"
        >
            {/* Backdrop overlay */}
            <div 
                className={`fixed inset-0 bg-brutal-black/70 backdrop-blur-sm transition-opacity duration-300 ${
                    isVisible ? 'opacity-100' : 'opacity-0'
                }`}
                onClick={handleClose}
            />

            {/* Modal Box */}
            <div 
                className={`relative w-full max-w-xl bg-brutal-offwhite border-4 border-brutal-black shadow-[4px_4px_0px_0px_#111111] md:shadow-[8px_8px_0px_0px_#111111] transition-all duration-300 transform flex flex-col z-10 ${
                    isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
                }`}
            >
                {/* Close Button (X) overlapping top-right */}
                <button
                    onClick={handleClose}
                    className="absolute -top-2.5 -right-2.5 md:-top-4 md:-right-4 border-2 md:border-4 border-brutal-black bg-brutal-red text-brutal-black w-8 h-8 md:w-10 md:h-10 flex items-center justify-center hover:bg-brutal-black hover:text-brutal-red transition-all duration-200 hover:rotate-90 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none z-20 cursor-pointer"
                    aria-label="Sluiten"
                >
                    <X className="w-4 h-4 md:w-5 md:h-5" strokeWidth={3} />
                </button>

                {/* Header Banner */}
                <div className="bg-brutal-red text-brutal-black border-b-4 border-brutal-black p-3.5 md:p-5 flex items-center gap-3 md:gap-4">
                    <div className="bg-brutal-black text-brutal-red p-1.5 md:p-2 border-2 border-brutal-black rounded-none animate-pulse">
                        <AlertTriangle className="w-5 h-5 md:w-7 md:h-7" strokeWidth={2.5} />
                    </div>
                    <div>
                        <h2 
                            id="announcement-title"
                            className="font-grotesk font-black text-base md:text-xl lg:text-2xl leading-tight uppercase tracking-tight"
                        >
                            LET OP: TIJDELIJK GEEN AFSPRAKEN MOGELIJK
                        </h2>
                    </div>
                </div>

                {/* Body Content */}
                <div className="p-4 md:p-7 flex flex-col gap-4 md:gap-6 font-mono text-brutal-black text-xs md:text-sm lg:text-base leading-relaxed">
                    <p className="font-bold border-l-4 border-brutal-red pl-3 md:pl-4">
                        Op Dreef Motoren wordt momenteel overgenomen door nieuwe eigenaren. In verband met de verhuizing naar een grotere locatie en de inrichting daarvan kunnen er tijdelijk geen afspraken worden ingepland. Uiteraard blijven wij telefonisch bereikbaar voor vragen.
                    </p>

                    <p className="opacity-90">
                        Zodra de nieuwe locatie is geopend, maken de nieuwe eigenaren dit bekend via de website en social media. Vanaf dat moment kunnen er weer afspraken worden ingepland.
                    </p>

                    <p className="font-bold text-center text-sm md:text-lg mt-1 md:mt-2 text-brutal-red border-2 border-dashed border-brutal-black py-1.5 md:py-2 bg-brutal-paper">
                        Bedankt voor uw begrip!
                    </p>

                    {/* Action Row */}
                    <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mt-2 md:mt-4">
                        <a 
                            href="tel:+31613989857"
                            className="flex-1 flex items-center justify-center gap-2 p-2.5 md:p-4 border-2 md:border-4 border-brutal-black bg-brutal-black text-brutal-paper hover:bg-brutal-red hover:text-brutal-black transition-all font-bold uppercase tracking-wider text-xs md:text-sm shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] md:hover:translate-x-[2px] md:hover:translate-y-[2px] md:hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
                        >
                            <Phone className="w-3.5 h-3.5 md:w-4.5 md:h-4.5" strokeWidth={2.5} />
                            Bel direct: 0613989857
                        </a>
                        <button
                            onClick={handleClose}
                            className="flex-1 p-2.5 md:p-4 border-2 md:border-4 border-brutal-black bg-brutal-paper text-brutal-black hover:bg-brutal-black hover:text-brutal-paper transition-all font-bold uppercase tracking-wider text-xs md:text-sm shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] md:hover:translate-x-[2px] md:hover:translate-y-[2px] md:hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none cursor-pointer"
                        >
                            Begrepen & Sluiten
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
