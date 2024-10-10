import { useState } from 'react';
import './Register_account.css'; // اضفنا ملف CSS للتصميم التفاعلي

export default function Register_account () {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    country: '',
    age: '',
    gender: '',
    educationLevel: '',
    japaneseLevel: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('كلمات السر غير متطابقة');
    } else {
      console.log('Form submitted:', formData);
    }
  };

  return (
    <form className="form-container academy p-5 mt-5 mb-5  m-auto" onSubmit={handleSubmit}>
        <h1 className='fw-bold m-auto mb-4 mt-4'>إنشاء حساب</h1>
      <div>
        <label>الاسم الشخصي:</label>
        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
      </div>
      <div>
        <label>اسم العائلة:</label>
        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
      </div>
      <div>
        <label>دولة الإقامة:</label>
        <input type="text" name="country" value={formData.country} onChange={handleChange} required />
      </div>
      <div>
        <label>العمر:</label>
        <input type="number" name="age" value={formData.age} onChange={handleChange} required />
      </div>
      <div>
        <label>الجنس:</label>
        <select name="gender" value={formData.gender} onChange={handleChange} required>
          <option value="">اختر</option>
          <option value="male">ذكر</option>
          <option value="female">أنثى</option>
        </select>
      </div>
      <div>
        <label>المستوى التعليمي:</label>
        <input type="text" name="educationLevel" value={formData.educationLevel} onChange={handleChange} required />
      </div>
      <div>
        <label>مستوى اللغة اليابانية:</label>
        <input type="text" name="japaneseLevel" value={formData.japaneseLevel} onChange={handleChange} required />
      </div>
      <div>
        <label>رقم الهاتف:</label>
        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
      </div>
      <div>
        <label>البريد الإلكتروني:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
      </div>
      <div>
        <label>كلمة السر:</label>
        <input type="password" name="password" value={formData.password} onChange={handleChange} required />
      </div>
      <div>
        <label>تأكيد كلمة السر:</label>
        <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
      </div>
      <button type="submit">تسجيل</button>
    </form>
  );
};

