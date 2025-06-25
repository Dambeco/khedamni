
import React from 'react';

const GoalSection = () => {
  const features = [
    {
      icon: '🎯',
      title: 'خدمني لتسهيل الخدمات على الجميع',
      description: 'خدمني منصة متقدمة تهدف لتمكين مجتمع، تحت الوصول لبيئة المهنية والمحافظات أهدافها للحرفيين و للجراء الخدمات بسهولة و شفافية'
    },
    {
      icon: '💰',
      title: 'نسم للحصول على المقاولين',
      description: 'انضموا أن نسى الحرفيين الذين يعملون فى جميع مجالات العمل نقايم دارس الصدق الأفضل للوق للاستراتيجية، نقلوا في البنية للتحقيق منها!'
    },
    {
      icon: '🌍',
      title: 'نتطور على الحرفيين اليوم أمكن أو سلر أو اجرة ما دواجر الصدقة تجديلية مجانية أفضل، أميل',
      description: 'معلومين للحصال قناة أمل التى في المعاتبة، سيتم تحديث منها التطلا غطوها!'
    },
    {
      icon: '📱',
      title: 'تطبيق هاتف',
      description: 'احصل على أفضل تجربة استخدام للموقع من خلال تطبيق الهاتف الجوال متوفر المحافظ الأكثر'
    }
  ];

  return (
    <section className="py-12 md:py-16 px-4 md:px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center arabic-text">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 md:mb-12">
          ماهو الهدف من خدمي
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-8 md:mb-12">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-4">
              <div className="text-3xl md:text-4xl mb-3 md:mb-4">{feature.icon}</div>
              <h3 className="font-bold text-gray-800 mb-3 md:mb-4 min-h-[60px] md:min-h-[80px] text-sm md:text-base leading-tight">{feature.title}</h3>
              <p className="text-gray-600 text-xs md:text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Globe illustration with icons */}
        <div className="relative flex justify-center">
          <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 bg-khedamni-blue rounded-full flex items-center justify-center relative">
            {/* Globe continents */}
            <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 relative">
              <div className="absolute top-4 md:top-8 left-4 md:left-8 w-10 h-8 md:w-16 md:h-12 bg-green-400 rounded-lg opacity-80"></div>
              <div className="absolute top-6 md:top-12 right-6 md:right-12 w-8 h-10 md:w-12 md:h-16 bg-green-500 rounded-lg opacity-70"></div>
              <div className="absolute bottom-4 md:bottom-8 left-6 md:left-12 w-12 h-6 md:w-20 md:h-10 bg-green-400 rounded-lg opacity-60"></div>
            </div>
            
            {/* Floating icons around globe */}
            <div className="absolute -top-2 md:-top-4 -right-2 md:-right-4 w-8 h-8 md:w-12 md:h-12 bg-khedamni-orange rounded-full flex items-center justify-center text-white text-sm md:text-base">
              🔧
            </div>
            <div className="absolute -bottom-2 md:-bottom-4 -left-2 md:-left-4 w-8 h-8 md:w-12 md:h-12 bg-yellow-400 rounded-full flex items-center justify-center text-sm md:text-base">
              ⚡
            </div>
            <div className="absolute top-1/4 -left-4 md:-left-8 w-8 h-8 md:w-12 md:h-12 bg-orange-400 rounded-full flex items-center justify-center text-sm md:text-base">
              🏠
            </div>
            <div className="absolute bottom-1/4 -right-4 md:-right-8 w-8 h-8 md:w-12 md:h-12 bg-yellow-500 rounded-full flex items-center justify-center text-sm md:text-base">
              💼
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoalSection;
