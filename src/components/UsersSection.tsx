
import React from 'react';

const UsersSection = () => {
  const userTypes = [
    {
      title: 'خدمني لعمالنا',
      subtitle: 'انضمونا لقاعدة معلوماتنا من العمالا، الحرفيين أصحاب المهن الحرة، العمال شبه الجاهدة',
      details: 'نحن نسعى للمحافظة التنقيبات بأكبرين متوفرة حولالبلاد - نتيجة للمتأهل'
    },
    {
      title: 'المقاولين المتخصصين',
      subtitle: 'تجربة توفرون من مختلف الخدمات الحرفية اليدوي التقليدين، المقاولين، المستشارين',
      details: 'البناء، السباك، الكهربائي، والحدادين. فريقهم أنقطاع الحال الاتصال مع خبراء الجاهدة مهامهم.'
    },
    {
      title: 'مهارات',
      subtitle: 'العمالة وأصحاب المشاريع - أصحاب العاملة التالية المباشجاتهم لوك أطروا واطول أيدي متوفرة للعضوح.',
      details: 'مسؤولة للمفتوحين في أعمالهم طريق.'
    }
  ];

  return (
    <section className="py-12 md:py-16 px-4 md:px-6 bg-white">
      <div className="max-w-7xl mx-auto text-center arabic-text">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 md:mb-12">
          من يستخدم خدمي
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
          {userTypes.map((userType, index) => (
            <div key={index} className="text-center p-4">
              <h3 className="font-bold text-gray-800 mb-3 md:mb-4 text-base md:text-lg">{userType.title}</h3>
              <p className="text-gray-600 text-sm mb-3 md:mb-4 leading-relaxed">{userType.subtitle}</p>
              <p className="text-gray-500 text-xs leading-relaxed">{userType.details}</p>
            </div>
          ))}
        </div>

        {/* Tools illustration */}
        <div className="flex justify-center">
          <div className="relative">
            {/* Central circle */}
            <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 bg-khedamni-orange rounded-full flex items-center justify-center">
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white rounded-full"></div>
            </div>
            
            {/* Surrounding tools - responsive sizing */}
            <div className="absolute -top-4 md:-top-8 -left-4 md:-left-8 w-8 h-8 md:w-16 md:h-16 transform -rotate-45">
              <div className="w-1 md:w-2 h-6 md:h-12 bg-gray-600 mx-auto"></div>
              <div className="w-4 md:w-8 h-2 md:h-4 bg-gray-800 mx-auto -mt-1 md:-mt-2"></div>
            </div>
            
            <div className="absolute -top-4 md:-top-8 -right-4 md:-right-8 w-8 h-8 md:w-16 md:h-16 transform rotate-45">
              <div className="w-1 md:w-2 h-6 md:h-12 bg-khedamni-blue mx-auto"></div>
              <div className="w-3 md:w-6 h-3 md:h-6 bg-gray-600 mx-auto -mt-1 md:-mt-2 rounded-full"></div>
            </div>
            
            <div className="absolute -bottom-4 md:-bottom-8 -left-4 md:-left-8 w-8 h-8 md:w-16 md:h-16 transform rotate-12">
              <div className="w-6 md:w-12 h-1 md:h-2 bg-gray-600 mb-1 md:mb-2"></div>
              <div className="w-4 md:w-8 h-4 md:h-8 border-1 md:border-2 border-gray-600 rounded-full"></div>
            </div>
            
            <div className="absolute -bottom-4 md:-bottom-8 -right-4 md:-right-8 w-8 h-8 md:w-16 md:h-16 transform -rotate-12">
              <div className="w-1 md:w-2 h-5 md:h-10 bg-khedamni-orange"></div>
              <div className="w-3 md:w-6 h-2 md:h-4 bg-gray-700 -mt-1"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UsersSection;
