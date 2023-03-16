import './Contact.css';

import React from 'react';

const Contact = ({ name, location, email, phone, socialMedia }) => {
  return (
    <section className="sectionContact">
      <div className="contact">
        <h2 className="contact-name">{name}</h2>
        <p className="contact-info">Location: {location}</p>
        <p className="contact-info">Email: {email}</p>
        <p className="contact-info">Phone: {phone}</p>
        <div className="contact-social">
          <span className="contact-social-label">Social Media:</span>
          <ul className="contact-social-list">
            {socialMedia.map((platform, index) => (
              <li key={index}>
                <a href={platform.link} className="contact-social-link">
                  {platform.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Contact;
