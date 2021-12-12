import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ProjectItems from "./ProjectItems";
import Link from "next/link";
import Header from "../Header&Layout/Header";
import Layout from "../Header&Layout/Layout";

const Projects = (props) => {
  return (
    <Layout sectionId="projects" backgroundColor="bg-base-200">
      <Header
        sectionName="Projects"
        quote="“You can do anything you set your mind to.”"
        author="- Benjamin Franklin"
      />
      <div className="divider w-1/2 lg:mx-auto mr-auto"></div>

      <div className="mt-10 flex flex-col">
        <ProjectItems start={0} end={2} projects={props.projects} />

        <div className="flex flex-row ml-auto">
          <Link href="/projects" aria-label="Projects Page">
            <a>
              <button
                className="font-extrabold text-xl hover:bg-primary hover:text-primary-content rounded-box xl:mx-20 mt-8"
                style={{
                  boxShadow: "-3px 5px #33332d",
                  padding: "0.6rem 1rem",
                  border: "3px solid",
                  fontWeight: "600",
                }}
              >
                See More Projects <ArrowForwardIcon />
              </button>
            </a>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Projects;
