import React, { useEffect, useRef, useState } from 'react';

const Counter = ({ id, color, limit, text, popoutText }) => {
  const counterRef = useRef(null);
  const [showPopout, setShowPopout] = useState(false);

  useEffect(() => {
    let interval;
    const counterElement = counterRef.current;
    let i = 0;

    const startCounter = () => {
      counterElement.classList.add('visible');
      interval = setInterval(() => {
        if (i <= limit) {
          counterElement.textContent = i;
          i++;
        } else {
          clearInterval(interval);
        }
      }, 100);
    };

    const resetCounter = () => {
      clearInterval(interval);
      i = 0;
      counterElement.textContent = 0;
      counterElement.classList.remove('visible');
    };

    // Cambiar el color del texto
    counterElement.style.color = color;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          startCounter();
        } else {
          resetCounter();
        }
      });
    });

    observer.observe(counterElement);

    const handleMouseOver = () => {
      setShowPopout(true);
    };

    const handleMouseOut = () => {
      setShowPopout(false);
    };

    counterElement.addEventListener('mouseover', handleMouseOver);
    counterElement.addEventListener('mouseout', handleMouseOut);

    return () => {
      clearInterval(interval);
      observer.disconnect();
      counterElement.removeEventListener('mouseover', handleMouseOver);
      counterElement.removeEventListener('mouseout', handleMouseOut);
    };
  }, [id, color, limit]);

  return (
    <div className="counter-div" style={{ position: 'relative' }}>
      <p ref={counterRef} className="counter" data-color={color} data-limit={limit}>0</p>
      <p className="counter-info-text">{text}</p>
      {showPopout && (
        <div className="popout-box">
          {popoutText}
        </div>
      )}
    </div>
  );
};

export default Counter;