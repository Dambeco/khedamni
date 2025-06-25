import React from "react";
import {
  Info,
  FileText,
  Shield,
  Phone,
  LogOut,
  ChevronLeft,
  User,
} from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Link } from "react-router-dom";

const Section = ({
  title,
  icon: Icon,
  children,
}: {
  title: string;
  icon: React.ComponentType<any>;
  children: React.ReactNode;
}) => (
  <div className="mb-3 bg-white rounded-2xl shadow px-0">
    <Collapsible>
      <CollapsibleTrigger className="flex items-center justify-between w-full px-4 py-3 focus:outline-none">
        <span className="flex items-center gap-2 text-[#202c76] text-base font-semibold">
          <Icon className="w-5 h-5" />
          {title}
        </span>
        <ChevronLeft className="w-4 h-4" />
      </CollapsibleTrigger>
      <CollapsibleContent>{children}</CollapsibleContent>
    </Collapsible>
  </div>
);

const Profile = () => (
  <div className="min-h-screen bg-[#f9f9f9]">
    {/* Profile Card */}
    <div className="max-w-md w-full mx-auto mt-8 mb-8 bg-white rounded-2xl shadow p-6 flex flex-col items-center">
      <Avatar className="w-24 h-24 mb-3 ring-2 ring-[#f3b12d] ring-offset-2 ring-offset-white">
        <AvatarImage
          src="https://randomuser.me/api/portraits/men/32.jpg"
          alt="محمد غومة"
        />
        <AvatarFallback>MG</AvatarFallback>
      </Avatar>
      <div className="text-xl font-bold text-[#252525] mb-1" dir="rtl">
        محمد غومة
      </div>
      <div className="text-[#202c76] text-sm mb-3" dir="ltr">
        mohamedghuoma@gmail.com
      </div>
      <Link
        to="/profile/edit"
        className="rounded-full border border-[#bcbcbc] px-5 py-1.5 text-[#202c76] text-sm font-medium hover:bg-gray-50 transition mb-2"
      >
        تعديل الملف الشخصي
      </Link>
    </div>

    {/* صفحة حسابي - زر "حول الموقع" فوق زر "قانوني" */}
    <div className="max-w-md w-full mx-auto">
      {/* زر حول الموقع */}
      <Link
        to="/about"
        className="flex items-center gap-2 px-7 py-3 mb-3 bg-white rounded-2xl shadow text-[#202c76] text-base font-semibold hover:bg-gray-50 transition w-full"
      >
        <Info className="w-5 h-5" />
        <span className="flex-1 text-right">حول الموقع</span>
        <ChevronLeft className="w-4 h-4 ml-auto" />
      </Link>

      {/* قانوني */}
      <Section title="قانوني" icon={FileText}>
        <div className="px-7 pb-3">
          <a
            href="/terms"
            className="flex items-center gap-2 py-2 text-gray-700 hover:underline"
          >
            <FileText className="w-5 h-5" />
            <span className="flex-1">شروط الاستخدام</span>
            <ChevronLeft className="w-4 h-4 ml-auto" />
          </a>
          <a
            href="/privacy"
            className="flex items-center gap-2 py-2 text-gray-700 hover:underline"
          >
            <Shield className="w-5 h-5" />
            <span className="flex-1">سياسة الخصوصية</span>
            <ChevronLeft className="w-4 h-4 ml-auto" />
          </a>
        </div>
      </Section>

      {/* المزيد */}
      <Section title="المزيد" icon={User}>
        <div className="px-7 pb-3">
          {/* تم حذف خيار "حول الموقع" من هنا */}
          <Link
            to="/contact"
            className="flex items-center gap-2 py-2 text-gray-700 hover:underline w-full text-right"
          >
            <Phone className="w-5 h-5" />
            <span className="flex-1">تواصل معنا</span>
            <ChevronLeft className="w-4 h-4 ml-auto" />
          </Link>
          <button
            className="flex items-center gap-2 py-2 text-gray-700 hover:underline w-full text-right"
            type="button"
          >
            <LogOut className="w-5 h-5" />
            <span className="flex-1">تسجيل الخروج</span>
            <ChevronLeft className="w-4 h-4 ml-auto" />
          </button>
        </div>
      </Section>
    </div>
  </div>
);

export default Profile;
