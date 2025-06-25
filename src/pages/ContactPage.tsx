
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Phone, Mail, Facebook, Instagram } from "lucide-react"; // <-- أسماء صحيحة

const CONTACTS = [
  {
    icon: Phone,
    iconBg: "bg-green-100",
    iconColor: "text-green-500",
    label: "WhatsApp",
    info: "09000000000",
    href: "tel:09000000000",
  },
  {
    icon: Mail,
    iconBg: "bg-violet-100",
    iconColor: "text-[#202c76]",
    label: "Email",
    info: "khedemni@gmail.com",
    href: "mailto:khedemni@gmail.com",
  },
  {
    icon: Facebook,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-500",
    label: "faceFacebook",
    info: "facebook.com",
    href: "https://facebook.com",
  },
  {
    icon: Instagram,
    iconBg: "bg-pink-100",
    iconColor: "text-pink-400",
    label: "Instagram",
    info: "instagram.com",
    href: "https://instagram.com",
  },
];

const ContactPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f6f6f9] px-2 py-6" dir="rtl">
      <div className="mx-auto w-full max-w-md bg-white rounded-3xl shadow-sm relative p-0">
        {/* زر الرجوع */}
        <button
          onClick={() => navigate(-1)}
          className="absolute left-4 top-4 rounded-full bg-white border w-10 h-10 flex items-center justify-center shadow-sm transition hover:bg-gray-50 z-10"
          aria-label="رجوع"
        >
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>
        {/* العنوان */}
        <div className="pt-12 pb-4 px-2 text-center">
          <h1 className="font-bold text-2xl text-gray-900 mb-1">تواصل معنا</h1>
          <p className="text-gray-500 text-base">جميع تفاصيل التواصل معنا</p>
        </div>
        {/* الكروت */}
        <div className="flex flex-col gap-6 px-3 pb-8">
          {CONTACTS.map((c, i) => (
            <a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="bg-white rounded-2xl border border-gray-100 shadow-sm flex items-center gap-3 px-4 py-5 transition hover:shadow-md hover:border-gray-200"
              style={{ textDecoration: "none" }}
            >
              <span className={`flex items-center justify-center w-14 h-14 rounded-full ${c.iconBg} ${c.iconColor} text-2xl`}>
                {React.createElement(c.icon, { size: 30, className: `${c.iconColor}` })}
              </span>
              <div className="flex-1">
                <div className="font-semibold text-base text-gray-800 text-right" style={{direction:"rtl"}}>{c.label}</div>
                <div className="text-gray-500 text-sm mt-1" style={{direction:"ltr"}}>{c.info}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
