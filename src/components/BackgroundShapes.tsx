
import React from 'react';

const BackgroundShapes = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Main organic shape from bottom-left - responsive */}
      <svg
        className="absolute bottom-0 left-0 w-full h-full"
        viewBox="0 0 1200 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMinYMax slice"
      >
        <path
          d="M0 800 C0 800 200 700 400 650 C600 600 800 580 1000 520 C1100 490 1150 450 1200 400 L1200 800 Z"
          fill="hsl(var(--khedamni-white))"
          opacity="0.95"
        />
        <path
          d="M0 800 C0 800 150 720 350 680 C550 640 750 620 950 570 C1050 545 1100 510 1200 460 L1200 800 Z"
          fill="hsl(var(--khedamni-white))"
          opacity="0.7"
        />
      </svg>

      {/* Additional decorative elements - responsive sizing */}
      <div className="absolute top-16 md:top-20 left-16 md:left-20 w-24 h-24 md:w-32 md:h-32 bg-khedamni-orange opacity-10 rounded-full animate-float"></div>
      <div className="absolute top-32 md:top-40 right-24 md:right-32 w-18 h-18 md:w-24 md:h-24 bg-khedamni-white opacity-10 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-32 md:bottom-40 right-16 md:right-20 w-12 h-12 md:w-16 md:h-16 bg-khedamni-orange opacity-20 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
    </div>
  );
};

export default BackgroundShapes;
