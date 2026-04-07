'use client';

import { useEffect } from 'react';
import gsap from 'gsap';

export function useCustomCursor() {
  useEffect(() => {
    // Créer l'élément du curseur personnalisé
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    cursor.style.cssText = `
      position: fixed;
      width: 20px;
      height: 20px;
      border: 2px solid #0A0A0A;
      border-radius: 50%;
      pointer-events: none;
      z-index: 9999;
      mix-blend-mode: multiply;
      display: none;
    `;
    document.body.appendChild(cursor);

    // Position initiale
    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;

    // Écouter le mouvement de la souris
    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursor.style.display = 'block';

      // Animation fluide avec GSAP
      gsap.to(cursor, {
        left: mouseX - 10,
        top: mouseY - 10,
        duration: 0.3,
        overwrite: 'auto',
      });
    });

    // Masquer le curseur quand la souris quitte la fenêtre
    document.addEventListener('mouseleave', () => {
      cursor.style.display = 'none';
    });

    // Nettoyer
    return () => {
      document.removeEventListener('mousemove', () => {});
      document.removeEventListener('mouseleave', () => {});
      cursor.remove();
    };
  }, []);
}
