import React, { useState } from 'react';
import JavaLearningPlatform from './JavaLearningPlatform';
import ProfileCard from './ProfileCard';

const courses = [
  { title: 'Learn Java', image: '/images/java.png', description: 'Explore 30 Java learning platforms.' },
  { title: 'Learn Python', image: '/images/python.png', description: 'Explore Python resources and tutorials.' },
  { title: 'Learn JavaScript', image: '/images/javascript.png', description: 'Master JavaScript with these links.' },
  { title: 'Learn React', image: '/images/react.png', description: 'React tutorials for all levels.' },
  { title: 'Learn C++', image: '/images/cpp.png', description: 'Get started with C++ programming.' }
];

const CoursePage = ({ profileData }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const handleMouseEnter = (index) => setHoveredIndex(index);
  const handleMouseLeave = () => setHoveredIndex(null);

  const handleCardClick = (index) => {
    if (index === 0) {
      setSelectedCourse('java');
    }
  };

  const toggleProfileCard = () => setIsProfileOpen(!isProfileOpen);

  return (
    <div className="course-page">
      {selectedCourse === 'java' ? (
        <JavaLearningPlatform />
      ) : (
        <div className="courses-container">
          {courses.map((course, index) => (
            <div
              key={index}
              className={`course-card ${hoveredIndex === index ? 'hovered' : ''}`}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleCardClick(index)}
            >
              <img src={course.image} alt={course.title} className="course-image" />
              <h2>{course.title}</h2>
              <p>{course.description}</p>
            </div>
          ))}
        </div>
      )}
      {profileData && (
        <div className="profile-button" onClick={toggleProfileCard}>
          {profileData.profile ? (
            <img src={URL.createObjectURL(profileData.profile)} alt="Profile" className="profile-icon" />
          ) : (
            <>
              <span className="guest-profile-icon">👤</span>
              <span>{profileData.name}</span>
            </>
          )}
        </div>
      )}

      {isProfileOpen && <ProfileCard profileData={profileData} onClose={toggleProfileCard} />}
    </div>
  );
};

export default CoursePage;
