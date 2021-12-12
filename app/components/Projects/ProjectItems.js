import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ProjectItems = (props) => {
  const { ref, inView, entry } = useInView();

  const controls = useAnimation();
  if (inView) {
    controls.start({
      x: 0,
      transition: {
        delay: 0.01,
        type: "spring",
        stiffness: 80,
      },
    });
  }
  return (
    <motion.div ref={ref}>
      <div
        style={{ fontFamily: "poppins" }}
        className="mx-auto text-base-200-content flex flex-col text-base-content font-medium text-xl transition duration-100 ease-linear "
      >
        <div className="space-y-10  lg:grid lg:grid-cols-1 md:gap-x-8 md:gap-y-10 xl:mx-20 ">
          {props.projects.slice(props.start, props.end).map((feature) => (
            <motion.div
              key={feature.name}
              initial={{
                x: "100vw",
              }}
              animate={controls}
              whileHover={{
                scale: 1.05,
                translateY: -2,
              }}
              // className={`${bgColor} ${textColor} ${extraStyle} px-3 py-4 rounded-lg cursor-pointer shadow-lg`}
            >
              <div className="space-y-4 w-full border-r-2 border-l-8 border-b-8 border-t-2 border-base-content p-8 rounded-box">
                <div className="sm:flex-row flex-col flex space-y-2 sm:space-y-0">
                  <div className="h-12 w-12 rounded-md">
                    <div dangerouslySetInnerHTML={{ __html: feature.icon }} />
                  </div>
                  <div className="flex flex-col space-y-2">
                    <p
                      className="ml-2 text-3xl font-extrabold my-auto	leading-7"
                      style={{ fontFamily: "IBM Plex Mono,monospace" }}
                    >
                      {feature.name}
                    </p>
                    <p className="ml-2 text-primary font-bold">
                      {feature.stack}
                    </p>
                  </div>
                </div>

                <div className="mt-2 md:ml-16 ml-2  space-x-2">
                  <p className="font-bold">{feature.description}</p>
                </div>

                <div
                  className="flex flex-row space-x-2 pt-4 md:ml-16"
                  style={{ fontFamily: "IBM Plex Mono,monospace" }}
                >
                  <button
                    className=" font-extrabold text-xl hover:bg-primary hover:text-primary-content rounded-box "
                    style={{
                      boxShadow: "-3px 5px #33332d",
                      padding: "0.6rem 1rem",
                      border: "3px solid",
                      fontWeight: "600",
                    }}
                  >
                    <Link href={feature.github}>
                      <a target="_blank" rel="noopener">
                        {" "}
                        GitHub repo
                      </a>
                    </Link>{" "}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectItems;
