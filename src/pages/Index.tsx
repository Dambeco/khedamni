
import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import GoalSection from '../components/GoalSection';
import UsersSection from '../components/UsersSection';
import StepCard from '../components/StepCard';
import BackgroundShapes from '../components/BackgroundShapes';

const Index = () => {
  const craftmanSteps = [
    {
      number: 1,
      title: 'قم بالتسجيل وانشاء حساب',
      description: 'قم بانشاء حساب واضف معلوماتك الأساسية لتبدء رحلتك معنا وايضا معلومات حول امحاتك المنتجة',
      color: 'green' as const
    },
    {
      number: 2,
      title: 'حدد وقت عملك',
      description: 'قم بتحديد الاوقات المختلفة التي يمكن يمكنك بهدائك واثبتك لدى للدوية',
      color: 'orange' as const
    },
    {
      number: 3,
      title: 'استقبل طلبات العمل',
      description: 'انتظر طن طلب أعمالك دوائر الاتصاحل بك منشارك للدوية ولقياسك طلبات الخدمات للحصول على اكبر كمية مرضية',
      color: 'green' as const
    },
    {
      number: 4,
      title: 'قدم الخدمة',
      description: 'انتقل الى مكان العمل و أكمل دورة مجلة الخدمة',
      color: 'blue' as const
    },
    {
      number: 5,
      title: 'احصل على التقييمات',
      description: 'سيقوم العملاء بتقييمك الخدمات المطلوبة سبسهل عتبارك الحصول على العملاء الجدد',
      color: 'yellow' as const
    }
  ];

  const clientSteps = [
    {
      number: 1,
      title: 'سجل نفسك',
      description: 'ابدأ رحلتك معنا من خلال إنشاء حساب بسيط الخطوة على موقعنا الرسمي',
      color: 'green' as const
    },
    {
      number: 2,
      title: 'ابحث عن خدمة',
      description: 'اختيار الخدمة المطلوبة التي تناسب احتياجاتك، مع الحرفيين المؤهلين أو التقييم أخرى',
      color: 'orange' as const
    },
    {
      number: 3,
      title: 'حدد حرفي',
      description: 'اختيار أفضل حرفي مناسب واحصلائه وتقييمه وحجابته واستطل مهارفة من النحل الذي فجم بنجاحه على النحل',
      color: 'green' as const
    },
    {
      number: 4,
      title: 'قم بتطبيط الخدمة',
      description: 'قم بإضافة العوامل إلى قابوسة الخدمات الإدارية بالتفصيل',
      color: 'blue' as const
    },
    {
      number: 5,
      title: 'استلم الفدعان وشارك تعليقك',
      description: 'بعد تلقي الخدمة، قم بمراجع السعر أضادة أو تعليقانك على الخدمة التى كنت أتلقيتها مع تقييم الحرفي أو أعمله',
      color: 'yellow' as const
    }
  ];

  return (
    <div className="min-h-screen bg-khedamni-blue relative overflow-hidden">
      {/* Background shapes */}
      <BackgroundShapes />
      
      {/* Main content */}
      <div className="relative z-10">
        <Header />
        <HeroSection />
        <AboutSection />
        <GoalSection />
        <UsersSection />
        
        {/* Steps Section */}
        <div className="bg-gray-50 py-12 md:py-16 px-4 md:px-6">
          <div className="max-w-6xl mx-auto arabic-text">
            {/* Header */}
            <div className="text-center mb-12 md:mb-16">
              <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3 md:mb-4">
                الخطوات لإستعمال المنصة
              </h1>
              <p className="text-gray-600 text-sm md:text-base mb-2">
                استخدام خدمني بسيط واسهل، اتبع الخطوات أدناه
              </p>
              <p className="text-gray-600 text-sm md:text-base">
                و استمتع بالخدمات و حلول مشكلاتك بسهولة
              </p>
            </div>

            {/* Craftsman Steps */}
            <div className="mb-16 md:mb-20">
              <h2 className="text-xl md:text-2xl font-bold text-gray-800 text-center mb-8 md:mb-12">
                أنت حرفي
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {craftmanSteps.map((step) => (
                  <StepCard key={step.number} {...step} />
                ))}
              </div>
            </div>

            {/* Client Steps */}
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-gray-800 text-center mb-8 md:mb-12">
                أنت تبحث حرفي
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {clientSteps.map((step) => (
                  <StepCard key={step.number} {...step} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
