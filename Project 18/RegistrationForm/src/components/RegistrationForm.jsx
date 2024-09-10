import { useState } from 'react';
import { toast } from 'react-toastify';

export default function RegistrationForm() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        dateOfBirth: '',
        country: '',
        city: '',
        state: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        // Check for required fields
        const requiredFields = ['firstName', 'lastName', 'email', 'phone', 'dateOfBirth', 'country', 'city', 'state'];
        const missingFields = requiredFields.filter(field => !formData[field]);

        if (missingFields.length > 0) {
            toast.error(`Please fill in all required fields: ${missingFields.join(', ')}`);
            return;
        }

        // Log form data to console
        console.log(formData);

        // Reset form and show success message
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            dateOfBirth: '',
            country: '',
            city: '',
            state: '',
        });
        toast.success('Registration successful!');
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    return (
        <div className="flex justify-center items-center mb-10">
            <div className="p-4 rounded-lg shadow-lg w-full max-w-3xl bg-white">
                <div className="flex items-center justify-center p-4 mb-8">
                    <div className="w-full max-w-2xl">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label className="block text-base font-semibold text-[#07074D]">
                                    Full Name <span className='text-red-600 text-lg'>*</span>
                                </label>
                                <div className="flex space-x-4">
                                    <input
                                        type="text"
                                        name="firstName"
                                        id="firstName"
                                        placeholder="First Name"
                                        className="w-1/2 rounded-md border border-[#e0e0e0] bg-white py-2 px-4 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                    />
                                    <input
                                        type="text"
                                        name="lastName"
                                        id="lastName"
                                        placeholder="Last Name"
                                        className="w-1/2 rounded-md border border-[#e0e0e0] bg-white py-2 px-4 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className="flex space-x-4 mb-4">
                                <div className="w-1/2">
                                    <label htmlFor="email" className="block text-base font-medium text-[#07074D]">
                                        Email Address <span className='text-red-600 text-lg'>*</span>
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        placeholder="Enter your email"
                                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-4 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="w-1/2">
                                    <label htmlFor="phone" className="block text-base font-medium text-[#07074D]">
                                        Phone Number <span className='text-red-600 text-lg'>*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="phone"
                                        id="phone"
                                        placeholder="Enter your phone number"
                                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-4 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                        value={formData.phone}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className="flex space-x-4 mb-4">
                                <div className="w-1/2">
                                    <label htmlFor="dateOfBirth" className="block text-base font-medium text-[#07074D]">
                                        Date of Birth <span className='text-red-600 text-lg'>*</span>
                                    </label>
                                    <input
                                        type="date"
                                        name="dateOfBirth"
                                        id="dateOfBirth"
                                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-4 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                        value={formData.dateOfBirth}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="w-1/2">
                                    <label htmlFor="country" className="block text-base font-medium text-[#07074D]">
                                        Country <span className='text-red-600 text-lg'>*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="country"
                                        id="country"
                                        placeholder="Country"
                                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-4 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                        value={formData.country}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className="flex space-x-4 mb-4">
                                <div className="w-1/2">
                                    <label htmlFor="city" className="block text-base font-medium text-[#07074D]">
                                        City <span className='text-red-600 text-lg'>*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="city"
                                        id="city"
                                        placeholder="City"
                                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-4 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                        value={formData.city}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="w-1/2">
                                    <label htmlFor="state" className="block text-base font-medium text-[#07074D]">
                                        State <span className='text-red-600 text-lg'>*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="state"
                                        id="state"
                                        placeholder="State"
                                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-4 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                        value={formData.state}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="w-full rounded-md bg-[#491eff] py-2 text-center text-base font-semibold text-white outline-none hover:shadow-form">
                                    Register
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
