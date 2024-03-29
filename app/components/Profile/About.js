import { saveAs } from "file-saver";
import Image from "next/image";
// import useTypingEffect from "use-typing-effect";
import TitleAnimated from "../TitleAnimated/TitleAnimated";
import { motion } from "framer-motion";
const About = () => {
  const saveFile = () => {
    saveAs(
      "https://drive.google.com/uc?export=download&id=1XvEGcnrcYzjGfO8KVnFoL3tLKW6buQsP",
      "Resume.pdf"
    );
  };
  //   loop: false,
  //   playbackRate: 2,
  // });

  return (
    <div className="flex flex-col max-w-4xl">
      {/* Tittle */}
      <div className="text-primary flex flex-col xl:flex-row">
        <h1
          className="mb-5 text-7xl font-extrabold  "
          style={{ fontFamily: "IBM Plex Mono,monospace" }}
        >
          {/* {heading} */}
          <TitleAnimated
            text={[
              `Hi, I'm <span >Ahmed</span >`,
              `Hi, I'm <span >Ahmed Hassan</span >`,
              `Hi, I'm <span >Ahmed Hassan</span >`,
              `Nice to meet <span >you!</span >`,
              `Hi, I'm <span >Ahmed</span>`,
            ]}
            textSize="text-5xl sm:text-6xl lg:text-7xl"
            breakText={true}
            extraStyle="md:pt-14 lg:pt-16"
          />
        </h1>
      </div>
      {/* Body */}
      <div>
        <motion.p
          initial={{ y: "-100vh", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1.5 }}
          className="mb-5 text-base-content font-bold text-justify leading-8"
        >
          I am a Fullstack engineer with a proven track record of designing and
          implementing innovative user-centric websites. I have been working in
          the field for the past four years developing complex applications in
          Web Development.
        </motion.p>
      </div>
      <div style={{ fontFamily: "IBM Plex Mono,monospace" }}>
        <button
          className="hover:bg-primary hover:text-primary-content rounded-box mb-4"
          style={{
            boxShadow: "-3px 5px #33332d",
            padding: "0.6rem 1rem",
            border: "3px solid",
            fontWeight: "600",
          }}
          onClick={() => saveFile()}
        >
          Download Resume
        </button>
      </div>
    </div>
  );
};

export default About;
