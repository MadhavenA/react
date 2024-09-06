import React, { useState } from 'react';

const ProfileCard = ({ profileData, onClose }) => {
  const [isEditable, setIsEditable] = useState(false);
  const [name, setName] = useState(profileData.name);
  const [email, setEmail] = useState(profileData.email);
  const [profile, setProfile] = useState(profileData.profile);

  const handleEditToggle = () => setIsEditable(!isEditable);

  const handleSave = () => {
    profileData.name = name;
    profileData.email = email;
    setIsEditable(false);
  };

  return (
    <div className="profile-card">
      <div className="profile-card-header">
        <h3>Profile</h3>
        <button onClick={onClose}>Close</button>
      </div>
      <div className="profile-picture">
        <img src={URL.createObjectURL(profile)} alt="Profile" />
      </div>
      <div className="profile-info">
        {isEditable ? (
          <>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="profile-input"
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="profile-input"
            />
            <button onClick={handleSave} className="save-button">Save</button>
          </>
        ) : (
          <>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <button onClick={handleEditToggle} className="edit-button">Edit</button>
          </>
        )}
      </div>
    </div>
  );
};

export default ProfileCard;
