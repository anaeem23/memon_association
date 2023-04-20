import React, { useEffect, useState } from 'react';

const SlideShow: React.FC<{ pictures: string[] }> = ({ pictures }) => {
  const [currentPictureIndex, setCurrentPictureIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPictureIndex(prevIndex =>
        prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
      );
    }, 6000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="w-full h-2/3 flex justify-content-center" >
      {pictures.map((picture, index) => (
        <img
          key={index}
          src={picture}
          alt={`Slide ${index + 1}`}
          className={`absolute object-cover w-full h-3/4 flex justify-content-center rounded-full ${
            index === currentPictureIndex
              ? 'opacity-100 animate-fadeIn'
              : 'opacity-0 animate-fadeOut'
          }`}
        />
      ))}
    </div>
  );
};

// Usage



export default SlideShow;
