// // import React from 'react'
// // import { Link } from 'react-scroll';
// // import Button from '../Layout/Button';
// // import img from "../assets/img2.png"
// // import Heading from '../Layout/Heading';
// // const About = () => {
// //   return (
// //     <div className='md:min-h-screen flex flex-col-reverse md:flex-row items-center gap-5 md:mx-32 mx-5 mt-14'>
// //         <div className=' w-full md:w-2/4'>
// //         <img src={img} alt="img" />
// //         </div>
// //         <div className='"w-full md:w-2/4 text-center space-y-2'>
// //         <Heading title1="About" title2="us?"/>
// //             <p  className='text-lightText'>
// //             I also collaborate with a skilled team of developers and designers to take on larger 
// //   projects. Our team approach ensures every detail is refined, and we deliver innovative 
// //   solutions that meet your unique needs. From brainstorming ideas to deployment, we 
// //   work together to bring your vision to life.            </p>
// //             <Link to="contact" spy={true} smooth={true} duration={500}>
// //           <Button title="Contact Us" />
// //         </Link>

// //         </div>
// //     </div>
// //   )
// // }

// // export default About
// import React, { useEffect } from 'react';
// import { Link } from 'react-scroll';
// import Button from '../Layout/Button';
// import img from "../assets/img2.png";
// import Heading from '../Layout/Heading';
// import { motion } from 'framer-motion';

// const About = () => {
//   useEffect(() => {
//     // Code to trigger animation when the About section is in view
//   }, []);

//   return (
//     <div className='md:min-h-screen flex flex-col-reverse md:flex-row items-center gap-5 md:mx-32 mx-5 mt-14' id="about">
//       {/* Left Section with Image */}
//       <motion.div 
//         className='w-full md:w-2/4'
//         initial={{ opacity: 0, x: -100 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ duration: 1 }}
//       >
//         <img src={img} alt="img" />
//       </motion.div>

//       {/* Right Section with Text */}
//       <motion.div 
//         className='w-full md:w-2/4 text-center space-y-2'
//         initial={{ opacity: 0, y: 100 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1.5 }}
//       >
//         <Heading title1="About" title2="us?" />
//         <p className='text-lightText'>
//           I also collaborate with a skilled team of developers and designers to take on larger 
//           projects. Our team approach ensures every detail is refined, and we deliver innovative 
//           solutions that meet your unique needs. From brainstorming ideas to deployment, we 
//           work together to bring your vision to life.
//         </p>
//         <Link to="contact" spy={true} smooth={true} duration={500}>
//           <Button title="Contact Us" />
//         </Link>
//       </motion.div>
//     </div>
//   );
// }

// export default About;
import React from 'react';
import { Link } from 'react-scroll';
import Button from '../Layout/Button';
import img from "../assets/img2.png";
import Heading from '../Layout/Heading';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div
      className='md:min-h-screen flex flex-col-reverse md:flex-row items-center gap-5 md:mx-32 mx-5 mt-14'
      id="about"
    >
      {/* Image Section */}
      <motion.div
        className='w-full md:w-2/4'
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <img src={img} alt="img" />
      </motion.div>

      {/* Text Section */}
      <motion.div
        className='w-full md:w-2/4 text-center space-y-2'
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
      >
        <Heading title1="About" title2="us?" />
        <p className='text-lightText'>
          I also collaborate with a skilled team of developers and designers to take on larger 
          projects. Our team approach ensures every detail is refined, and we deliver innovative 
          solutions that meet your unique needs. From brainstorming ideas to deployment, we 
          work together to bring your vision to life.
        </p>
        <Link to="contact" spy={true} smooth={true} duration={500}>
          <Button title="Contact Us" />
        </Link>
      </motion.div>
    </div>
  );
};

export default About;
