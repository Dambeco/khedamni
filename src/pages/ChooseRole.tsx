import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { User, Wrench } from 'lucide-react';

const ChooseRole = () => {
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState<'client' | 'craftsman' | null>(null);

  const handleRoleSelect = (role: 'client' | 'craftsman') => {
    setSelectedRole(role);
  };

  const handleNext = () => {
    if (selectedRole === 'craftsman') {
      navigate('/craftsman-benefits');
    } else if (selectedRole === 'client') {
      navigate(`/create-account?role=${selectedRole}`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8">
        <div className="text-center mb-8">
          <Link to="/" className="inline-block mb-6">
            <div className="text-khedamni-blue text-2xl font-bold">
              <span className="text-khedamni-orange">K</span>hedamni
            </div>
          </Link>
          <h1 className="text-xl font-bold text-gray-800 arabic-text">اختر دوراً</h1>
        </div>

        <div className="space-y-4 mb-8">
          <div
            onClick={() => handleRoleSelect('client')}
            className={`p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
              selectedRole === 'client'
                ? 'border-khedamni-blue bg-blue-50'
                : 'border-gray-200 hover:border-gray-300'
            }`}
          >
            <div className="flex items-center space-x-4 space-x-reverse">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center">
                <User className="w-8 h-8 text-khedamni-blue" />
              </div>
              <div className="flex-1 text-right">
                <h3 className="font-bold text-gray-800 arabic-text mb-1">تبحث عن حرفي؟</h3>
                <p className="text-sm text-gray-600 arabic-text">ابحث عن أفضل الحرفيين في خدماتك</p>
              </div>
            </div>
          </div>

          <div
            onClick={() => handleRoleSelect('craftsman')}
            className={`p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
              selectedRole === 'craftsman'
                ? 'border-khedamni-orange bg-orange-50'
                : 'border-gray-200 hover:border-gray-300'
            }`}
          >
            <div className="flex items-center space-x-4 space-x-reverse">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-orange-200 rounded-lg flex items-center justify-center">
                <Wrench className="w-8 h-8 text-khedamni-orange" />
              </div>
              <div className="flex-1 text-right">
                <h3 className="font-bold text-gray-800 arabic-text mb-1">أنت حرفي؟</h3>
                <p className="text-sm text-gray-600 arabic-text">قدم خدماتك للأشخاص الذين يحتاجون إليها</p>
              </div>
            </div>
          </div>
        </div>

        <Button
          onClick={handleNext}
          disabled={!selectedRole}
          className="w-full bg-khedamni-blue hover:bg-blue-700 text-white py-3 rounded-lg font-medium arabic-text disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          التالي
        </Button>
      </div>
    </div>
  );
};

export default ChooseRole;
