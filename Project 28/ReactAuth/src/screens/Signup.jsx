import React, { useState } from 'react';
import bcrypt from 'bcryptjs';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';


const Signup = () => {
    const [formData, setFormData] = useState({ username: '', email: '', password: '' });
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSignup = () => {
        if (formData.username && formData.email && formData.password) {
            const hashedPassword = bcrypt.hashSync(formData.password, 10);
            const userData = { ...formData, password: hashedPassword };

            // Save the user data to a .json file (this would require a backend in practice)
            localStorage.setItem('user', JSON.stringify(userData));
            toast.success('User registered successfully!');
            navigate('/login');
        } else {
            toast.error('All fields are required!');
        }
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Sign Up</h2>
                    <input
                        type="text"
                        placeholder="Username"
                        name="username"
                        className="input input-bordered w-full"
                        onChange={handleInputChange}
                    />
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
                    <button className="btn btn-primary mt-4" onClick={handleSignup}>
                        Sign Up
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Signup;
