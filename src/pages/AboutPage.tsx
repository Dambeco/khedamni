
import React from "react";
import { useNavigate } from "react-router-dom";

const aboutSections = [
  {
    title: "مرحباً بك في خدمتي",
    items: [],
  },
  {
    title: "من نحن",
    isBold: true,
    items: [
      "خدمتي تتجاوز تطبيقات الحرفيين التقليدية، نحن عبارة عن مجتمع مزدهر من المحترفين الماهرين والأفراد الذين يؤمنون بقيم الاتصال والموثوقية. تاريخنا يبدأ من فكرة أساسية: تسهيل العثور على الحرفيين الموثوقين ومقدمي خدمات المنزل بسهولة أي فقط بنقرة زر من هاتفك الذكي. نحن هنا لأكثر من مجرد إصلاحات، نطمح لبناء روابط دائمة لتحسين جودة حياتك اليومية.",
    ],
  },
  {
    title: "مجتمعنا:",
    isBold: true,
    items: [
      "لدينا مجموعة متنوعة من المستخدمين، تتراوح بين مالكي المنازل الذين يبحثون عن خدمات موثوقة و الحرفيين الماهرين الذين يسعون لعرض خبراتهم سواء كنت مالكا للمنزل تبحث عن إصلاح سريع، أو أعمال بناء، او ترميم، أو مقاول مشغول تحتاج إلى الدعم لأجل مشاريعك، أو حرفي ماهر يسعى لتوسيع قاعدة عملائه، خدمتي المنصة الديناميكية حيث تزدهر الروابط وتلتقي بالتحديات بالحلول.",
    ],
  },
  {
    title: "قيمنا الأساسية:",
    isBold: true,
    items: [
      "الموثوقية في خدمتي، الموثوقية هي ركيزتنا. ابتداءً من حرفيين منصتنا إلى التقييمات المقدمة من قبل مستخدمينا، نحن ملتزمون بإقامة بيئة تستند إلى الثقة.",
      "المجتمع خدمتي ليس مجرد خدمة، إنه مجتمع حب. نحن نشجع على التعاون وإحساس الانتماء بين مستخدمينا والحرفيين. معاً، نحن نحول تحسين المنزل إلى تجربة مشتركة وغنية.",
      "الجودة: نحن نؤمن بتقديم خدمات عالية الجودة. سواء كانت إصلاحات بسيطة أو مشاريع معقدة، نحن نضمن أن يتم العمل عبر خدمتي وفقاً لأعلى المعايير.",
      "الابتكار: نحن ملتزمون بالبقاء في طليعة التكنولوجيا لتوفير تجربة مبتكرة وسلسة. منصتنا تتطور باستمرار لتلبية الاحتياجات المتنوعة لكل من مستخدمينا وحرفيينا.",
    ],
  },
  {
    title: "رسالتنا",
    isBold: true,
    items: [
      "في خدمتي، رسالتنا هي تبسيط ورفع مستوى الطريقة التي يتواصل بها الأفراد مع الحرفيين. ونهدف إلى إعادة ترقية تجربتك في إصلاح منزلك، مع توفير منصة للمحترفين الموهوبين لعرض مهاراتهم من خلال زرع مجتمع يقوم على الثقة والموثوقية. نطمح إلى ثورة تجربتك مع خدمات المنزل.",
      "نقدر انضمامك الى هذه الرحلة. شكرا لاختيارك خدمتي!"
    ],
  },
];

const AboutPage: React.FC = () => {
  const navigate = useNavigate();

  // زر الرجوع يرجع المستخدم مباشرة إلى صفحة الحساب
  const handleBack = () => {
    navigate("/profile");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f6f6f9] px-2 py-6" dir="rtl">
      <div className="mx-auto w-full max-w-md bg-white rounded-3xl shadow-sm relative p-0">
        {/* زر الرجوع */}
        <button
          onClick={handleBack}
          className="absolute left-4 top-4 rounded-full bg-white border w-10 h-10 flex items-center justify-center shadow-sm transition hover:bg-gray-50 z-10"
          aria-label="رجوع"
        >
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>
        {/* العنوان */}
        <div className="pt-12 pb-2 px-2 text-center">
          <h1 className="font-bold text-2xl text-gray-900 mb-1">حول الموقع</h1>
        </div>
        <div className="flex flex-col gap-6 px-6 pb-8">
          {aboutSections.map((section, idx) => (
            <div key={idx}>
              <h2 className={`mb-2 ${section.isBold ? "font-bold text-lg" : ""}`}>{section.title}</h2>
              <ul className="list-none pr-0 text-gray-700 leading-relaxed space-y-2">
                {section.items.map((v, i) => (
                  <li className="text-right" key={i}>{v}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;

