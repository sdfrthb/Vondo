import React, { useState, useEffect } from 'react';
import Logo from '../ui/icons/Logo/Logo';

const ScrollComponent = () => {
  const [style, setStyle] = useState({});
  console.log(style)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      console.log(document.documentElement.scrollTop)
      let translateValue = Math.max(0, scrollTop / 3);
      setStyle({
        transform: `translateY(-${translateValue}px)`,
        // top: `calc(9.028vw - ${translateValue})`,
        position: 'absolute',
        top: `calc(9.028vw-${translateValue}px)`,
        left: '44.4%',

      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [style]);



  return (
  //   !style ?
  // <div style={{position: 'fixed', left: '44.4%', top: '9.028vw'}}>
  // <Logo width={11.111} height={2.5} />
  // </div> :
  <div className='scroll_logo' style={style} >
  <Logo width={11.111} height={2.5} />
  </div>
  )
};

export default ScrollComponent;
