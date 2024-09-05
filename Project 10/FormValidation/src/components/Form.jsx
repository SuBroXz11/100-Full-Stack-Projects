import React, { useState, useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { toast } from 'react-toastify';
import PasswordStrengthMeter from './PasswordStrengthMeter';

const Form = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });
    const [formErrors, setFormErrors] = useState({
        name: '',
        email: '',
        password: ''
    });
    const inputRef = useRef(null);

    // Focus the first input field 'Name' on component load
    useEffect(() => {
        inputRef.current.focus();
    }, []);

    // Handle input changes and update form data state
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Validate form inputs
    const validateForm = () => {
        const errors = { name: '', email: '', password: '' };
        let formIsValid = true;

        if (!formData.name.trim()) {
            errors.name = 'Name is required!';
            formIsValid = false;
        }

        if (!formData.email.trim()) {
            errors.email = 'Email is required!';
            formIsValid = false;
        }

        if (!formData.password.trim()) {
            errors.password = 'Password is required!';
            formIsValid = false;
        }

        setFormErrors(errors);

        return formIsValid;
    };
    // Destructure values for easier usage
    const { name, email, password } = formData;

    // Handle form submission
    const handleFormSubmit = (e) => {
        e.preventDefault();

        // Clear previous error messages
        setFormErrors({
            name: '',
            email: '',
            password: ''
        });

        if (validateForm()) {
            // If form is valid, show success toast and handle form data submission
            toast.success('Form submitted successfully!');
            console.log('Form data:', formData);
            // Reset form after submission
            setFormData({ name: '', email: '', password: '' });
        }
    };
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
                            {formErrors.name && <div className="text-danger">{formErrors.name}</div>}
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
                            {formErrors.email && <div className="text-danger">{formErrors.email}</div>}
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input
                                type="password"
                                className="form-control shadow-none mb-1"
                                id="password"
                                name="password"
                                value={password}
                                onChange={handleChange}
                            />
                            {/* Conditionally render the PasswordStrengthMeter */}
                            {password && (
                                <PasswordStrengthMeter password={password} />
                            )}
                            {formErrors.password && <div className="text-danger">{formErrors.password}</div>}
                        </div>
                        <button type="submit" className="btn btn-primary w-100">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Form;
