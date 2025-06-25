
import React, { useState } from 'react';
import { useNavigate, useSearchParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Eye, EyeOff, Mail } from 'lucide-react';

const CreateAccount = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const role = searchParams.get('role');
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    gender: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear error when user starts typing
    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: ''
      });
    }
  };

  const handleGenderChange = (value: string) => {
    setFormData({
      ...formData,
      gender: value
    });
    if (errors.gender) {
      setErrors({
        ...errors,
        gender: ''
      });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.firstName.trim()) newErrors.firstName = 'الاسم الأول مطلوب';
    if (!formData.lastName.trim()) newErrors.lastName = 'اسم العائلة مطلوب';
    if (!formData.gender) newErrors.gender = 'الجنس مطلوب';
    if (!formData.email.trim()) newErrors.email = 'البريد الإلكتروني مطلوب';
    if (!formData.password) newErrors.password = 'كلمة المرور مطلوبة';
    if (!formData.confirmPassword) newErrors.confirmPassword = 'تأكيد كلمة المرور مطلوب';
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'كلمات المرور غير متطابقة';
    }
    if (!agreeToTerms) newErrors.terms = 'يجب الموافقة على شروط الاستخدام';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleCreateAccount = () => {
    if (validateForm()) {
      navigate('/account-success');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-8">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8">
        <div className="text-center mb-8">
          <Link to="/" className="inline-block mb-6">
            <div className="text-khedamni-blue text-2xl font-bold">
              <span className="text-khedamni-orange">K</span>hedamni
            </div>
          </Link>
          <h1 className="text-xl font-bold text-gray-800 arabic-text">إنشاء حساب</h1>
        </div>

        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="lastName" className="text-right block arabic-text">اللقب:</Label>
              <Input
                id="lastName"
                name="lastName"
                type="text"
                value={formData.lastName}
                onChange={handleInputChange}
                className="w-full text-right"
                dir="rtl"
                placeholder="أدخل اللقب"
              />
              {errors.lastName && <p className="text-red-500 text-xs text-right">{errors.lastName}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="firstName" className="text-right block arabic-text">الاسم:</Label>
              <Input
                id="firstName"
                name="firstName"
                type="text"
                value={formData.firstName}
                onChange={handleInputChange}
                className="w-full text-right"
                dir="rtl"
                placeholder="أدخل الاسم"
              />
              {errors.firstName && <p className="text-red-500 text-xs text-right">{errors.firstName}</p>}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="text-right block arabic-text">الجنس:</Label>
              <Select onValueChange={handleGenderChange}>
                <SelectTrigger className="w-full text-right" dir="rtl">
                  <SelectValue placeholder="اختر جنسك" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="male">ذكر</SelectItem>
                  <SelectItem value="female">أنثى</SelectItem>
                </SelectContent>
              </Select>
              {errors.gender && <p className="text-red-500 text-xs text-right">{errors.gender}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-right block arabic-text">البريد الإلكتروني:</Label>
              <div className="relative">
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full text-right pr-10"
                  dir="rtl"
                  placeholder="أدخل بريدك الإلكتروني"
                />
                <Mail className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              </div>
              {errors.email && <p className="text-red-500 text-xs text-right">{errors.email}</p>}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="password" className="text-right block arabic-text">كلمة المرور:</Label>
            <div className="relative">
              <Input
                id="password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                value={formData.password}
                onChange={handleInputChange}
                className="w-full text-right pr-10"
                dir="rtl"
                placeholder="ضع كلمة مرور قوية"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
            {errors.password && <p className="text-red-500 text-xs text-right">{errors.password}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="confirmPassword" className="text-right block arabic-text">تأكيد كلمة المرور:</Label>
            <div className="relative">
              <Input
                id="confirmPassword"
                name="confirmPassword"
                type={showConfirmPassword ? 'text' : 'password'}
                value={formData.confirmPassword}
                onChange={handleInputChange}
                className="w-full text-right pr-10"
                dir="rtl"
                placeholder="أعد كتابة كلمة المرور"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              >
                {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
            {errors.confirmPassword && <p className="text-red-500 text-xs text-right">{errors.confirmPassword}</p>}
          </div>

          <div className="flex items-center space-x-2 space-x-reverse">
            <Checkbox
              id="terms"
              checked={agreeToTerms}
              onCheckedChange={(checked) => setAgreeToTerms(checked as boolean)}
            />
            <Label htmlFor="terms" className="text-sm arabic-text">
              أوافق على شروط الاستخدام
            </Label>
          </div>
          {errors.terms && <p className="text-red-500 text-xs text-right">{errors.terms}</p>}

          <Button
            onClick={handleCreateAccount}
            className="w-full bg-khedamni-blue hover:bg-blue-700 text-white py-3 rounded-lg font-medium arabic-text"
          >
            إنشاء حساب
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
