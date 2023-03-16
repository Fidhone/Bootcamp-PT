import React from 'react';

import Contact from '../../components/Contact';

const ContactData = () => {
  const contact = {
    name: 'Francisco Torres',
    location: 'Madrid, España',
    email: 'fidhone@gmail.com',
    phone: '+34 696969696',
    socialMedia: [
      { name: 'Twitter', link: 'https://twitter.com/fidhone' },
      {
        name: 'LinkedIn',
        link: 'https://www.linkedin.com/in/francisco-torres-moreno-9156b6263/',
      },
      { name: 'GitHub', link: 'https://github.com/fidhone' },
    ],
  };

  return (
    <div>
      <Contact {...contact} />
    </div>
  );
};

export default ContactData;
