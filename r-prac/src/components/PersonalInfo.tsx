import React, { useEffect, useState } from 'react';
import { validateEmail, validatePhone, required } from '../utils/Formutils';

interface AppProps {
  data: any;
  onChange: (key: string, value: any) => void;
  onError: (key: string, value: string) => void; 
  error: string;
  onNext: () => void;
  onPrevious: () => void;
}

export const PersonalInfo: React.FC<AppProps> = ({
    data,
    onChange,
    onError,
    error,
    onNext,
    onPrevious
}) => {

    const handleNextClick = () => {
        if(!required(data.name)){
            onError('name', 'Name is required');
            return;
        }
        if(!validateEmail(data.email)){
            onError('email', 'Invalid email');
            return;
        }
        if(!validatePhone(data.phone)){
            onError('phone', 'Invalid phone');
            return;
        }
        onError("", "");
        onNext();
    } 

    return (
        <div>
            <h3>Personal Information</h3>
            <input 
                type="text"
                placeholder='Name'
                value={data.name}
                onChange={(e) => onChange('name', e.target.value)}
            />
            <input 
                type="email"
                placeholder='Email'
                value={data.email}
                onChange={(e) => onChange('email', e.target.value)}
            />
            <input 
                type="text"
                placeholder='Phone'
                value={data.phone}
                onChange={(e) => onChange('phone', e.target.value)}
            />
            <button onClick={onPrevious}>Previous</button>
            <button onClick={handleNextClick}>Next</button>

        </div>
    )
} 
