import Header from "../Header&Layout/Header";
import Layout from "../Header&Layout/Layout";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

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
          {props.skills.map((feature) => {
            return (
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
                      <div dangerouslySetInnerHTML={{ __html: feature.icon }} />
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
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default SkillsComponent;
