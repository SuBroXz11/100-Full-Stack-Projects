import zxcvbn from 'zxcvbn';

const PasswordStrengthMeter = ({ password2 }) => {
    const testResult = zxcvbn(password2)
    const num = testResult.score * 100 / 4;
    console.log(num);

    const changeIndicatorColor = () => (
        {
            width: '70%',
            background: 'red',
            height: '7px'

        })
    return (
        <>
            <div className="progress" style={{ height: '7px' }}>
                <div className="progress-bar" style={changeIndicatorColor()}></div>
            </div>
        </>
    )
}
export default PasswordStrengthMeter
