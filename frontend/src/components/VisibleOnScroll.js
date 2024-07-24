import React, { useEffect, useRef, useState } from 'react';

export default function VisibleOnScroll({ children, className }) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null, // Observe relative to the viewport
        rootMargin: '0px',
        threshold: 0.5 // 50% of the element is visible
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={elementRef}
      className={`${className} ${isVisible ? 'visible' : 'hidden'}`}
    >
      {children}
    </div>
  );
}