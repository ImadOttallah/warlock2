/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import warlock from '../public/images/warlock.png';
import stalker from '../public/images/stalker.png';
import elfAndGoblin from '../public/images/elfAndGoblin.png';

const images = [warlock, elfAndGoblin, stalker,
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
    <>
      <div
        className="text-center d-flex flex-column justify-content-center align-content-center"
        style={{
          maxWidth: '400px',
          margin: '0 auto',
          padding: '5px',
        }}
      >
        <p>Welcome to the Warlock Grimoire!
        </p>
      </div>
      <div
        className="text-center d-flex flex-column justify-content-center characterSheet align-content-center"
        style={{
          height: '80vh',
          padding: '30px',
          maxWidth: '400px',
          margin: '0 auto',
        }}
      >
        <Image alt="Images" src={images[currentIndex]} />
      </div>
    </>
  );
}
