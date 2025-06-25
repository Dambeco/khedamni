
import React from 'react';

interface StepCardProps {
  number: number;
  title: string;
  description: string;
  color: 'green' | 'orange' | 'blue' | 'yellow';
}

const StepCard = ({ number, title, description, color }: StepCardProps) => {
  const getColorClasses = () => {
    switch (color) {
      case 'green':
        return 'bg-green-400 text-white';
      case 'orange':
        return 'bg-khedamni-orange text-white';
      case 'blue':
        return 'bg-khedamni-blue text-white';
      case 'yellow':
        return 'bg-yellow-400 text-gray-800';
      default:
        return 'bg-gray-400 text-white';
    }
  };

  return (
    <div className="bg-white rounded-lg p-4 md:p-6 shadow-lg text-center arabic-text hover:shadow-xl transition-shadow duration-300">
      <div className={`w-12 h-12 md:w-16 md:h-16 rounded-lg ${getColorClasses()} flex items-center justify-center text-lg md:text-2xl font-bold mx-auto mb-3 md:mb-4`}>
        {number}
      </div>
      <h3 className="text-base md:text-lg font-bold text-gray-800 mb-2 md:mb-3 leading-snug">
        {title}
      </h3>
      <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default StepCard;
