import React from 'react';

const servicesList = [
  {
    id: 1,
    title: 'Service One',
    description: 'Description of Service One. This service provides...',
    iconName: 'service-icon-1.png', // Place this in your public/assets folder or use a web URL
  },
  {
    id: 2,
    title: 'Service Two',
    description:
      'Description of Service Two. Offering comprehensive solutions for...',
    iconName: 'service-icon-2.png',
  },
  // Add more services as needed
];

const ServiceItem = ({ title, description, iconName }) => (
  <div className='service-item'>
    <img src={`/assets/${iconName}`} alt={title} className='service-icon' />
    <h3 className='service-title'>{title}</h3>
    <p className='service-description'>{description}</p>
  </div>
);

const Services = () => (
  <section className='services-section'>
    <h2>Our Services</h2>
    <div className='services-grid'>
      {servicesList.map((service) => (
        <ServiceItem key={service.id} {...service} />
      ))}
    </div>
  </section>
);

export default Services;
