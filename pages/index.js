import Navbar from "../components/Navbar/Nav";
import SkillsComponent from "../components/Skills";
import Profile from "../components/Profile";
import Projects from "../components/Projects/Projects";
import Experiences from "../components/Experience";
export default function Home() {
  return (
    <div>
      <div>
        <Navbar />
        <Profile />
        <SkillsComponent />
        <Experiences />
        <Projects start={0} end={2} />
      </div>
    </div>
  );
}
