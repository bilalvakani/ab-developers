
import React from 'react';
import Heading from '../Layout/Heading';
import Projectcard from '../Layout/ProjectCard';

const Project = () => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center md:px-32 px-5">
      <Heading title1="Our" title2="Projects" />

      <div className=" flex flex-wrap justify-center gap-6 mt-6">
        <Projectcard
          title="Ecommerce App"
          content="E-commerce apps usually include the following essential content and features to ensure a smooth user experience and showcase products effectively. Below, I'll provide you with the content for your e-commerce app:"

          img="https://via.placeholder.com/150" // Replace with your image URL
          link="https://ab-developers02.netlify.app/" // Replace with your project URL
        />
        <Projectcard
          title="Restaurant App"
          content="Our Restaurant App is designed to enhance the dining experience for your customers while streamlining your business operations. The app features a visually appealing digital menu with high-quality images, detailed descriptions, and pricing for every dish. Customers can easily browse the menu, make reservations, and even place orders for takeaway or delivery."
          img="https://via.placeholder.com/150"
          link="https://example.com/restaurant-app"
        />
        <Projectcard
          title="Education App"
          content="Our Education Website serves as a comprehensive learning platform that empowers students and educators alike. It features a vibrant and modern design, making it visually appealing and easy to navigate. The website showcases a range of courses, each with detailed descriptions, eligibility criteria, and enrollment options."
          img="https://via.placeholder.com/150"
          link="https://example.com/education-app"
        />
        <Projectcard
          title="Property  Website"
          content="Our Property Website simplifies the process of buying, selling, and renting properties. The homepage features a search bar where users can filter properties by location, price, and type (e.g., residential, commercial). High-resolution images, virtual tours, and detailed descriptions accompany each property listing, helping users make informed decisions."
          img="https://via.placeholder.com/150"
          link="https://example.com/business-website"
        />
        <Projectcard
          title="Logistics Website
 "
          content="Our Logistics Website provides businesses with a powerful platform to manage their transportation and delivery needs. The homepage features an intuitive shipment tracking system where customers can input their tracking numbers to monitor the real-time status of their parcels. This transparency fosters trust and satisfaction among users."
          img="https://via.placeholder.com/150"
          link="https://example.com/portfolio-website"
        />
      </div>
    </div>
  );
};

export default Project;
