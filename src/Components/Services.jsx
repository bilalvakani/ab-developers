
import React, { useEffect, useState } from 'react';
import Heading from '../Layout/Heading';
import CoursesCard from '../Layout/CoursesCard';
import appImg from "../assets/app.png";
import web from '../assets/web.png';
import { motion } from 'framer-motion'; // Import Framer Motion for animation

const Services = () => {
  // State to track if the section is in view
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          setIsInView(entry.isIntersecting);
        });
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('services-section');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center md:px-32 px-5 my-10">
      <Heading title1="Our" title2="Services" />

      {/* Wrapping the entire card section with motion.div and applying animation */}
      <motion.div
        id="services-section"
        className="flex flex-wrap justify-center gap-6 mt-6"
        initial={{ opacity: 0, transform: 'translateY(40px)', scale: 0.95 }}
        animate={{
          opacity: isInView ? 1 : 0,
          transform: isInView ? 'translateY(0)' : 'translateY(40px)',
          scale: isInView ? 1 : 0.95
        }}
        transition={{ duration: 1.2, ease: 'easeOut' }}  // Increased duration for a smoother effect
      >
        <CoursesCard 
          img={web} 
          title="Web Development" 
          content="We build modern, responsive websites tailored to your needs. Whether it's a sleek portfolio, an interactive educational site, or a professional corporate website, our designs focus on performance, usability, and impact." 
        />
        <CoursesCard 
          img={appImg} 
          title="App Development" 
          content="Transform your ideas into powerful mobile or web applications. Our apps are user-friendly, feature-rich, and designed to meet your unique business goals, ensuring an exceptional user experience." 
        />
        <CoursesCard 
          img="https://s14308.pcdn.co/wp-content/uploads/2023/07/hero-static.jpg.optimal.jpg" 
          title="Wordpress Development" 
          content="Get beautifully designed, customizable WordPress websites. From blogs to eCommerce stores, we deliver scalable solutions that are easy to manage and packed with the latest features." 
        />
      </motion.div>
    </div>
  );
};

export default Services;
