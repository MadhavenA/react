import React, { useState, useEffect, useRef } from 'react';

const videoUrl = 'https://www.w3schools.com/html/mov_bbb.mp4';

export default function VideoSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRef = useRef(null);

  const handleVideoEnd = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % 1);
    videoRef.current.play();
  };

  useEffect(() => {
    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.play();
      videoElement.addEventListener('ended', handleVideoEnd);
    }

    return () => {
      if (videoElement) {
        videoElement.removeEventListener('ended', handleVideoEnd);
      }
    };
  }, [currentIndex]);

  return (
    <div className="video-slider">
      <video
        ref={videoRef}
        className="video-slide active"
        src={videoUrl}
        muted
        loop={false}
        controls
      />
    </div>
  );
}
