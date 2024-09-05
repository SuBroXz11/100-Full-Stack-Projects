import React, { useState, useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PasswordStrengthMeter from './PasswordStrengthMeter';

const Form = () => {
    const [password2, setPassword] = useState('')
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });
    const [formErrors, setFormErrors] = useState({
        name: false,
        email: false,
        password: false
    });
    const inputRef = useRef(null);

    // Focus the first input field (Name) on component load
    useEffect(() => {
        inputRef.current.focus();
    }, []);

    // Handle input changes and update form data state
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Validate form inputs
    const validateForm = () => {
        const errors = {};
        let formIsValid = true;

        if (!formData.name.trim()) {
            errors.name = true;
            toast.error('Name is required!');
            formIsValid = false;
        }

        if (!formData.email.trim()) {
            errors.email = true;
            toast.error('Email is required!');
            formIsValid = false;
        }

        if (!formData.password.trim()) {
            errors.password = true;
            toast.error('Password is required!');
            formIsValid = false;
        }

        setFormErrors(errors);
        return formIsValid;
    };

    // Handle form submission
    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            // If form is valid, show success toast and handle form data submission
            toast.success('Form submitted successfully!');
            console.log('Form data:', formData);
            // Reset form after submission
            setFormData({ name: '', email: '', password: '' });
        }
    };


    // Destructure values for easier usage
    const { name, email, password } = formData;
    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className="col-md-6">
                <div className="card p-4 shadow">
                    <h2 className="text-center mb-4">React Form Validation</h2>
                    <form onSubmit={handleFormSubmit}>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                name="name"
                                value={name}
                                onChange={handleChange}
                                ref={inputRef} // Focus this field on mount
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email address</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                name="email"
                                value={email}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input
                                type="password"
                                className="form-control shadow-none mb-1"
                                id="password"
                                name="password"
                                value={password2}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <PasswordStrengthMeter password2={password2} />
                        </div>
                        <button type="submit" className="btn btn-primary w-100">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Form;
