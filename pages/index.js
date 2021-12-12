import Navbar from "../app/components/Navbar/Nav";
import SkillsComponent from "../app/components/Skills/SkillsSection";
import Profile from "../app/components/Profile/ProfileSection";
import ProjectsSection from "../app/components/Projects/ProjectsSection";
import Experiences from "../app/components/Experience/ExperienceSection";
import { connectToDatabase } from "../util/mongodb";
// import axios from "axios";
// import { server } from "../config";
// import { useEffect } from "react";
export default function Home(props) {
  // useEffect(() => {
  // });

  return (
    <div>
      <div>
        <Navbar
          navigation={[
            { name: "Profile", href: "#profile" },
            { name: "Skills", href: "#skills" },
            { name: "Experience", href: "#experience" },
            { name: "Projects", href: "#projects" },
          ]}
        />
        <div className="overflow-hidden">
          {/* <div dangerouslySetInnerHTML={{ __html: articleContent }} /> */}
          <Profile />
          <SkillsComponent skills={props.skills} />
          <Experiences education={props.education} careers={props.careers} />
          <ProjectsSection start={0} end={2} projects={props.projects} />
        </div>
      </div>
    </div>
  );
}
export async function getStaticProps(context) {
  const { db } = await connectToDatabase();
  const skills = await db.collection("skills").find().toArray();
  const education = await db.collection("education").find().toArray();
  const careers = await db.collection("careers").find().toArray();
  const projects = await db.collection("projects").find().toArray();

  return {
    props: {
      skills: JSON.parse(JSON.stringify(skills)),
      education: JSON.parse(JSON.stringify(education)),
      careers: JSON.parse(JSON.stringify(careers)),
      projects: JSON.parse(JSON.stringify(projects)),
    }, // will be passed to the page component as props
    revalidate: 1000, // In seconds
  };
}
