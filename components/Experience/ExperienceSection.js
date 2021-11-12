import Link from "next/link";
import Header from "../Header&Layout/Header";
import Layout from "../Header&Layout/Layout";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Education = {
  items: [
    {
      schoolName: "Cairo University",
      major: "Bachelor-Computer and Communication Engineering (CCE-C)",
      Grade: "3.2/4",
      date: "June 2016 / June 2021",
      link: "http://eng.cu.edu.eg/en/",
      image:
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
    },
    {
      schoolName: "Sahara Language School",
      major: "Thanaweya Amma",
      Grade: "98%",
      date: "June 2016",
      link: "http://www.saharaschools.com/en/",
      image:
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
    },
  ],
};
const Careers = {
  name: "Careers",
  items: [
    {
      company: "Refolded",
      role: "Full Stack Engineer",
      date: "July 2021 -Current",
      link: "https://github.com/refolded",
      image:
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
      whatIDid: [
        `we are building open-source enterprise-ready applications, libraries and tools with modern tooling, development methodology, processes and workflows`,
      ],
    },
    {
      company: "Raccoon platform",
      role: "Machine-learning Engineer",
      date: "January 2021 - April 2021",
      link: "https://raccoonplatform.com/",
      image:
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
      whatIDid: [
        "Analyze data using elastic search and Kibana ",
        "Build both content based and collaborative recommendation systems",
        "Build hybrid model of recommendation systems",
      ],
    },
    {
      company: "WE",
      role: "Communication Engineer",
      link: "https://www.te.eg/wps/portal/te/Personal",
      date: "June 2019 - July 2019",
      image:
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
      whatIDid: [
        "Switch Configuration ,basic configuration for cisco switch, access ports",
        "Lap for simple network consisting of two switches, two routers and two pcs, Apply all the required configuration for the devices (switch, router & PC) and test connectivity scenarios",
        "Join with the Operating team in Troubleshooting and solving problems",
      ],
    },
  ],
};
const Experiences = () => {
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
              {Careers.items.map((item) => (
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
              {Education.items.map((item) => (
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
