import React, { useState, useEffect } from 'react';

const TypingEffect = ({ text, speed, onClick }) => {
  const [displayText, setDisplayText] = useState('');
  
  useEffect(() => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      if (currentIndex === text.length -1) {
        clearInterval(intervalId);
      } else {
        setDisplayText(prevText => prevText + text[currentIndex]);
        currentIndex++;
      }
    }, speed);

    return () => clearInterval(intervalId);
  }, [text, speed]);

  return <div className='roboto-20px-300' onClick={onClick}>{displayText}</div>;
};


export default TypingEffect