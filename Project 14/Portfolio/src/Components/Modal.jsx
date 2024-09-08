import React, { useRef, useEffect, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { useGlobalContext } from '../Context/Context';

export default function Modal() {
    const { closeModal, showModal } = useGlobalContext();
    if (!showModal) {
        return null;
    }

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isFormValid, setIsFormValid] = useState(true);

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    const handleFormSubmit = (e) => {
        e.preventDefault();

        // Perform your custom form validation logic
        if (name.trim() === '' || email.trim() === '') {
            setIsFormValid(false);
            return;
        }

        // Reset the form validity state
        setIsFormValid(true);

        // If the form is valid, you can submit the form
        e.target.submit();
    };

    return (
        <div className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center zidx'>
            <div className="bg-white p-2 rounded w-full max-w-md radius">
                <div className="flex justify-end">
                    <button className='flex items-center justify-center p-2 hover:text-red-800 hover:animate-spin' onClick={closeModal}>
                        <span className="text-3xl"><AiOutlineClose /></span>
                    </button>
                </div>

                <div className="p-4">
                    <h2 className="text-2xl font-semibold mb-4">Let's get in touch <span className="wave">👋</span></h2>
                    <form action="https://formsubmit.co/subratkrp@gmail.com" method="POST" onSubmit={handleFormSubmit}>
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className={`mt-1 p-2 border rounded-md w-full ${!isFormValid && name.trim() === '' ? 'border-red-500' : ''}`}
                                ref={inputRef}
                            />
                            {!isFormValid && name.trim() === '' && <p className="text-red-500 text-sm mt-1">Name is required</p>}
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className={`mt-1 p-2 border rounded-md w-full ${!isFormValid && email.trim() === '' ? 'border-red-500' : ''}`}
                            />
                            {!isFormValid && email.trim() === '' && <p className="text-red-500 text-sm mt-1">Email is required</p>}
                        </div>
                        <div className="mb-4">
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="4"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                className="mt-1 p-2 border rounded-md w-full"
                            ></textarea>
                        </div>
                        <div className="mb-4">
                            <button type="submit" className="w-full bg-emerald-600 text-white p-2 rounded-md hover:bg-emerald-900">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
