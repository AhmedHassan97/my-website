import Link from "next/link";
import Header from "../Header&Layout/Header";
import Layout from "../Header&Layout/Layout";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Experiences = (props) => {
  const { ref, inView, entry } = useInView();
  const controls = useAnimation();

  if (inView) {
    controls.start({
      x: 0,
      transition: {
        delay: 0.2,
        type: "spring",
        stiffness: 80,
      },
    });
  }
  return (
    <Layout sectionId="experience" backgroundColor="bg-base-100">
      <Header
        sectionName="Experience"
        quote="“Protons give an atom its identity, electrons its personality.”"
        author="- Bill Bryson, A short history of nearly everything"
      />

      <div className="divider w-1/2 lg:mx-auto mr-auto"></div>
      <div ref={ref}>
        <motion.div
          initial={{
            x: "100vw",
          }}
          animate={controls}
        >
          {/* container */}
          <div className="flex flex-col mt-10 space-y-4 xl:mx-20 ">
            {/* single Card */}
            <div className="space-y-10 ">
              <h1
                className="font-extrabold text-4xl"
                style={{ fontFamily: "IBM Plex Mono,monospace" }}
              >
                Work Experience
              </h1>
              {props.careers.map((item) => (
                <motion.div
                  key={item.company}
                  whileHover={{
                    scale: 1.05,
                    translateY: -2,
                  }}
                >
                  <div className="flex md:flex-row flex-col border-2 border-base-content rounded-box p-8">
                    <div className="flex flex-col md:w-1/4 ">
                      <h1 className="text-3xl text-primary font-extrabold">
                        <a
                          href={item.link}
                          className="hover:underline"
                          style={{ fontFamily: "IBM Plex Mono,monospace" }}
                          rel="noopener"
                        >
                          {item.company}
                        </a>
                      </h1>
                      <h2 className="text-base text-base-content font-bold ">
                        {item.date}
                      </h2>
                    </div>

                    <div className="flex flex-col md:w-3/4">
                      <h2
                        className="md:text-3xl font-extrabold pb-2 underline"
                        style={{ fontFamily: "IBM Plex Mono,monospace" }}
                      >
                        {item.role}
                      </h2>
                      <div className="flex flex-col">
                        {item.whatIDid.map((task) => (
                          <div
                            className="font-semibold text-primary"
                            key={task.length}
                          >
                            -{task}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            {/* <div class="divider w-1/2 mx-auto"></div> */}

            <div className="space-y-10 ">
              <h1
                className="font-extrabold text-4xl mt-6"
                style={{ fontFamily: "IBM Plex Mono,monospace" }}
              >
                Education
              </h1>
              {props.education.map((item) => (
                <motion.div
                  key={item.schoolName}
                  whileHover={{
                    scale: 1.05,
                    translateY: -2,
                  }}
                >
                  <div
                    className="flex md:flex-row flex-col border-2 border-base-content rounded-box p-8"
                    key={item.schoolName}
                  >
                    <div className="flex flex-col md:w-1/4">
                      <h1 className="text-3xl text-primary font-extrabold">
                        <Link href={item.link}>
                          <a
                            className="hover:underline"
                            style={{ fontFamily: "IBM Plex Mono,monospace" }}
                            rel="noopener"
                          >
                            {item.schoolName}
                          </a>
                        </Link>
                      </h1>
                      <h2 className="text-base text-base-content font-bold">
                        {item.date}
                      </h2>

                      <h3 className="text-base text-primary font-extrabold">
                        {item.Grade}
                      </h3>
                    </div>

                    <div className="flex flex-col md:w-3/4">
                      <h2
                        className="md:text-3xl font-extrabold pb-2 underline"
                        style={{ fontFamily: "IBM Plex Mono,monospace" }}
                      >
                        {item.major}
                      </h2>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
};

export default Experiences;
