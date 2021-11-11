import { Transition } from "@headlessui/react";
import { Fragment } from "react";
import About from "./About";
import { motion } from "framer-motion";

import ContactCard from "./ContactCard";

const Profile = () => {
  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
    Transition,
  };
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={{ duration: 2 }}
      // animate={{
      //   scale: [1, 2, 2, 1, 1],
      //   rotate: [0, 0, 270, 270, 0],
      //   borderRadius: ["20%", "20%", "50%", "50%", "20%"],
      // }}
      // transition={{
      //   duration: 2,
      //   ease: "easeInOut",
      //   times: [0, 0.2, 0.5, 0.8, 1],
      //   repeat: Infinity,
      //   repeatDelay: 1,
      // }}
    >
      <div
        className="xl:min-h-screen pt-20 px-2 lg:mx-20 flex xl:flex-row flex-col justify-between md:space-x-2 space-x-0 md:pb-0 pb-8 text-base-content font-medium text-xl bg-base-100 transition duration-100 ease-linear "
        style={{ fontFamily: "poppins" }}
        id="profile"
      >
        <About />
        {/* Contact */}
        <motion.div
          animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [360, 0],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            repeatDelay: 1,
          }}
        >
          <ContactCard />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Profile;
