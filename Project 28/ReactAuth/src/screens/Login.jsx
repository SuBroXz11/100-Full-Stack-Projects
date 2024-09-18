import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find(user => user.email === email && user.password === password);
        if (user) {
            localStorage.setItem('loggedIn', 'true');
            localStorage.setItem('currentUser', JSON.stringify(user));
            navigate('/dashboard');
            window.location.reload();
        } else {
            alert('Invalid email or password');
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="p-6 bg-white rounded-lg shadow-md w-80">
                <h2 className="text-xl font-bold mb-4">Login</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="input input-bordered w-full"
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="input input-bordered w-full"
                        required
                    />
                    <button type="submit" className="btn btn-primary w-full">Login</button>
                </form>
                <p className="mt-4">
                    Don't have an account? <Link to="/signup" className="text-blue-500">Sign Up</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
