import Link from "next/link";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import MailIcon from "@mui/icons-material/Mail";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
const ContactCard = () => {
  return (
    <div className="bg-primary text-primary-content font-extrabold rounded-box max-w-md max-h-80 ">
      <div className="card-body flex flex-col px-0 pl-1 xl:px-8">
        <h2
          className="text-3xl font-extrabold pb-4"
          style={{ fontFamily: "IBM Plex Mono,monospace" }}
        >
          Contact me:
        </h2>
        <div className="flex flex-col justify-start space-y-2 sm:text-xl text-sm">
          {/* <FacebookIcon fontSize="large" /> */}
          <div className="flex flex-row justify-start text-center items-center space-x-2">
            <LinkedInIcon fontSize="large" />
            <Link href="https://www.linkedin.com/in/ahmedhassan1997/ ">
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
  );
};

export default ContactCard;
