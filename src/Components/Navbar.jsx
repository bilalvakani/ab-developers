// import React, { useState } from 'react';
// import { Link } from 'react-scroll';
// import { AiOutlineMenu } from "react-icons/ai";
// const Navbar = () => {
//     const[menu,setMenu]=useState(false);
     
//   const handleChange=()=>{
//     setMenu(!menu);
//   }  
//   return (
//     <div>
//       <div className='flex flex-row justify-between p-5 px-5 md:px-32 bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
//         <div>
//           {/* Regular text or logo */}
//           <span className='font-semibold text-2xl p-1 cursor-pointer'>A&B Developers</span>
//         </div> 
//         <nav className="hidden md:flex gap-5 font-medium p-1 text-lg">
//           <Link
//             to="home"
//             spy={true}
//             smooth={true}
//             duration={500}
//             className="hover:text-[#539165] transition-all cursor-pointer"
//           >
//             Home
//           </Link>
        
//           <Link
//   to="about"
//   spy={true}
//   smooth={true}
//   duration={500}
//   className="hover:text-[#539165] transition-all cursor-pointer"
// >
//   About
// </Link>
//           <Link
//             to="services"
//             spy={true}
//             smooth={true}
//             duration={500}
//             className="hover:text-[#539165] transition-all cursor-pointer"
//           >
//             Services
//           </Link>
//           <Link
//             to="projects"
//             spy={true}
//             smooth={true}
//             duration={500}
//             className="hover:text-[#539165] transition-all cursor-pointer"
//           >
//             Projects
//           </Link>
//           <Link
//             to="contact"
//             spy={true}
//             smooth={true}
//             duration={500}
//             className="hover:text-[#539165] transition-all cursor-pointer"
//           >
//             Contact Us
//           </Link>
//         </nav>
//                    {/* for mobiler devices  */}
//         <div className='flex md:hidden' onClick={handleChange}>
//             <div>
//             <AiOutlineMenu size={22} />


//             </div>
//          </div>           








//       </div>
//       <div className={` ${
//           menu ? "translate-x-0" : "-translate-x-full"
//         } md:hidden flex flex-col absolute bg-[#ffffff] left-0 top-20 font-medium text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300 `}
//       >
//       <Link
//             to="home"
//             spy={true}
//             smooth={true}
//             duration={500}
//             className="hover:text-[#539165] transition-all cursor-pointer"
//           >
//             Home
//           </Link>
//           <Link
//             to="about"
//             spy={true}
//             smooth={true}
//             duration={500}
//             className="hover:text-[#539165] transition-all cursor-pointer"
//           >
//             About
//           </Link>
//           <Link
//             to="services"
//             spy={true}
//             smooth={true}
//             duration={500}
//             className="hover:text-[#539165] transition-all cursor-pointer"
//           >
//             Services
//           </Link>
//           <Link
//             to="projects"
//             spy={true}
//             smooth={true}
//             duration={500}
//             className="hover:text-[#539165] transition-all cursor-pointer"
//           >
//             Projects
//           </Link>
//           <Link
//             to="contact"
//             spy={true}
//             smooth={true}
//             duration={500}
//             className="hover:text-[#539165] transition-all cursor-pointer"
//           >
//             Contact Us
//           </Link>

//       </div>
//     </div>
//   );
// };

// export default Navbar;
import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { AiOutlineMenu } from "react-icons/ai";
import { motion } from "framer-motion"; // Import Framer Motion for animation

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };

  return (
    <div>
      {/* Navbar Container */}
      <div className='flex flex-row justify-between p-5 px-5 md:px-32 bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
        {/* Logo Section */}
        <motion.div
          className='font-semibold text-2xl p-1 cursor-pointer'
          whileHover={{ scale: 1.1 }} // Logo scaling effect on hover
          whileTap={{ scale: 0.95 }} // Logo tap effect
        >
          <span className="text-[#539165]">A&B Developers</span> {/* Custom Logo Color */}
        </motion.div>

        {/* Desktop Navbar Links */}
        <nav className="hidden md:flex gap-5 font-medium p-1 text-lg">
          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-[#539165] transition-all cursor-pointer"
          >
            Home
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-[#539165] transition-all cursor-pointer"
          >
            About
          </Link>
          <Link
            to="services"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-[#539165] transition-all cursor-pointer"
          >
            Services
          </Link>
          <Link
            to="projects"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-[#539165] transition-all cursor-pointer"
          >
            Projects
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-[#539165] transition-all cursor-pointer"
          >
            Contact Us
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className='flex md:hidden' onClick={handleChange}>
          <AiOutlineMenu size={22} />
        </div>
      </div>

      {/* Mobile Menu Animation */}
      <motion.div
        className={`${
          menu ? "translate-x-0" : "-translate-x-full"
        } md:hidden flex flex-col absolute bg-[#ffffff] left-0 top-20 font-medium text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}
        initial={{ opacity: 0 }} // Initial opacity
        animate={{ opacity: 1 }} // Animation to fade in
        exit={{ opacity: 0 }} // Animation to fade out when menu is closed
        transition={{ duration: 0.3 }}
      >
        <Link
          to="home"
          spy={true}
          smooth={true}
          duration={500}
          className="hover:text-[#539165] transition-all cursor-pointer"
        >
          Home
        </Link>
        <Link
          to="about"
          spy={true}
          smooth={true}
          duration={500}
          className="hover:text-[#539165] transition-all cursor-pointer"
        >
          About
        </Link>
        <Link
          to="services"
          spy={true}
          smooth={true}
          duration={500}
          className="hover:text-[#539165] transition-all cursor-pointer"
        >
          Services
        </Link>
        <Link
          to="projects"
          spy={true}
          smooth={true}
          duration={500}
          className="hover:text-[#539165] transition-all cursor-pointer"
        >
          Projects
        </Link>
        <Link
          to="contact"
          spy={true}
          smooth={true}
          duration={500}
          className="hover:text-[#539165] transition-all cursor-pointer"
        >
          Contact Us
        </Link>
      </motion.div>
    </div>
  );
};

export default Navbar;
