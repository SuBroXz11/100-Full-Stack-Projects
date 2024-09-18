import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Dashboard = () => {
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem('currentUser'));

    const handleLogout = () => {
        localStorage.removeItem('loggedIn');
        localStorage.removeItem('currentUser');
        toast.success('Logout Successful...')
        window.location.reload();
        navigate('/login');
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="p-6 bg-white rounded-lg shadow-md w-80 text-center">
                <h2 className="text-xl font-bold mb-4">Hello, {user?.username}</h2>
                <button onClick={handleLogout} className="btn btn-primary">Logout</button>
            </div>
        </div>
    );
};

export default Dashboard;
