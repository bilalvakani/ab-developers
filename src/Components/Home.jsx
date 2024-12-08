
import React from 'react';
import { Link } from 'react-scroll';
import Button from '../Layout/Button';
import img from "../assets/img2.png";
import Heading from '../Layout/Heading';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className='min-h-screen flex flex-col md:flex-row md:justify-between items-center md:mx-32 mx-5 mt-10'>
      <motion.div
        className='md:w-2/4 text-center'
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-5xl font-semibold leading-tight">
          Empower Your Business with
        </h2>
        <span className="text-5xl font-semibold text-brightGreen">A&B Developers</span>
        <p className="text-lightText mt-5 text-start">
          Welcome to my portfolio! I specialize in crafting modern, user-friendly websites
          and powerful eCommerce platforms tailored to elevate your online presence.
          Whether you're starting from scratch or enhancing an existing site, my solutions
          are designed to drive results and captivate your audience. Let’s build something
          amazing together!
        </p>
        <Link to="contact" spy={true} smooth={true} duration={500}>
          <Button title="Contact Us" />
        </Link>
      </motion.div>

      <div className="w-full md:w-2/4">
        <motion.img
          src={img}
          alt="img"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        />
      </div>
    </div>
  );
};

export default Home;
