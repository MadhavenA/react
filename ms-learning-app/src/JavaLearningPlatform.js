import React from 'react';

const JavaLearningPlatform = () => {
  const links = [
    "https://learnjava.com",
    "https://javabrains.io",
    "https://oracle.com/java",
    "https://codecademy.com/learn/learn-java",
    "https://coursera.org/specializations/java-programming",
  ];

  return (
    <div className="java-links-page">
      <h2>Java Learning Platforms</h2>
      <div className="links-container">
        {links.map((link, index) => (
          <a key={index} href={link} target="_blank" rel="noopener noreferrer" className="java-link">
            {link}
          </a>
        ))}
      </div>
    </div>
  );
};

export default JavaLearningPlatform;
