
import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';

const AccountSuccess = () => {
  const navigate = useNavigate();

  const handleCompleteProfile = () => {
    navigate('/complete-profile');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8 text-center">
        <div className="mb-8">
          <Link to="/" className="inline-block mb-6">
            <div className="text-khedamni-blue text-2xl font-bold">
              <span className="text-khedamni-orange">K</span>hedamni
            </div>
          </Link>
          <h1 className="text-xl font-bold text-gray-800 arabic-text mb-6">تم إنشاء حساب</h1>
        </div>

        <div className="mb-8">
          <div className="relative mx-auto w-24 h-24 mb-6">
            <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center">
              <CheckCircle className="w-12 h-12 text-white" />
            </div>
            {/* Decorative dots */}
            <div className="absolute -top-2 -right-2 w-3 h-3 bg-yellow-400 rounded-full"></div>
            <div className="absolute -top-4 right-6 w-2 h-2 bg-orange-400 rounded-full"></div>
            <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-blue-400 rounded-full"></div>
            <div className="absolute -bottom-4 left-6 w-2 h-2 bg-green-400 rounded-full"></div>
            <div className="absolute top-0 -left-4 w-2 h-2 bg-purple-400 rounded-full"></div>
            <div className="absolute -top-6 left-2 w-1.5 h-1.5 bg-pink-400 rounded-full"></div>
            <div className="absolute bottom-0 -right-4 w-2 h-2 bg-indigo-400 rounded-full"></div>
            <div className="absolute -bottom-6 right-2 w-1.5 h-1.5 bg-red-400 rounded-full"></div>
          </div>
          
          <p className="text-gray-600 arabic-text text-sm leading-relaxed">
            خليها تنتقل للخطوة التالية، أكمل ملف التعريف الخاص بك.
          </p>
        </div>

        <Button
          onClick={handleCompleteProfile}
          className="w-full bg-khedamni-blue hover:bg-blue-700 text-white py-3 rounded-lg font-medium arabic-text"
        >
          أكمل الملف الشخصي
        </Button>
      </div>
    </div>
  );
};

export default AccountSuccess;
