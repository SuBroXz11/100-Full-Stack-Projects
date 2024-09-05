import zxcvbn from 'zxcvbn';
import React from 'react';

const PasswordStrengthMeter = ({ password2 }) => {
    const testResult = zxcvbn(password2);

    // Calculate the width for the progress bar
    const num = (testResult.score * 100) / 4;

    // Function to determine the color of the progress bar
    const handleProgressColor = () => {
        switch (testResult.score) {
            case 0:
                return '#EA1111'; // red
            case 1:
                return '#FFAD00'; // orange
            case 2:
                return '#FFAD00'; // yellow
            case 3:
                return '#9bc158'; // light green
            case 4:
                return '#00b500'; // green
            default:
                return '#ddd'; // default color
        }
    };

    // Function to create the password strength label
    const createPasswordLabel = () => {
        if (password2 === '') return ''; // Empty when no password is typed
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
        transition: 'width 0.5s ease' // Smooth transition for the width change
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
