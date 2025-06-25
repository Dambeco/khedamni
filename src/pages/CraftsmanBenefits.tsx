
import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Users, Clock, TrendingUp } from 'lucide-react';

const CraftsmanBenefits = () => {
  const navigate = useNavigate();

  const handleCreateAccount = () => {
    navigate('/create-account?role=craftsman');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-8">
      <div className="max-w-lg w-full bg-white rounded-2xl shadow-lg p-8">
        <div className="text-center mb-8">
          <Link to="/" className="inline-block mb-6">
            <div className="text-khedamni-blue text-2xl font-bold">
              <span className="text-khedamni-orange">K</span>hedamni
            </div>
          </Link>
        </div>

        <div className="space-y-8 mb-8">
          <div className="flex items-start space-x-4 space-x-reverse text-right">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <Users className="w-6 h-6 text-khedamni-blue" />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-gray-800 arabic-text mb-2">وسع قاعدة عملائك</h3>
              <p className="text-gray-600 arabic-text text-sm leading-relaxed">
                وسع نطاقك وتواصل مع جمهور أوسع من العملاء الذين يحتاجون خدماتك
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4 space-x-reverse text-right">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <Clock className="w-6 h-6 text-green-600" />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-gray-800 arabic-text mb-2">اخدم على حسب جدول توقيتك</h3>
              <p className="text-gray-600 arabic-text text-sm leading-relaxed">
                اخدم حسب جدول توقيتك الخاص، وازن بين العمل وحياتك الشخصية
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4 space-x-reverse text-right">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <TrendingUp className="w-6 h-6 text-khedamni-orange" />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-gray-800 arabic-text mb-2">طور نفسك واكسب لقمة عيشك بالحلال</h3>
              <p className="text-gray-600 arabic-text text-sm leading-relaxed">
                زد من فرص عملك و طور من مهاراتك في مجالك
              </p>
            </div>
          </div>
        </div>

        <Button
          onClick={handleCreateAccount}
          className="w-full bg-khedamni-blue hover:bg-blue-700 text-white py-3 rounded-lg font-medium arabic-text"
        >
          إنشاء حساب
        </Button>

        <div className="text-center mt-4">
          <p className="text-xs text-gray-500 arabic-text">عندك حسابا؟ تسجيل دخول</p>
        </div>
      </div>
    </div>
  );
};

export default CraftsmanBenefits;
