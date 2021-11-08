import Link from "next/link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ProjectItems from "./ProjectItems";

const Projects = (props) => {
  return (
    <div
      className="mx-auto mt-11 pt-20 text-base-200-content flex flex-col pb-8 text-base-content font-medium text-xl bg-base-200 transition duration-100 ease-linear md:min-h-screen"
      style={{ maxWidth: "1600px", fontFamily: "poppins" }}
      id="projects"
    >
      <div className="px-4 sm:px-6 lg:px-8 flex flex-col">
        <div className="lg:text-center">
          <p
            className=" mt-2 text-3xl leading-8 font-extrabold tracking-tight sm:text-6xl"
            style={{ fontFamily: "IBM Plex Mono,monospace" }}
          >
            Projects
          </p>
          <p className="mt-4 max-w-2xl text-xl lg:mx-auto font-bold text-primary">
            “You can do anything you set your mind to.”
          </p>
          <p className="mt-4 max-w-2xl text-xl lg:mx-auto font-semibold text-primary ">
            - Benjamin Franklin
          </p>
        </div>
        <div className="divider w-1/2 lg:mx-auto mr-auto"></div>

        <div className="mt-10 flex flex-col">
          <ProjectItems start={0} end={2} />

          <div className="flex flex-row ml-auto">
            <button
              className="font-extrabold text-xl hover:bg-primary hover:text-primary-content rounded-box xl:mx-20 mt-8 "
              style={{
                boxShadow: "-3px 5px #33332d",
                padding: "0.6rem 1rem",
                border: "3px solid",
                fontWeight: "600",
              }}
            >
              <Link href="/Projects" aria-label="Projects Page">
                <a aria-label="Projects Page">
                  See More <ArrowForwardIcon />
                </a>
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
