import React, { useState, useEffect } from 'react';

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const images = [
    { src: "img/slide1.svg", alt: "Slide 1" },
    { src: "img/slide2.jpg", alt: "Slide 2" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTransitioning(true);
      setTimeout(() => {
        const nextIndex = (currentIndex + 1) % images.length;
        setCurrentIndex(nextIndex);
        setTransitioning(false);
      }, 300);
    }, 4000);

    return () => clearInterval(interval);
  }, [currentIndex, images.length]);

  return (
    <div className="flex justify-center pt-[100px] md:pt-10 h-screen">
      <div className="relative">
        <div className="relative w-[275px] h-[300px]  md:w-[330px] md:h-[500px] lg:w-[400px] lg:h-[600px]">
          {images.map((image, index) => (
            <img
              key={index}
              className={`absolute ${index === currentIndex ? 'z-20 left-8 lg:left-16' : 'z-10 left-0 lg:left-8 top-8'} lg:w-[500px] lg:h-[500px] w-[275px] h-[300px]  md:w-[330px] md:h-[500px] object-cover transition-opacity duration-500 ${transitioning ? 'opacity-0' : 'opacity-100'}`}
              src={image.src}
              alt={image.alt}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
