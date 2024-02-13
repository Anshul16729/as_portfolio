import React, { useEffect, useRef } from 'react';

const BackToTop = () => {
  const backToTopRef = useRef(null);

  useEffect(() => {
    const backToTop = backToTopRef.current;

    const toggleBackToTop = () => {
      if (window.scrollY > 100) {
        backToTop.classList.add('active');
      } else {
        backToTop.classList.remove('active');
      }
    };

    toggleBackToTop(); // Initial call to set initial state

    window.addEventListener('scroll', toggleBackToTop);

    return () => {
      window.removeEventListener('scroll', toggleBackToTop);
    };
  }, []);

  return (
    <a ref={backToTopRef} href="#" className="back-to-top d-flex align-items-center justify-content-center">
      <i className="bi bi-arrow-up-short"></i>
    </a>
  );
};

export default BackToTop;