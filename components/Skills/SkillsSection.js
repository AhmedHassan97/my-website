import {
  CameraIcon,
  DesktopComputerIcon,
  ServerIcon,
  DotsCircleHorizontalIcon,
} from "@heroicons/react/outline";
import Header from "../Header&Layout/Header";
import Layout from "../Header&Layout/Layout";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const features = [
  {
    name: "Programming Languages",
    items: [
      {
        name: "JavaScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },
      {
        name: "Typescript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      },
      {
        name: "Python",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg",
      },
      {
        name: "Java",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg",
      },
      {
        name: "PHP",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
      },
    ],
    icon: DesktopComputerIcon,
  },
  {
    name: "Frontend",
    items: [
      {
        name: "HTML",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg",
      },

      {
        name: "CSS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg ",
      },
      {
        name: "React/Native ",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg",
      },
      {
        name: "Next-js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-line.svg",
      },
      {
        name: "Redux",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
      },
      {
        name: "Tailwind-css",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
      },
      {
        name: "Bootstrap",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain-wordmark.svg",
      },
    ],
    icon: CameraIcon,
  },
  {
    name: "Backend",
    items: [
      {
        name: "Nodejs",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      },
      {
        name: "Express",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      },
      {
        name: "Graphql",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
      },
      {
        name: "Prisma",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/premierepro/premierepro-plain.svg",
      },
      {
        name: "mongo",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg",
      },
      {
        name: "PostgresSql",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg",
      },

      {
        name: "Mysql",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg",
      },
    ],
    icon: ServerIcon,
  },
  {
    name: "Other",
    items: [
      {
        name: "Git",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg",
      },
      {
        name: "Firebase",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
      },
      {
        name: "Linux",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
      },
    ],
    icon: DotsCircleHorizontalIcon,
  },
];
const SkillsComponent = (props) => {
  const { ref, inView, entry } = useInView();
  const controls = useAnimation();

  if (inView) {
    controls.start({
      x: 0,
      transition: {
        duration: 1,
        ease: "anticipate",
      },
    });
  }
  return (
    <Layout sectionId="skills" backgroundColor="bg-base-200">
      <Header
        sectionName="Skills"
        quote="“Life without knowledge is death in disguise.”"
        author="- Talib Kweli"
      />

      <div className="divider w-1/2 lg:mx-auto mr-auto"></div>

      <div className="mt-10" ref={ref}>
        <div className="space-y-10 md:space-y-0 lg:grid lg:grid-cols-2 md:gap-x-8 md:gap-y-10 xl:ml-20">
          {features.map((feature) => (
            <motion.div
              initial={{
                x: "100vw",
              }}
              animate={controls}
              key={feature.name}
            >
              <div className="space-y-4 w-full">
                <div className="md:flex-row flex flex-col">
                  <div className="h-12 w-12 rounded-md">
                    <feature.icon />
                  </div>
                  <p
                    className="ml-2 text-3xl leading-6 font-extrabold my-auto"
                    style={{ fontFamily: "IBM Plex Mono,monospace" }}
                  >
                    {feature.name}
                  </p>
                </div>
                <div className="mt-2 md:ml-16 ml-2 space-x-2">
                  <div className="grid sm:grid-cols-3 grid-cols-2 gap-4">
                    {feature.items.map((item) => {
                      return (
                        <div
                          key={item.name}
                          className="space-x-2 flex-row flex transform transition duration-200 ease-in-out hover:scale-125 z-0"
                        >
                          <img
                            alt={item.name}
                            src={item.icon}
                            width="25"
                            height="25"
                            className={
                              ["Express", "Next-js"].includes(item.name)
                                ? "bg-white rounded-box"
                                : ""
                            }
                          />
                          <h1 className="text-primary font-bold xl:text-xl text-sm">
                            {item.name}
                          </h1>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default SkillsComponent;
