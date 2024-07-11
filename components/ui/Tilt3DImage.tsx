import React, { useState, useRef, useEffect } from 'react';
import Image, { StaticImageData } from 'next/image';

interface Tilt3DImageProps {
  image: StaticImageData;
  alt: string;
}

interface TiltStyle {
  transform: string;
  transition: string;
}

const Tilt3DImage: React.FC<Tilt3DImageProps> = ({ image, alt }) => {
  const [tiltStyle, setTiltStyle] = useState<TiltStyle>({
    transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)',
    transition: 'all 0.5s ease'
  });
  const divRef = useRef<HTMLDivElement | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;

    const { left, top, width, height } = divRef.current.getBoundingClientRect();
    const x = (e.clientX - left) / width;
    const y = (e.clientY - top) / height;

    const tiltX = (y - 0.5) * 100;
    const tiltY = (x - 0.5) * -100;
    const depth = 50;

    setTiltStyle({
      transform: `
        perspective(1000px)
        rotateX(${tiltX}deg)
        rotateY(${tiltY}deg)
        translateZ(${depth}px)
      `,
      transition: 'all 0.1s ease'
    });
  };

  const handleMouseLeave = () => {
    setTiltStyle({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)',
      transition: 'all 0.5s ease'
    });
  };

  useEffect(() => {
    const div = divRef.current;
    if (div) {
      div.addEventListener('mousemove', handleMouseMove as unknown as EventListener);
      div.addEventListener('mouseleave', handleMouseLeave);
      return () => {
        div.removeEventListener('mousemove', handleMouseMove as unknown as EventListener);
        div.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, []);

  return (
    <div 
      ref={divRef}
      className="relative w-[400px] h-[400px] overflow-hidden rounded-lg shadow-xl"
      style={{
        transformStyle: 'preserve-3d',
        ...tiltStyle
      }}
    >
      <div style={{
        transform: 'translateZ(1000px)',
        transition: 'all 0.1s ease',
        width: '100%',
        height: '100%'
      }}>
        <Image
          src={image}
          alt={alt}
          layout="fill"
          objectFit="cover"
          className=''
        />
      </div>
    </div>
  );
};

export default Tilt3DImage;