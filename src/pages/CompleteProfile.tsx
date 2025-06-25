
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar, Upload, MapPin, Phone } from 'lucide-react';

const CompleteProfile = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    phone: '',
    profession: '',
    skillsYears: '',
    birthDate: '',
    details: '',
    portfolio: null as File | null
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleProfessionChange = (value: string) => {
    setFormData({
      ...formData,
      profession: value
    });
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData({
        ...formData,
        portfolio: file
      });
    }
  };

  const handleSubmit = () => {
    // Here you would typically submit the profile data
    navigate('/');
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
          <h1 className="text-xl font-bold text-gray-800 arabic-text">أكمل الملف الشخصي</h1>
          <p className="text-sm text-gray-600 arabic-text mt-2">أهلاً حرفي! إريك شخص مهم؟</p>
        </div>

        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-right block arabic-text">رقم الهاتف:</Label>
              <div className="relative">
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full text-right pr-20"
                  dir="rtl"
                  placeholder="0123456789"
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center">
                  <img src="/api/placeholder/20/14" alt="MA" className="w-5 h-3.5 mr-1" />
                  <span className="text-sm text-gray-600">218+</span>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="profession" className="text-right block arabic-text">المهنة:</Label>
              <Select onValueChange={handleProfessionChange}>
                <SelectTrigger className="w-full text-right" dir="rtl">
                  <SelectValue placeholder="اختر مهنتك" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="plumber">سباك</SelectItem>
                  <SelectItem value="electrician">كهربائي</SelectItem>
                  <SelectItem value="carpenter">نجار</SelectItem>
                  <SelectItem value="painter">دهان</SelectItem>
                  <SelectItem value="mechanic">ميكانيكي</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="skillsYears" className="text-right block arabic-text">سنوات الخبرة:</Label>
            <Select onValueChange={(value) => setFormData({...formData, skillsYears: value})}>
              <SelectTrigger className="w-full text-right" dir="rtl">
                <SelectValue placeholder="اختر سنوات الخبرة" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1-2">1-2 سنوات</SelectItem>
                <SelectItem value="3-5">3-5 سنوات</SelectItem>
                <SelectItem value="6-10">6-10 سنوات</SelectItem>
                <SelectItem value="10+">أكثر من 10 سنوات</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="birthDate" className="text-right block arabic-text">تاريخ الميلاد:</Label>
            <div className="relative">
              <Input
                id="birthDate"
                name="birthDate"
                type="date"
                value={formData.birthDate}
                onChange={handleInputChange}
                className="w-full text-right pr-10"
                dir="rtl"
              />
              <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="details" className="text-right block arabic-text">التفاصيل:</Label>
            <Textarea
              id="details"
              name="details"
              value={formData.details}
              onChange={handleInputChange}
              className="w-full text-right min-h-20"
              dir="rtl"
              placeholder="اشرح خدماتك، خبراتك، أعمالك السابقة"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="portfolio" className="text-right block arabic-text">صور عملك:</Label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-gray-400 transition-colors">
              <input
                id="portfolio"
                type="file"
                accept="image/*"
                onChange={handleFileUpload}
                className="hidden"
                multiple
              />
              <label htmlFor="portfolio" className="cursor-pointer">
                <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                <p className="text-sm text-gray-600 arabic-text">اختر الصور أو اسحبها هنا</p>
                <p className="text-xs text-gray-500 arabic-text mt-1">PNG, JPG, GIF حتى 10MB</p>
              </label>
            </div>
          </div>

          <Button
            onClick={handleSubmit}
            className="w-full bg-khedamni-blue hover:bg-blue-700 text-white py-3 rounded-lg font-medium arabic-text"
          >
            هيا نبدأ على بركة الله
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CompleteProfile;
