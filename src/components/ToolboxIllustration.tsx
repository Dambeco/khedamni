
import React from 'react';

const ToolboxIllustration = () => {
  return (
    <div className="relative w-80 h-80 animate-float">
      <svg
        width="320"
        height="320"
        viewBox="0 0 320 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Main toolbox circle */}
        <circle cx="160" cy="160" r="80" fill="hsl(var(--khedamni-orange))" />
        <circle cx="160" cy="160" r="65" fill="hsl(var(--khedamni-blue))" />
        <circle cx="160" cy="160" r="30" fill="hsl(var(--khedamni-white))" />
        <circle cx="160" cy="160" r="15" fill="hsl(var(--khedamni-blue))" />
        
        {/* Tools radiating outward */}
        
        {/* Hammer - top */}
        <g transform="translate(160, 50)">
          <rect x="-3" y="0" width="6" height="40" fill="hsl(var(--khedamni-orange))" />
          <rect x="-12" y="-8" width="24" height="16" rx="4" fill="hsl(var(--khedamni-blue))" />
        </g>
        
        {/* Screwdriver - top right */}
        <g transform="translate(230, 80) rotate(45)">
          <rect x="-2" y="0" width="4" height="35" fill="hsl(var(--khedamni-orange))" />
          <rect x="-4" y="-6" width="8" height="12" fill="hsl(var(--khedamni-blue))" />
        </g>
        
        {/* Wrench - right */}
        <g transform="translate(270, 160)">
          <rect x="-20" y="-3" width="40" height="6" fill="hsl(var(--khedamni-orange))" />
          <circle cx="-15" cy="0" r="8" fill="none" stroke="hsl(var(--khedamni-blue))" strokeWidth="3" />
          <circle cx="15" cy="0" r="8" fill="none" stroke="hsl(var(--khedamni-blue))" strokeWidth="3" />
        </g>
        
        {/* Drill - bottom right */}
        <g transform="translate(230, 240) rotate(135)">
          <rect x="-2" y="0" width="4" height="30" fill="hsl(var(--khedamni-orange))" />
          <polygon points="-6,0 6,0 0,-8" fill="hsl(var(--khedamni-blue))" />
        </g>
        
        {/* Saw - bottom */}
        <g transform="translate(160, 270)">
          <rect x="-2" y="0" width="4" height="25" fill="hsl(var(--khedamni-orange))" />
          <polygon points="-8,0 8,0 6,-6 4,-3 2,-6 0,-3 -2,-6 -4,-3 -6,-6" fill="hsl(var(--khedamni-blue))" />
        </g>
        
        {/* Level - bottom left */}
        <g transform="translate(90, 240) rotate(-135)">
          <rect x="-15" y="-3" width="30" height="6" fill="hsl(var(--khedamni-orange))" />
          <circle cx="0" cy="0" r="4" fill="hsl(var(--khedamni-blue))" />
          <circle cx="0" cy="0" r="2" fill="hsl(var(--khedamni-white))" />
        </g>
        
        {/* Pliers - left */}
        <g transform="translate(50, 160)">
          <path d="M0,0 L15,-8 L20,-5 L25,-10 L30,-8 L25,0 L20,2 L15,8 L0,0" fill="hsl(var(--khedamni-orange))" />
          <path d="M0,0 L15,8 L20,5 L25,10 L30,8 L25,0 L20,-2 L15,-8 L0,0" fill="hsl(var(--khedamni-blue))" />
        </g>
        
        {/* Measuring tape - top left */}
        <g transform="translate(90, 80) rotate(-45)">
          <rect x="-8" y="-8" width="16" height="16" rx="4" fill="hsl(var(--khedamni-orange))" />
          <rect x="-6" y="-6" width="12" height="4" fill="hsl(var(--khedamni-blue))" />
          <rect x="8" y="-2" width="15" height="4" fill="hsl(var(--khedamni-white))" />
        </g>
      </svg>
    </div>
  );
};

export default ToolboxIllustration;
