import React, { useEffect, useState } from 'react';

interface AppProps {
    data: any;
    onChange: (key: string, value: any) => void;
    onError: (key: string, value: string) => void;
    error: string;
    onNext: () => void;
    onPrevious: () => void;
}

export const Finalsubmit: React.FC<AppProps> = ({
    data,
    onChange,
    onError,
    error,
    onNext,
    onPrevious
}) => {
    const [formSummary, setFormSummary] = useState<any>({});
    const [loading, setLoading] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState<null | boolean>(null);
    const [submitError, setSubmitError] = useState('');

    useEffect(() => {
        const savedData = localStorage.getItem('formdata');
        if (savedData) {
            setFormSummary(JSON.parse(savedData));
        }
    }, []);

    const mockSubmit = () => {
        setLoading(true);
        setSubmitSuccess(null);
        setSubmitError('');

        setTimeout(() => {
            setLoading(false);
            const isSuccess = Math.random() > 0.4; // 60% chance to succeed
            if (isSuccess) {
                setSubmitSuccess(true);
            } else {
                setSubmitSuccess(false);
                setSubmitError('Server validation failed. Please try again.');
                // Optional: simulate a field-level server error
                onError('email', 'Email already exists on server');
            }
        }, 2000);
    };

    return (
        <div>
            <h3>Review & Submit</h3>

            <div>
                <h4>Summary:</h4>
                <p><strong>Name:</strong> {formSummary.name}</p>
                <p><strong>Email:</strong> {formSummary.email}</p>
                <p><strong>Phone:</strong> {formSummary.phone}</p>
                <p><strong>Password:</strong> {formSummary.password}</p>
                <p><strong>Security Answer:</strong> {formSummary.securityAnswer}</p>
                <p><strong>Income:</strong> {formSummary.income}</p>
                <p><strong>Employment:</strong> {formSummary.employment}</p>
            </div>

            {loading && <p>Submitting...</p>}

            {submitSuccess && <p style={{ color: 'green' }}>✔ Form submitted successfully!</p>}

            {submitSuccess === false && (
                <div>
                    <p style={{ color: 'red' }}>{submitError}</p>
                    <button onClick={mockSubmit}>Retry</button>
                </div>
            )}

            <button onClick={onPrevious}>Previous</button>
            <button onClick={mockSubmit} disabled={loading}>Submit</button>
        </div>
    );
};
