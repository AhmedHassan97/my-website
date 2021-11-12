import ProjectItems from "../../components/Projects/ProjectItems";
import useTypingEffect from "use-typing-effect";
import Navbar from "../../components/Navbar/Nav";
const ProjectsPage = () => {
  const heading = useTypingEffect(
    [
      "Every project is an opportunity to learn, to figure out problems and challenges, to invent and reinvent.",
    ],
    {
      loop: false,
      playbackRate: 0.75,
    }
  );

  return (
    <div className="mx-auto w-screen">
      <Navbar />

      <div
        className="hero min-h-screen bg-fixed"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80")`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="text-center hero-content text-neutral-content">
          <div className="max-w-2xl">
            <h1
              className="mb-5 xl:text-8xl text-6xl font-bold"
              style={{ fontFamily: "IBM Plex Mono,monospace" }}
            >
              Projects
            </h1>
            <p className="mb-5 text-2xl  font-bold w-full italic">{heading}</p>
          </div>
        </div>
      </div>
      <div className="my-20 mx-4">
        <ProjectItems start={0} end={-1} />
      </div>
    </div>
  );
};

export default ProjectsPage;
