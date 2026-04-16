import React, { useEffect, useRef } from 'react'

export const useReveal = () => {

    const containerRef = useRef(null);

    useEffect(() => {

        if (!containerRef) return;

        const elements = containerRef.current.querySelectorAll(".reveal") //collect all elements with reveal

        // {IntersectionObserver}

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("animate");
                    observer.unobserve(entry.target);
                }

            });
            
        },
            { threshold: 0.2 } //20%
        );


        elements.forEach((el) => observer.observe(el));
        return () => {
            elements.forEach((el) => observer.unobserve(el))
        }
    }, []);
    return containerRef;



//   return (
//     <div>useReveal</div>
//   )
}

