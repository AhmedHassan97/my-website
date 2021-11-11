import { saveAs } from "file-saver";
import Image from "next/image";
import useTypingEffect from "use-typing-effect";

const About = () => {
  const saveFile = () => {
    saveAs(
      "https://drive.google.com/uc?id=1f0VI_JB6Pi4psCDZzFRyOKb1L_BCwSd-&export=download",
      "Resume.pdf"
    );
  };
  const heading = useTypingEffect(["Hi,I am Ahmed Hassan"], {
    loop: false,
    playbackRate: 2,
  });

  return (
    <div className="flex flex-col max-w-4xl">
      {/* Tittle */}
      <div className="text-primary flex flex-col xl:flex-row">
        <h1
          className="mb-5 text-7xl font-extrabold  "
          style={{ fontFamily: "IBM Plex Mono,monospace" }}
        >
          {heading}
        </h1>
      </div>
      {/* Body */}
      <div>
        <p className="pb-3">\//ABOUT</p>
      </div>
      <div>
        <p className="mb-5 text-base-content font-bold text-justify leading-8">
          I am a Fullstack engineer with a proven track record of designing and
          implementing innovative user-centric websites. I have been working in
          the field for the past four years developing complex applications in
          Web Development.
        </p>
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
