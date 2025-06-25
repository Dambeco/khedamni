
import React from 'react';
import { useNavigate } from 'react-router-dom';
import ToolboxIllustration from './ToolboxIllustration';

const HeroSection = () => {
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate('/login');
  };

  return (
    <main className="relative flex-1 flex items-center justify-center px-4 md:px-6 py-8 md:py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
        
        {/* Content Section */}
        <div className="text-center lg:text-right arabic-text animate-fade-in order-2 lg:order-1">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-khedamni-white mb-4 md:mb-6 leading-tight">
            خدمني: الموقع الذي يربط بين العملاء و المستخدمين المهرة
          </h1>
          
          <div className="space-y-2 md:space-y-4 mb-6 md:mb-8">
            <h2 className="text-lg sm:text-xl md:text-2xl text-khedamni-white opacity-90">
              هل لديك أعمال ؟
            </h2>
            <h2 className="text-lg sm:text-xl md:text-2xl text-khedamni-white opacity-90">
              أنت حرفي و تريد تقديم خدماتك ؟
            </h2>
          </div>
          
          <p className="text-base sm:text-lg md:text-xl text-khedamni-white opacity-80 mb-6 md:mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            خدمني أتت بالحل ! خير منصة تربط بين العملاء و الحرفيين، لإنجاز الخدمات بسهولة و شفافية !
          </p>
          
          <div className="space-y-3">
            <button 
              onClick={handleRegisterClick}
              className="bg-khedamni-orange hover:bg-orange-500 text-khedamni-white font-bold py-3 md:py-4 px-6 md:px-8 rounded-lg text-base md:text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg w-full sm:w-auto"
            >
              سجل الآن
            </button>
            <p className="text-khedamni-white opacity-70 text-sm md:text-base">
              و اكتشف خدماتنا !
            </p>
          </div>
        </div>

        {/* Illustration Section */}
        <div className="flex justify-center lg:justify-start order-1 lg:order-2">
          <div className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
            <ToolboxIllustration />
          </div>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
