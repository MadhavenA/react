import React, { useState } from 'react';

const SignPage = ({ onSubmit }) => {
    const [profile, setProfile] = useState(null);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);

    const handleProfileChange = (e) => {
        setProfile(e.target.files[0]);
    };

    const handleSubmit = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            onSubmit(profile, name, email);
        }, 3000);
    };

    const isFormComplete = profile && name && email;

    return (
        <div className="signin-container">
            <div className="signin-form">
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleProfileChange}
                    className="profile-input"
                    style={{ display: 'none' }}
                    id="profile-input"
                />
                <label htmlFor="profile-input">
                    <div
                        className="profile-placeholder"
                        style={{
                            backgroundImage: profile
                                ? `url(${URL.createObjectURL(profile)})`
                                : 'none',
                        }}
                    ></div>
                </label>

                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="text-input"
                />

                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="text-input"
                />

                {isFormComplete && (
                    <button onClick={handleSubmit} className="submit-button">
                        {loading ? <div className="spinner"></div> : 'Submit'}
                    </button>
                )}
            </div>
            <div className="signin-logo">
                <img src="/mahaswami.png" />
            </div>
        </div>
    );
};

export default SignPage;
