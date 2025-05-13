import React, { useState, useContext } from 'react';
import { UserContext } from './UserContext';

export const EditProfile = () => {
    const { user, setUser } = useContext(UserContext);
    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setUser({ name, email });
    }

    return (
        <div className="edit">
            <h1>Edit Profile</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
                <label htmlFor="email">Email</label>
                <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <button type="submit">Save</button>
            </form>

        </div>
    )
}