/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import warlock from '../public/images/warlock.png';

const images = [warlock, warlock, warlock,
];

export default function ImageSwapper() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (currentIndex === images.length - 1) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex(currentIndex + 1);
      }
    }, 5000);

    return () => clearInterval(intervalId);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <img alt="" src={images[currentIndex]} />
    </div>
  );
}
