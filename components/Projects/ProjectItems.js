import {
  MapIcon,
  MusicNoteIcon,
  GlobeAltIcon,
  ShoppingCartIcon,
  PaperClipIcon,
} from "@heroicons/react/outline";
import Link from "next/link";

const Projects = [
  {
    name: "Tokei",
    stack: "React, Redux, Next.js, NodeJS, Apollo, Graphql, Postgres",
    github: "https://github.com/refolded",
    link: null,
    description:
      "Its an open-source enterprise-ready project management platform that allows teams to stay productive by managing tasks, documentation and time tracking following any project management methodology.",
    icon: PaperClipIcon,
  },
  {
    name: "Music Application",
    stack: "React, redux, NodeJS, Mongo and Express",
    github: "https://github.com/Project-X9/FrontEnd",
    link: null,
    description:
      "Its an audio streaming app, that allow users to create account and enjoy music for free with features like shuffle or add to queue. Also it allow users to make their own playlists. And if you have a talent, you can signup as artist and upload your music",
    icon: MusicNoteIcon,
  },
  {
    name: "Maps Notifications",
    stack: "React, Mongodb, Next-js",
    link: null,
    github: "https://github.com/AhmedHassan97/casita-task",
    description:
      "People after their visit to a new country, they always leave a comment on their visit mentioning the name of the country. This application shows this comments over every country location",
    icon: MapIcon,
  },
  {
    name: "Football League",
    stack: "React, Redux, php, Mysql",
    link: null,
    github: "https://github.com/AhmedHassan97/Egyption-premiere-League",
    description:
      "Its a football league website where users can reserve tickets, see matches details. Also managers could add new matches or edit matches that already scheduled. Also admins can approve or disapprove new accounts and remove users that already exists",
    icon: GlobeAltIcon,
  },
  {
    name: "Shopping app",
    stack: "React Native, Redux",
    link: null,
    github: "https://github.com/AhmedHassan97/Mimo_Notes",
    description:
      "It si a Clothing app, it views the products of a store, with a category filter to chose between men, womans, children, etc. fetching the data from an api where it supports all the information needed",
    icon: ShoppingCartIcon,
  },
];
const ProjectItems = (props) => {
  return (
    <div
      style={{ fontFamily: "poppins" }}
      className="mx-auto text-base-200-content flex flex-col text-base-content font-medium text-xl transition duration-100 ease-linear "
    >
      <dl className="space-y-10 md:space-y-0 lg:grid lg:grid-cols-1 md:gap-x-8 md:gap-y-10 xl:mx-20 ">
        {Projects.slice(props.start, props.end).map((feature) => (
          <div
            key={feature.name}
            className="space-y-4 w-full border-r-2 border-l-8 border-b-8 border-t-2 border-base-content p-8 rounded-box"
          >
            <dt className="flex-row flex">
              <div className="h-12 w-12 rounded-md">
                <feature.icon />
              </div>
              <div className="flex flex-col">
                <p
                  className="ml-2 text-3xl leading-6 font-extrabold my-auto"
                  style={{ fontFamily: "IBM Plex Mono,monospace" }}
                >
                  {feature.name}
                </p>
                <p className="ml-2 text-primary font-bold">{feature.stack}</p>
              </div>
            </dt>

            <dd className="mt-2 ml-16 space-x-2">
              <p className="font-bold">{feature.description}</p>
            </dd>

            <div
              className="flex flex-row space-x-2 pt-4 ml-16"
              style={{ fontFamily: "IBM Plex Mono,monospace" }}
            >
              <button
                className=" font-extrabold text-xl hover:bg-primary hover:text-primary-content rounded-box"
                style={{
                  boxShadow: "-3px 5px #33332d",
                  padding: "0.6rem 1rem",
                  border: "3px solid",
                  fontWeight: "600",
                }}
              >
                <Link href={feature.github}>
                  <a target="_blank"> GitHub repo</a>
                </Link>{" "}
              </button>

              {/* <button
                    className="font-extrabold text-xl hover:bg-primary hover:text-primary-content rounded-box"
                    style={{
                      boxShadow: "-3px 5px #33332d",
                      padding: "0.6rem 1rem",
                      border: "3px solid",
                      fontWeight: "600",
                    }}
                  >
                    website{" "}
                  </button> */}
            </div>
          </div>
        ))}
      </dl>
    </div>
  );
};

export default ProjectItems;
