
import React from 'react';

const AboutSection = () => {
  return (
    <section className="py-12 md:py-16 px-4 md:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Phone illustration */}
          <div className="flex justify-center lg:justify-start order-2 lg:order-1">
            <div className="relative">
              <div className="w-48 h-72 sm:w-56 sm:h-80 md:w-64 md:h-96 bg-gray-100 rounded-2xl md:rounded-3xl border-4 md:border-8 border-gray-800 flex items-center justify-center">
                <div className="text-khedamni-blue text-4xl md:text-6xl font-bold">K</div>
              </div>
              {/* Decorative circles - responsive */}
              <div className="absolute -top-4 md:-top-8 -left-4 md:-left-8 w-8 h-8 md:w-16 md:h-16 border-2 md:border-4 border-khedamni-orange rounded-full opacity-30"></div>
              <div className="absolute -bottom-4 md:-bottom-8 -right-4 md:-right-8 w-12 h-12 md:w-24 md:h-24 border-2 md:border-4 border-khedamni-orange rounded-full opacity-20"></div>
              <div className="absolute top-1/2 -right-6 md:-right-12 w-6 h-6 md:w-12 md:h-12 border-2 md:border-4 border-khedamni-orange rounded-full opacity-40"></div>
            </div>
          </div>

          {/* Content */}
          <div className="text-right arabic-text order-1 lg:order-2">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-6">
              معلومات عنا
              <div className="w-12 md:w-16 h-1 bg-khedamni-orange mt-2 mr-auto"></div>
            </h2>
            
            <div className="space-y-3 md:space-y-4 text-gray-600 leading-relaxed text-sm md:text-base">
              <p>
                خدمني في منصة متقدمة تربط المستخدمين المحترفين الذين لديهم الخبرات بسهولة وعلى
              </p>
              <p>
                تمكن الخدمة العملاء من تقييم الخدمة التي تلقوها من الحرفي، البناء، المستشارين والمقاولين، فلديك
              </p>
              <p>
                كما يمكن للعمال المتخرجين من البحث عن عمل محدود المنطقة المطلوبة عن العمل أكبر فرصهم في بلاد،
              </p>
              <p>
                معاهد أو مزاود من مهاراتهم في أعمال معاهدة
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
