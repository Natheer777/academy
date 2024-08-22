import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css'
function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        const storedUsername = localStorage.getItem('username') || 'admin';
        const storedPassword = localStorage.getItem('password') || 'developer';

        if (username === storedUsername && password === storedPassword) {
            localStorage.setItem('auth', 'true');
            navigate('/academy/Dash');  // تحويل إلى صفحة لوحة التحكم بعد نجاح تسجيل الدخول
        } else {
            alert('اسم المستخدم أو كلمة المرور غير صحيح');
        }
    };

    return (
        <div className="login-container">
            <h2>تسجيل الدخول</h2>
            <input
                type="text"
                placeholder="اسم المستخدم"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                placeholder="كلمة المرور"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>تسجيل الدخول</button>
        </div>
    );
}

export default LoginPage;
