import React, {  useEffect, useRef } from 'react';
import Typed from 'typed.js';

const Typewriter = ({ strings }) => {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings,
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, [strings]);

  return <span ref={typedRef}></span>;
};

export default Typewriter;