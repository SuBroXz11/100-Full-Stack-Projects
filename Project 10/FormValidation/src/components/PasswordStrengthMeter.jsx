import zxcvbn from 'zxcvbn';
import React from 'react';

const PasswordStrengthMeter = ({ password }) => {
    const testResult = zxcvbn(password);

    // Calculate the width for the progress bar by getting scores as 0 25 75 or 100
    const num = (testResult.score * 100) / 4;

    // Function to determine the color of the progress bar
    const handleProgressColor = () => {
        switch (testResult.score) {
            case 0:
                return '#EA1111';
            case 1:
                return '#FFAD00';
            case 2:
                return '#FFAD00';
            case 3:
                return '#9bc158';
            case 4:
                return '#00b500';
            default:
                return 'none';
        }
    };

    // Function to create the password strength label
    const createPasswordLabel = () => {
        if (password === '') return ''; // Empty when no password is typed
        switch (testResult.score) {
            case 0:
                return 'Very Weak';
            case 1:
                return 'Weak';
            case 2:
                return 'Fair';
            case 3:
                return 'Good';
            case 4:
                return 'Strong';
            default:
                return '';
        }
    };

    // Styling for the progress bar
    const changeIndicatorColor = () => ({
        width: `${num}%`,
        background: handleProgressColor(),
        height: '7px',
        transition: 'width 0.5s ease'
    });

    return (
        <>
            {/* Progress bar */}
            <div className="progress w-100 mt-2" style={{ height: '7px' }}>
                <div className="progress-bar" style={changeIndicatorColor()}></div>
            </div>

            {/* Strength label */}
            <div className="d-flex justify-content-end mt-1">
                <span style={{ color: handleProgressColor(), fontWeight: 'bold' }}>
                    {createPasswordLabel()}
                </span>
            </div>
        </>
    );
};

export default PasswordStrengthMeter;
