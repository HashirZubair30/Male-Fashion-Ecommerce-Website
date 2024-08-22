import React from 'react';
import './TeamSection.css';

const TeamSection = () => {
  const teamMembers = [
    { img: 'img/men1.jpg', name: 'John Smith', role: 'Fashion Designer' },
    { img: 'img/men2.jpg', name: 'Mark Johnson', role: 'Stylist' },
    { img: 'img/men3.jpg', name: 'Alex Brown', role: 'Creative Director' },
    { img: 'img/men4.jpg', name: 'David Lee', role: 'Marketing Head' },
  ];

  return (
    <div className="team-container">
      <h2>Meet Our Team</h2>
      <div className="team-members">
        {teamMembers.map((member, index) => (
          <div className="team-member" key={index}>
            <img src={member.img} alt={`${member.name}`} />
            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamSection;
