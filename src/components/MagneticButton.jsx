import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

export default function MagneticButton({ children, onClick, className = '' }) {
    const buttonRef = useRef(null);

    useEffect(() => {
        const button = buttonRef.current;
        if (!button) return;

        let ctx = gsap.context(() => { }, button);

        const handleMouseEnter = () => {
            gsap.to(button, {
                scale: 1.03,
                y: -1,
                duration: 0.3,
                ease: "power2.out"
            });
        };

        const handleMouseLeave = () => {
            gsap.to(button, {
                scale: 1,
                y: 0,
                duration: 0.5,
                ease: "power2.out"
            });
        };

        button.addEventListener('mouseenter', handleMouseEnter);
        button.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            button.removeEventListener('mouseenter', handleMouseEnter);
            button.removeEventListener('mouseleave', handleMouseLeave);
            ctx.revert();
        };
    }, []);

    return (
        <button
            ref={buttonRef}
            onClick={onClick}
            className={`inline-block border-2 border-brutal-black bg-brutal-paper text-brutal-black px-6 py-3 font-grotesk font-bold uppercase tracking-wider transition-colors hover:bg-brutal-red hover:text-brutal-offwhite hover:border-brutal-red ${className}`}
        >
            {children}
        </button>
    );
}
