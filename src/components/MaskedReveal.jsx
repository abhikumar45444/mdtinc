import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function MaskedReveal({
  children,
  className = '',
  delay = 0,
  duration = 0.85,
  as: Component = 'div'
}) {
  const containerRef = useRef(null);
  const innerRef = useRef(null);

  useEffect(() => {
    const el = innerRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        {
          y: '105%',
          opacity: 0.1
        },
        {
          y: '0%',
          opacity: 1,
          duration,
          delay,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 92%',
            toggleActions: 'play none none none',
            once: true
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [delay, duration]);

  return (
    <Component ref={containerRef} className={`overflow-hidden block ${className}`}>
      <span ref={innerRef} className="block will-change-transform">
        {children}
      </span>
    </Component>
  );
}
