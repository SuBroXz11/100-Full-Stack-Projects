import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const navigate = useNavigate();
    const username = localStorage.getItem('loggedInUser');

    const handleLogout = () => {
        localStorage.removeItem('loggedInUser');
        navigate('/login');
    };

    return (
        <div className="h-screen flex flex-col items-center justify-center">
            <h1 className="text-4xl">Hello, {username}!</h1>
            <button className="btn btn-primary mt-4" onClick={handleLogout}>
                Logout
            </button>
        </div>
    );
};

export default Dashboard;
