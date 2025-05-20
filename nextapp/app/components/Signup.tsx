"use client"

import axios from 'axios';
import {ChangeEventHandler, useState } from 'react';

export function Signup(){

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');



return <div className="h-screen flex justify-center flex-col">
        <div className="flex justify-center">
        <a href="#" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ">
                <div>
                    <div className="px-10">
                        <div className="text-3xl font-extrabold">
                            Sign up
                        </div>
                    </div>
                    <div className="pt-2">
                        <LabelInput onChange={(e) => {
                            setEmail(e.target.value);
                        }} Label="Email" value={email} placeholder="harkirat@gmail.com" />
                        <LabelInput onChange={(e) => {
                            setPassword(e.target.value)
                        }} Label="Password" value={password} type={"password"} placeholder="123456" />
                        <button onClick={async () => {
                            const response = await axios.post('http://localhost:8000/api/user', {
                                email,
                                password
                            });
                            console.log(response.data);
                        }} type="submit" className="mt-8 w-full text-white bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Sign in</button>
                    </div>
                </div>
            </a>
        </div>
    </div>
}

function LabelInput({Label,placeholder,type,value,onChange}: LabelInputType){
    return (
        <div>
            <label className='block text-gray-700 text-sm font-bold mb-2'>{Label}</label>
            <input type="type||text" placeholder={placeholder} required value={value} onChange={onChange} className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' />
        </div>
    )
}

interface LabelInputType{
    Label: string,
    placeholder: string,
    type?: string,
    value?: string,
    onChange: ChangeEventHandler<HTMLInputElement>
}