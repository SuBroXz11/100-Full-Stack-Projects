import React, { useState } from 'react';
import bcrypt from 'bcryptjs';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleLogin = () => {
        const storedUser = JSON.parse(localStorage.getItem('user'));
        if (storedUser && formData.email === storedUser.email) {
            if (bcrypt.compareSync(formData.password, storedUser.password)) {
                toast.success('Login successful!');
                localStorage.setItem('loggedInUser', storedUser.username);
                navigate('/dashboard');
            } else {
                toast.error('Invalid password!');
            }
        } else {
            toast.error('User not found!');
        }
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Login</h2>
                    <input
                        type="email"
                        placeholder="Email"
                        name="email"
                        className="input input-bordered w-full"
                        onChange={handleInputChange}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        className="input input-bordered w-full"
                        onChange={handleInputChange}
                    />
                    <button className="btn btn-primary mt-4" onClick={handleLogin}>
                        Login
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;
