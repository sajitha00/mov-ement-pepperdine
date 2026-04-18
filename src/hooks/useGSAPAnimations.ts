'use client';
import { useEffect } from 'react';

/**
 * useGSAPAnimations
 * Registers GSAP + ScrollTrigger and animates all [data-gsap] elements.
 * Call once in a top-level client component (e.g. layout or a provider).
 */
export function useGSAPAnimations() {
  useEffect(() => {
    let ctx: ReturnType<typeof import('gsap').default.context> | null = null;

    async function init() {
      const { default: gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');

      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {

        /* ── Fade up (default) ── */
        gsap.utils.toArray<HTMLElement>('[data-gsap="fade-up"]').forEach((el) => {
          gsap.fromTo(el,
            { opacity: 0, y: 48 },
            {
              opacity: 1, y: 0,
              duration: 0.9,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: el,
                start: 'top 88%',
                toggleActions: 'play none none none',
              },
            }
          );
        });

        /* ── Fade in left ── */
        gsap.utils.toArray<HTMLElement>('[data-gsap="fade-left"]').forEach((el) => {
          gsap.fromTo(el,
            { opacity: 0, x: -56 },
            {
              opacity: 1, x: 0,
              duration: 0.9,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: el,
                start: 'top 88%',
                toggleActions: 'play none none none',
              },
            }
          );
        });

        /* ── Fade in right ── */
        gsap.utils.toArray<HTMLElement>('[data-gsap="fade-right"]').forEach((el) => {
          gsap.fromTo(el,
            { opacity: 0, x: 56 },
            {
              opacity: 1, x: 0,
              duration: 0.9,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: el,
                start: 'top 88%',
                toggleActions: 'play none none none',
              },
            }
          );
        });

        /* ── Scale pop ── */
        gsap.utils.toArray<HTMLElement>('[data-gsap="scale-up"]').forEach((el) => {
          gsap.fromTo(el,
            { opacity: 0, scale: 0.88 },
            {
              opacity: 1, scale: 1,
              duration: 0.8,
              ease: 'back.out(1.5)',
              scrollTrigger: {
                trigger: el,
                start: 'top 88%',
                toggleActions: 'play none none none',
              },
            }
          );
        });

        /* ── Stagger children ── */
        gsap.utils.toArray<HTMLElement>('[data-gsap="stagger"]').forEach((parent) => {
          const children = parent.children;
          gsap.fromTo(children,
            { opacity: 0, y: 36 },
            {
              opacity: 1, y: 0,
              duration: 0.75,
              ease: 'power2.out',
              stagger: 0.12,
              scrollTrigger: {
                trigger: parent,
                start: 'top 85%',
                toggleActions: 'play none none none',
              },
            }
          );
        });

        /* ── Hero title (big bold text) ── */
        gsap.utils.toArray<HTMLElement>('[data-gsap="hero"]').forEach((el) => {
          gsap.fromTo(el,
            { opacity: 0, y: 64, filter: 'blur(8px)' },
            {
              opacity: 1, y: 0, filter: 'blur(0px)',
              duration: 1.1,
              ease: 'power4.out',
              delay: 0.1,
            }
          );
        });

        /* ── Navbar entry ── */
        gsap.utils.toArray<HTMLElement>('[data-gsap="navbar"]').forEach((el) => {
          gsap.fromTo(el,
            { opacity: 0, y: -24 },
            {
              opacity: 1, y: 0,
              duration: 0.7,
              ease: 'power2.out',
              delay: 0.05,
            }
          );
        });

      });
    }

    init();

    return () => {
      ctx?.revert();
    };
  }, []);
}
