
import React from "react";
import { useNavigate } from "react-router-dom";

const terms = [
  {
    title: "شروط الاستخدام",
    items: [
      "مرحبًا بك في تطبيق خدمتي. يرجى قراءة هذه الشروط بعناية قبل استخدام التطبيق."
    ]
  },
  {
    title: "1. قبول الشروط",
    items: [
      "بالدخول للموقع واستخدام موقع وتطبيق خدمتي فأنت توافق على الالتزام بهذه الشروط. إذا كنت لا توافق على جميع البنود والشروط يرجى عدم الوصول الى الموقع أو استخدامه."
    ]
  },
  {
    title: "2. استخدام التطبيق",
    items: [
      "الأهلية: يجب عليك أن تكون على الأقل في الثامنة عشر من عمرك لاستخدام خدمتي.",
      "الحساب: للوصول إلى ميزات التطبيق قد تحتاج إلى إنشاء حساب. أنت مسؤول عن سرية تفاصيل حسابك.",
      "الأنشطة المحظورة: توافق على عدم المشاركة في أي أنشطة محظورة، بما في ذلك الوصول غير المصرح به أو تسريب البيانات أو إعاقة وظيفة التطبيق أو تسبب الأذى للآخرين."
    ]
  },
  {
    title: "3. مقدمي الخدمة والمستخدمين",
    items: [
      "الحرفيين",
      "• خدمتي تعمل كوسيلة للربط بين العملاء والحرفيين.",
      "• لا يتحمل الحرفيون المسؤولية الكاملة عن أي عقود تتم بينهم وبين العميل سواء في عمليات أخرى تنشأ داخل أو خارج التطبيق باسمنا أو استخدام أي من علاماتنا التجارية. ونخلي مسؤوليتنا القانونية وأي العواقب الأخرى.",
      "المستخدمين",
      "• المستخدمون مسؤولون عن تقديم معلومات دقيقة حول احتياجات خدماتهم ومعاملة الحرفيين بالاحترام.",
      "• يجب أيضًا النظر في الشروط المتعلقة بالأخلاق، حيث تمثل هذه الشروط سمعة شركتنا وتشير إلى مدى التزام في الحفاظ على رضا المستخدمين. يلتزم عليك الالتزام بعدم استخدام أرقام الهواتف والمعلومات المقدمة لمضافة أو إشهار الآخرين."
    ]
  },
  {
    title: "4. الدفعات والرسوم",
    items: [
      "معالجة الدفع: يستخدم خدمتي بوابة دفع آمنة للمعاملات ويوافق الحرفيون على دفع الرسوم المتفق عليها مقابل الخدمات."
    ]
  },
  {
    title: "5. المحتوى",
    items: [
      "الملكية: يحتفظ الحرفيون بحقوق ملكية المحتوى الذي يقدمونه على التطبيق، حيث يسمح لهم باستخدامه للغرض المقصود منه.",
      "الإذن: عند استخدامك خدمتي، يوافق المستخدمون على السماح للتطبيق باستخدام و عرض و ترويج محتواهم. يتضمن الالتزام أيضًا بعدم نشر حقائق مضللة وخادعة، ويشمل أيضًا أي محتوى يضرب بنا. نحتفظ بحقنا في الرد عند انتهاك الشروط أعلاه أثناء استخدام التطبيق."
    ]
  },
  {
    title: "6. الخصوصية",
    items: [
      "جمع البيانات: يقوم خدمتي بجمع ومعالجة البيانات الشخصية وفقًا لسياسة الخصوصية."
    ]
  }
];

const TermsPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex justify-center bg-[#f6f6f9] px-2 py-6" dir="rtl">
      <div className="mx-auto w-full max-w-md bg-white rounded-3xl shadow-sm relative p-0">
        {/* زر الرجوع */}
        <button
          onClick={() => navigate(-1)}
          className="absolute right-4 top-4 rounded-full bg-white border w-10 h-10 flex items-center justify-center shadow-sm transition hover:bg-gray-50 z-10"
          aria-label="رجوع"
        >
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>
        {/* العنوان */}
        <div className="pt-12 pb-4 px-4 text-center">
          <h1 className="font-bold text-2xl text-gray-900 mb-1">شروط الاستخدام</h1>
        </div>
        <div className="flex flex-col gap-6 px-6 pb-10">
          {terms.map((section, idx) => (
            <div key={section.title}>
              <h2 className={`font-bold mb-2 ${idx > 0 ? 'text-lg' : ''}`}>{section.title}</h2>
              <ul className="list-disc pr-5 text-gray-700 leading-relaxed space-y-1">
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

export default TermsPage;
