
// import React, { useEffect, useState, useRef } from "react";
// import Heading from "../Layout/Heading";
// import Button from "../Layout/Button";
// import img from "../assets/contact.png";
// import { motion } from "framer-motion"; // Import Framer Motion
// import { db } from "../firebase/Config"; // Firebase Config file
// import { collection, addDoc } from "firebase/firestore"; // Firestore imports

// const Contact = () => {
//   const [animate, setAnimate] = useState(false); // State to control animation
//   const sectionRef = useRef(null); // Ref for the Contact section

//   useEffect(() => {
//     // Set up Intersection Observer to trigger animation when section is in view
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setAnimate(false);
//           setTimeout(() => setAnimate(true), 100);
//         }
//       },
//       { threshold: 0.5 } // Trigger when 50% of the section is in the viewport
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => {
//       if (sectionRef.current) {
//         observer.unobserve(sectionRef.current);
//       }
//     };
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Collect form data
//     const data = {
//       name: e.target.userName.value,
//       email: e.target.userEmail.value,
//       number: e.target.userNumber.value,
//       createdAt: new Date(), // Add timestamp for Firestore
//     };

//     try {
//       // Add data to Firestore collection
//       await addDoc(collection(db, "contacts"), data);
//       alert("Message sent successfully!");
//       e.target.reset(); // Reset form after submission
//     } catch (error) {
//       console.error("Error sending message:", error);
//       alert("An error occurred while sending your message.");
//     }
//   };

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center md:mx-32 mx-5 mt-10">
//       <Heading title1="Contact" title2="Us" />

//       <div
//         className="flex flex-col md:flex-row justify-between w-full"
//         ref={sectionRef}
//       >
//         {/* Animated Form */}
//         <motion.form
//           className="w-full md:w-2/5 space-y-5 pt-20"
//           onSubmit={handleSubmit}
//           initial={{ opacity: 0, x: -50 }}
//           animate={animate ? { opacity: 1, x: 0 } : {}}
//           transition={{ duration: 1 }}
//         >
//           <div className="flex flex-col">
//             <label htmlFor="userName">Your Name</label>
//             <input
//               className="py-3 px-2 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all"
//               type="text"
//               name="userName"
//               id="userName"
//               placeholder="Enter your name"
//               required
//             />
//           </div>
//           <div className="flex flex-col">
//             <label htmlFor="userEmail">Your Email</label>
//             <input
//               className="py-3 px-2 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all"
//               type="email"
//               name="userEmail"
//               id="userEmail"
//               placeholder="Enter your email"
//               required
//             />
//           </div>
//           <div className="flex flex-col">
//             <label htmlFor="userNumber">Your Number</label>
//             <input
//               className="py-3 px-2 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all"
//               type="text"
//               name="userNumber"
//               id="userNumber"
//               placeholder="Enter your number"
//               required
//             />
//           </div>

//           <div className="flex flex-row justify-center">
//             <Button title="Send Message" />
//           </div>
//         </motion.form>

//         {/* Animated Image */}
//         <motion.div
//           className="w-full md:w-2/4"
//           initial={{ opacity: 0, x: 50 }}
//           animate={animate ? { opacity: 1, x: 0 } : {}}
//           transition={{ duration: 1 }}
//         >
//           <img src={img} alt="Contact Illustration" />
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default Contact;
import React, { useEffect, useState, useRef } from "react";
import Heading from "../Layout/Heading";
import Button from "../Layout/Button";
import img from "../assets/contact.png";
import { motion } from "framer-motion"; // Import Framer Motion
import { db } from "../firebase/Config"; // Firebase Config file
import { collection, addDoc } from "firebase/firestore"; // Firestore imports
import { toast, ToastContainer } from "react-toastify"; // Import Toastify
import "react-toastify/dist/ReactToastify.css"; // Toastify CSS

const Contact = () => {
  const [animate, setAnimate] = useState(false); // State to control animation
  const sectionRef = useRef(null); // Ref for the Contact section

  useEffect(() => {
    // Set up Intersection Observer to trigger animation when section is in view
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(false);
          setTimeout(() => setAnimate(true), 100);
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the section is in the viewport
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Collect form data
    const data = {
      name: e.target.userName.value,
      email: e.target.userEmail.value,
      number: e.target.userNumber.value,
      createdAt: new Date(), // Add timestamp for Firestore
    };

    try {
      // Add data to Firestore collection
      await addDoc(collection(db, "contacts"), data);
      toast.success("Message sent successfully!", { position: "top-center" }); // Show success toast
      e.target.reset(); // Reset form after submission
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error("An error occurred while sending your message.", {
        position: "top-center",
      }); // Show error toast
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center md:mx-32 mx-5 mt-10">
      <Heading title1="Contact" title2="Us" />

      <div
        className="flex flex-col md:flex-row justify-between w-full"
        ref={sectionRef}
      >
        {/* Animated Form */}
        <motion.form
          className="w-full md:w-2/5 space-y-5 pt-20"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: -50 }}
          animate={animate ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <div className="flex flex-col">
            <label htmlFor="userName">Your Name</label>
            <input
              className="py-3 px-2 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all"
              type="text"
              name="userName"
              id="userName"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="userEmail">Your Email</label>
            <input
              className="py-3 px-2 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all"
              type="email"
              name="userEmail"
              id="userEmail"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="userNumber">Your Number</label>
            <input
              className="py-3 px-2 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all"
              type="text"
              name="userNumber"
              id="userNumber"
              placeholder="Enter your number"
              required
            />
          </div>

          <div className="flex flex-row justify-center">
            <Button title="Send Message" />
          </div>
        </motion.form>

        {/* Animated Image */}
        <motion.div
          className="w-full md:w-2/4"
          initial={{ opacity: 0, x: 50 }}
          animate={animate ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <img src={img} alt="Contact Illustration" />
        </motion.div>
      </div>

      {/* Toastify Container */}
      <ToastContainer />
    </div>
  );
};

export default Contact;
