import Navbar from "../components/Navbar/Nav";
import SkillsComponent from "../components/Skills";
import React, { useRef } from "react";
import { useIntersectionObserver } from "usehooks-ts";
import Profile from "../components/Profile";

export default function Home() {
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  };

  const ref = useRef(null);
  const entry = useIntersectionObserver(ref, options);
  const isProfileVisible = !!entry?.isIntersecting;

  const refAbilities = useRef(null);
  const entryAbilities = useIntersectionObserver(refAbilities, options);
  const isAbilitiesVisible = !!entryAbilities?.isIntersecting;

  const refExperience = useRef(null);
  const entryExperience = useIntersectionObserver(refExperience, options);
  const isExperienceVisible = !!entryExperience?.isIntersecting;

  const refProjects = useRef(null);
  const entryProjects = useIntersectionObserver(refProjects, options);
  const isProjectsVisible = !!entryProjects?.isIntersecting;

  return (
    <div
      style={{ fontFamily: "poppins" }}
      className="text-base-content font-medium text-2xl "
    >
      <div className="bg-base-100 transition duration-100 ease-linear w-full">
        <Navbar
          isProfileVisible={isProfileVisible}
          isAbilitiesVisible={isAbilitiesVisible}
          isExperienceVisible={isExperienceVisible}
          isProjectsVisible={isProjectsVisible}
        />
        <div ref={ref}>
          <Profile id="abilities" />
        </div>

        <div
          className="bg-base-200 transition duration-100 ease-linear"
          ref={refAbilities}
        >
          <SkillsComponent />
        </div>

        {/* Experience */}
        <div
          className="bg-base-100 transition duration-100 ease-linear"
          ref={refExperience}
        >
          <SkillsComponent />
        </div>

        {/* Projects */}
        <div
          className="bg-base-200 transition duration-100 ease-linear"
          ref={refProjects}
        >
          <SkillsComponent />
        </div>
      </div>
    </div>
  );
}
