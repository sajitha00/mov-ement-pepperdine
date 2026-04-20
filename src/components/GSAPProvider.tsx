'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * AnimationProvider (replaces old GSAPProvider)
 * Simple IntersectionObserver — no GSAP, no template JS.
 * Adds `.in-view` class when elements scroll into viewporsst.
 */
export default function GSAPProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    let observer: IntersectionObserver | null = null;

    const timer = setTimeout(() => {
      // Target everything that needs scroll animation
      const els = document.querySelectorAll(
        '.animate-box, [data-gsap], [data-animate]'
      );

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('in-view');
              observer?.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.05, rootMargin: '0px 0px -30px 0px' }
      );

      els.forEach((el) => observer!.observe(el));
    }, 60);

    return () => {
      clearTimeout(timer);
      observer?.disconnect();
    };
  }, [pathname]);

  return <>{children}</>;
}
