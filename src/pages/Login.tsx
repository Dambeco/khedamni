
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleCreateAccount = () => {
    navigate('/choose-role');
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
          <h1 className="text-2xl font-bold text-gray-800 arabic-text">تسجيل الدخول</h1>
        </div>

        <div className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="username" className="text-right block arabic-text">اسم المستخدم:</Label>
            <Input
              id="username"
              name="username"
              type="text"
              value={formData.username}
              onChange={handleInputChange}
              className="w-full text-right"
              dir="rtl"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password" className="text-right block arabic-text">كلمة السر:</Label>
            <Input
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full text-right"
              dir="rtl"
            />
          </div>

          <Button
            onClick={handleCreateAccount}
            className="w-full bg-khedamni-blue hover:bg-blue-700 text-white py-3 rounded-lg font-medium arabic-text"
          >
            تسجيل
          </Button>

          <div className="text-center">
            <button
              onClick={() => navigate('/choose-role')}
              className="text-khedamni-blue hover:text-blue-700 text-sm arabic-text underline"
            >
              إنشاء حساب جديد
            </button>
            <p className="text-xs text-gray-500 mt-1 arabic-text">هل تريد إنشاء حساب جديد؟</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
