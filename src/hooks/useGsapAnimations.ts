'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useGsapAnimations() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Animations au scroll - VISIBLES ET SPECTACULAIRES
    const headings = containerRef.current.querySelectorAll('h1, h2, h3');
    const paragraphs = containerRef.current.querySelectorAll('p');
    const sections = containerRef.current.querySelectorAll('section');
    const articles = containerRef.current.querySelectorAll('article');

    // Animation des titres
    headings.forEach((heading) => {
      gsap.fromTo(
        heading,
        { opacity: 0, y: 60, rotationX: -10 },
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          duration: 1.2,
          scrollTrigger: {
            trigger: heading,
            start: 'top 75%',
            toggleActions: 'play none none none',
          },
        }
      );
    });

    // Animation des paragraphes
    paragraphs.forEach((para) => {
      gsap.fromTo(
        para,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: para,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    });

    // Animation des sections
    sections.forEach((section) => {
      gsap.fromTo(
        section,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: section,
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
        }
      );
    });

    // Animation des articles
    articles.forEach((article, index) => {
      gsap.fromTo(
        article,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          delay: index * 0.15,
          scrollTrigger: {
            trigger: article,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    });

    console.log('✅ GSAP animations activées !');

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return containerRef;
}
