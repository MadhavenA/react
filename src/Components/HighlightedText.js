import React, { useState, useEffect } from 'react';

const words = ['knowledgeable', 'experienced', 'experts'];

export default function TextRotator() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000);


    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="text-rotator">
      <p className="text-heighlight">
        We are
      </p>
      <span className="highlight">{words[currentWordIndex]}</span>
      <p className="text-heighlight-second-sentance">in technology and business !</p>
      <p className="text-heighlight-second-third">At Business Minder,
      we make sure that businesses - offline or online - are able to fully utilize technologies to benefit their businesses in the areas of user experience, operations, sales & marketing, management, and reporting.Here is our approach</p>
    </div>
  );
}
