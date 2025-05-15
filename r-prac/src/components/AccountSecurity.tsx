import React from 'react'
import { validatePassword, required } from '../utils/Formutils';

interface AppProps {
    data: any;
    onChange: (key: string, value: any) => void;
    onError: (key: string, value: string) => void;
    error: string;
    onNext: () => void;
    onPrevious: () => void;
}

export const AccountSecurity: React.FC<AppProps> = ({
    data,
    onChange,
    onError,
    error,
    onNext,
    onPrevious
}) => {

    const handleNextClick = () => {
        if (!required(data.password)) {
            onError('password', 'Password is required');
            return;
        }
        if (!validatePassword(data.password)) {
            onError('password', 'Invalid password');
            return;
        }
        if (!required(data.securityAnswer)) {
            onError('securityAnswer', 'Security Answer is required');
            return;
        }
        onError("", "");
        onNext();
    }

    return (
        <div>
            <h3>AccountSecurity</h3>
            <input
                type="password"
                placeholder="Password"
                value={data.password}
                onChange={(e) => onChange('password', e.target.value)}
            />
            <small style={{ color: 'gray', display: 'block', marginBottom: '10px' }}>
                Password must be at least 8 characters long and include uppercase, lowercase, number, and special character.
            </small>

            <input
                type="text"
                placeholder='Security Answer'
                value={data.securityAnswer}
                onChange={(e) => onChange('securityAnswer', e.target.value)}
            />
            <button onClick={onPrevious}>Previous</button>
            <button onClick={handleNextClick}>Next</button>
        </div>



    )
}
