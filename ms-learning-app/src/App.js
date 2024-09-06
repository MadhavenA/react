import React, { useState } from 'react';
import './App.css';
import SignPage from './SignPage';
import CoursePage from './CoursePage';

function App() {
    const [showOptions, setShowOptions] = useState(false);
    const [signInPage, setSignInPage] = useState(false);
    const [coursePage, setCoursePage] = useState(false);
    const [userDetails, setUserDetails] = useState(null);

    const handleSignInClick = () => {
        setShowOptions(true);
    };

    const handleStartClick = () => {
        setShowOptions(true);
    };

    const handleSignInSubmit = (profile, name, email) => {
        setUserDetails({ profile, name, email });
        setSignInPage(false);
        setCoursePage(true);
    };

    const handleNewLearnerClick = () => {
        setSignInPage(true);
        setShowOptions(false);
    };

    const handleAlreadyMemberClick = () => {
        // Set guest profile
        const guestProfile = {
            profile: null,  // Optional: You can use a default guest image if you have one.
            name: 'Guest',
            email: 'guest@domain.com',
        };
        setUserDetails(guestProfile);
        setCoursePage(true);
        setShowOptions(false);
    };

    return (
        <>
            {!signInPage && !coursePage ? (
                <div className="App">
                    <img src="/mahaswami.png" className="App-logo" alt="logo" />

                    {userDetails ? (
                        <div className="signed-in-info">
                            <button className="profile-button">
                                {userDetails.profile ? (
                                    <img
                                        src={URL.createObjectURL(userDetails.profile)}
                                        alt="Profile"
                                        className="profile-image"
                                    />
                                ) : (
                                    <span className="guest-profile-icon">👤</span>
                                )}
                                {userDetails.name}
                            </button>
                            <button className="start-button" onClick={handleStartClick}>
                                Start
                            </button>
                            <p className="user-email">{userDetails.email}</p>
                        </div>
                    ) : showOptions ? (
                        <div className="options-card">
                            <button className="new-learner-button" onClick={handleNewLearnerClick}>
                                New Learner
                            </button>
                            <button className="already-member-button" onClick={handleAlreadyMemberClick}>
                                Guest ?
                            </button>
                        </div>
                    ) : (
                        <>
                            <button className="signIn-button" onClick={handleSignInClick}>
                                SignIn
                            </button>
                            <button className="start-button" onClick={handleStartClick}>
                                Start
                            </button>
                        </>
                    )}
                </div>
            ) : signInPage ? (
                <SignPage onSubmit={handleSignInSubmit} />
            ) : (
                <CoursePage profileData={userDetails} />
            )}
        </>
    );
}

export default App;
