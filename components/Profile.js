import Image from "next/image";
import { Transition } from "@headlessui/react";
import { Fragment } from "react";
import Link from "next/link";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import MailIcon from "@mui/icons-material/Mail";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";

const Profile = () => {
  return (
    <Transition
      as={Fragment}
      show={true}
      enter="transform transition duration-500"
      enterFrom="opacity-0 rotate-[-120deg] scale-50"
      enterTo="opacity-100 rotate-0 scale-100"
      leave="transform duration-500 transition ease-in-out"
      leaveFrom="opacity-100 rotate-0 scale-100 "
      leaveTo="opacity-0 scale-95"
    >
      <div
        className="md:mt-36 px-2 lg:px-8 flex xl:flex-row flex-col justify-between mx-auto md:space-x-4 space-x-0 md:pb-0 pb-8"
        style={{ maxWidth: "1600px", minHeight: "100vh", maxHeight: "100vh" }}
        id="profile"
      >
        <div className="flex flex-col max-w-4xl">
          {/* Tittle */}
          <div className="text-primary flex flex-col xl:flex-row text-justify">
            <h1
              className="mb-5 text-7xl font-extrabold  "
              style={{ fontFamily: "Ubuntu Mono" }}
            >
              HY,&nbsp;I am Ahmed Hassan{" "}
            </h1>
            <h1
              className="mb-5 text-7xl font-extrabold "
              style={{ fontFamily: "Ubuntu Mono" }}
            >
              {" "}
            </h1>
          </div>
          {/* Body */}
          <div>
            <p className="pb-3">//ABOUT</p>
          </div>
          <div>
            <p
              className="mb-5 text-base-content font-bold text-justify leading-8"
              style={{ fontFamily: "poppins" }}
            >
              I am a MERN stack developer with a proven track record of
              designing and implementing innovative user-centric websites. I
              have been working in the field for the past four years developing
              complex applications in Web Development.
            </p>
          </div>
          {/* Contact */}
        </div>

        <div className="bg-primary text-primary-content font-extrabold rounded-box max-w-md max-h-80">
          <div className="card-body flex flex-col ">
            <h2
              className="text-3xl font-extrabold pb-4"
              style={{ fontFamily: "Ubuntu Mono" }}
            >
              Contact me:
            </h2>
            <div className="flex flex-col justify-start space-y-2 text-xl">
              {/* <FacebookIcon fontSize="large" /> */}
              <div className="flex flex-row justify-start text-center items-center space-x-2">
                <LinkedInIcon fontSize="large" />
                <Link href="https://www.linkedin.com/in/ahmed-hassan-509893190/ ">
                  <a className="link link-hover text-primary-content">
                    /ahmed-hassan
                  </a>
                </Link>
              </div>
              <div className="flex flex-row justify-start text-center items-center space-x-2">
                <GitHubIcon fontSize="large" />
                <Link href="https://github.com/AhmedHassan97 ">
                  <a className="link link-hover text-primary-content">
                    /Ahmedhassan97
                  </a>
                </Link>
              </div>
              <div className="flex flex-row justify-start text-center items-center space-x-2">
                <MailIcon fontSize="large" />
                <Link href="mailto:ahmedhassan97.dev@gmail.com">
                  <a className="link link-hover text-primary-content">
                    /ahmedhassan97.dev@gmail.com
                  </a>
                </Link>
              </div>

              <div className="flex flex-row justify-start text-center items-center space-x-2 ">
                <ContactPhoneIcon fontSize="large" />
                <Link href="tel:+201102040566 ">
                  <a className="link link-hover text-primary-content tracking-widest font-extrabold">
                    /01102040566
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  );
};

export default Profile;