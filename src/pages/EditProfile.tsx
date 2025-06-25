
import React from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Eye, User, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const professions = [
  "نجار",
  "سباك",
  "كهربائي",
  "عامل بناء",
  "رسام",
  // يمكنك إضافة المزيد حسب الحاجة
];

const years = Array.from({ length: 31 }, (_, i) => i === 0 ? "بدون" : i + " سنة");

const EditProfile = () => {
  return (
    <div className="min-h-screen bg-[#f6f6f6] flex flex-col items-center py-6 px-2">
      {/* Logo and heading */}
      <div className="w-full max-w-2xl">
        <div className="flex items-center justify-between mb-4">
          <img
            src="/logo-khedamni.svg"
            alt="Khedamni Logo"
            className="h-12 ml-auto"
            style={{ minWidth: "60px" }}
            onError={e => (e.currentTarget.style.display = "none")}
          />
        </div>
        <div className="text-[#202c76] text-2xl font-bold text-right mb-1" dir="rtl">
          تعديل الملف الشخصي
        </div>
        <div className="text-gray-700 text-base font-normal text-right mb-6" dir="rtl">
          اهلا، حرفياً، راك شخص مهم؟
        </div>
      </div>

      {/* Card */}
      <form
        className="w-full max-w-2xl bg-[#f2f2f4] rounded-2xl shadow p-5 flex flex-col gap-4"
        dir="rtl"
      >
        {/* Row 1: Phone number + City */}
        <div className="flex flex-col md:flex-row gap-4">
          {/* Phone */}
          <div className="flex-1 flex flex-col">
            <label htmlFor="phone" className="mb-1 font-semibold text-sm text-right">
              رقم الهاتف <span className="text-red-500">*</span>
            </label>
            <div className="relative flex items-center">
              {/* Libya flag (SVG or Emoji) + code */}
              <span className="absolute right-3 flex items-center gap-1 text-gray-600 text-base font-medium select-none" style={{ top: "50%", transform: "translateY(-50%)" }}>
                <img src="https://hatscripts.github.io/circle-flags/flags/ly.svg" alt="Libya Flag" className="w-6 h-6 rounded-full border border-gray-200" />
                <span className="mr-1">+218</span>
              </span>
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="0912345678"
                required
                className="pr-20 text-right placeholder:text-gray-400"
                style={{ direction: "ltr", textAlign: "right" }}
              />
            </div>
          </div>
          {/* City */}
          <div className="flex-1 flex flex-col">
            <label htmlFor="city" className="mb-1 font-semibold text-sm text-right">
              المدينة
            </label>
            <div className="relative flex items-center">
              <Input id="city" name="city" placeholder="ادخل المدينة" className="text-right placeholder:text-gray-400 pr-10" />
              <Eye className="absolute right-3 w-5 h-5 text-gray-400 pointer-events-none" />
            </div>
          </div>
        </div>
        {/* Row 2: Profession + Experience */}
        <div className="flex flex-col md:flex-row gap-4">
          {/* Profession */}
          <div className="flex-1 flex flex-col">
            <label htmlFor="profession" className="mb-1 font-semibold text-sm text-right">
              الحرفة <span className="text-red-500">*</span>
            </label>
            <div className="relative flex items-center">
              <Select>
                <SelectTrigger className="pr-10 text-right">
                  <SelectValue placeholder="اختر حرفتك" />
                </SelectTrigger>
                <SelectContent align="end">
                  {professions.map((pro) => (
                    <SelectItem value={pro} key={pro}>{pro}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <User className="absolute right-3 w-5 h-5 text-gray-400 pointer-events-none" />
            </div>
          </div>
          {/* Experience */}
          <div className="flex-1 flex flex-col">
            <label htmlFor="experience" className="mb-1 font-semibold text-sm text-right">
              سنوات الخبرة
            </label>
            <div className="relative flex items-center">
              <Select>
                <SelectTrigger className="pr-10 text-right">
                  <SelectValue placeholder="اختر سنوات الخبرة" />
                </SelectTrigger>
                <SelectContent align="end">
                  {years.map((y) => (
                    <SelectItem value={y} key={y}>{y}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Calendar className="absolute right-3 w-5 h-5 text-gray-400 pointer-events-none" />
            </div>
          </div>
        </div>
        {/* Details */}
        <div className="flex flex-col">
          <label htmlFor="details" className="mb-1 font-semibold text-sm text-right">
            التفاصيل
          </label>
          <Textarea
            id="details"
            name="details"
            placeholder="اشرح خدمتك/خدماتك لعملائك....."
            className="min-h-[84px] max-h-56 resize-y placeholder:text-gray-400 text-right"
          />
        </div>
        {/* Service images */}
        <div className="flex flex-col">
          <label className="mb-1 font-semibold text-sm text-right">
            صور خدمتك <span className="text-red-500">*</span>
          </label>
          <div
            className="w-full h-48 rounded-xl border border-dashed border-[#d5d5df] flex items-center justify-center bg-white cursor-pointer hover:bg-gray-50 transition"
          >
            <div className="flex flex-col items-center gap-2 text-gray-400">
              <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 48 48"><path strokeLinecap="round" strokeLinejoin="round" d="M32 28a4 4 0 11-8 0 4 4 0 018 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M3 33.75V14.25C3 11.35 5.35 9 8.25 9h31.5C42.65 9 45 11.35 45 14.25v19.5c0 2.9-2.35 5.25-5.25 5.25H8.25A5.25 5.25 0 013 33.75z" /><path strokeLinecap="round" strokeLinejoin="round" d="M21 18l-7.768 9.042A.75.75 0 0014 29.25h20a.75.75 0 00.768-1.208L27 18a3 3 0 00-6 0z" /></svg>
              <span className="text-base font-medium">اضغط لإضافة صور</span>
            </div>
            {/* يمكن تطوير منطقة الرفع لاحقًا */}
          </div>
        </div>
        {/* Save button */}
        <Button type="submit" className="mt-4 w-full rounded-full bg-[#202c76] text-white text-lg py-3 font-bold hover:bg-[#181f55] transition">
          حفظ
        </Button>
      </form>
    </div>
  );
};

export default EditProfile;
