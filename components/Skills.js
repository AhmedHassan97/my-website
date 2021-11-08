import {
  CameraIcon,
  DesktopComputerIcon,
  ServerIcon,
  DotsCircleHorizontalIcon,
} from "@heroicons/react/outline";

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
        icon: "./Prisma-logo.png",
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
  return (
    <div
      className="mx-auto mt-11 pt-20 text-base-200-content flex flex-col pb-8 text-base-content font-medium text-xl bg-base-200 transition duration-100 ease-linear md:min-h-screen"
      style={{ maxWidth: "1600px", fontFamily: "poppins" }}
      id="skills"
    >
      <div className="px-4 sm:px-6 lg:px-8 flex flex-col">
        <div className="lg:text-center">
          <p
            className=" mt-2 text-3xl leading-8 font-extrabold tracking-tight sm:text-6xl"
            style={{ fontFamily: "IBM Plex Mono,monospace" }}
          >
            Skills
          </p>
          <p className="mt-4 max-w-2xl text-xl lg:mx-auto font-semibold text-primary">
            “Life without knowledge is death in disguise.”
          </p>
          <p className="mt-4 max-w-2xl text-xl lg:mx-auto font-semibold text-primary">
            - Talib Kweli
          </p>
        </div>
        <div className="divider w-1/2 lg:mx-auto mr-auto"></div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 lg:grid lg:grid-cols-2 md:gap-x-8 md:gap-y-10 xl:ml-20">
            {features.map((feature) => (
              <div key={feature.name} className="space-y-4 w-full">
                <dt className="md:flex-row flex flex-col">
                  <div className="h-12 w-12 rounded-md">
                    <feature.icon />
                  </div>
                  <p
                    className="ml-2 text-3xl leading-6 font-extrabold my-auto"
                    style={{ fontFamily: "IBM Plex Mono,monospace" }}
                  >
                    {feature.name}
                  </p>
                </dt>
                <dd className="mt-2 md:ml-16 ml-2 space-x-2">
                  <div className="grid sm:grid-cols-3 grid-cols-2 gap-4">
                    {feature.items.map((item) => {
                      return (
                        <div
                          key={item.name}
                          className="space-x-2 flex-row flex transform transition duration-200 ease-in-out hover:scale-125 z-0
                        "
                        >
                          <img
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
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default SkillsComponent;
