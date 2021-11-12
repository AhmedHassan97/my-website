import Navbar from "../components/Navbar/Nav";
import SkillsComponent from "../components/Skills/SkillsSection";
import Profile from "../components/Profile/ProfileSection";
import ProjectsSection from "../components/Projects/ProjectsSection";
import Experiences from "../components/Experience/ExperienceSection";
export default function Home() {
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
        <Profile />
        <SkillsComponent />
        <Experiences />
        <ProjectsSection start={0} end={2} />
      </div>
    </div>
  );
}
