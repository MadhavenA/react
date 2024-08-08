import React, { useState, useEffect, useRef } from 'react';

const videoUrls = [
  `${process.env.PUBLIC_URL}/WeKnowTheTechnology.mp4`,
  `${process.env.PUBLIC_URL}/LetsMakeAnAgrement.mp4`,
  `${process.env.PUBLIC_URL}/WelCome.mp4`
];

export default function VideoSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef(null);

  const handleVideoEnd = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % videoUrls.length);
  };

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + videoUrls.length) % videoUrls.length);
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % videoUrls.length);
  };

  useEffect(() => {
    const videoElement = videoRef.current;
    if (videoElement && isVideoLoaded) {
      videoElement.play();
      videoElement.addEventListener('ended', handleVideoEnd);
    }

    return () => {
      if (videoElement) {
        videoElement.removeEventListener('ended', handleVideoEnd);
      }
    };
  }, [currentIndex, isVideoLoaded]);

  const handleLoadedData = () => {
    setIsVideoLoaded(true);
  };

  useEffect(() => {
    setIsVideoLoaded(false); // Reset the flag whenever the currentIndex changes
  }, [currentIndex]);

  return (
    <div className="video-slider">
      <button className="prev-button" onClick={handlePrevClick}>&lt;</button>
      <video
        ref={videoRef}
        className="video-slide active"
        src={videoUrls[currentIndex]}
        muted
        loop={false}
        controls
        onLoadedData={handleLoadedData}
      />
      <button className="next-button" onClick={handleNextClick}>&gt;</button>
    </div>
  );
}
