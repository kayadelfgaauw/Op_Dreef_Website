import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function SplitTextReveal({ text, className = '', elementType: Element = 'p', delay = 0 }) {
    const containerRef = useRef(null);

    // Very simplistic word splitter. In a real heavy GSAP app we'd use SplitText plugin, 
    // but since that's a paid GSAP club plugin, we fall back to generic CSS/JS word splitting
    const words = text.split(' ').map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.25em] pb-[0.1em]">
            <span className="word-inner inline-block translate-y-full opacity-0">
                {word}
            </span>
        </span>
    ));

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.to('.word-inner', {
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.05,
                ease: "power3.out",
                delay: delay,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 85%",
                    toggleActions: "play none none reverse"
                }
            });
        }, containerRef);

        return () => ctx.revert();
    }, [text, delay]);

    return (
        <Element ref={containerRef} className={className}>
            {words}
        </Element>
    );
}
