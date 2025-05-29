import { useContext, useEffect } from "react";
import {
  checkRedirect,
  getCurrentCmdArry,
  isArgInvalid,
} from "../../utils/funcs";
import {
  ProjectContainer,
  ProjectDesc,
  ProjectsIntro,
  ProjectTitle,
} from "../styles/Projects.styled";
import { termContext } from "../Terminal";
import Usage from "../Usage";

const Projects: React.FC = () => {
  const { arg, history, rerender } = useContext(termContext);

  /* ===== get current command ===== */
  const currentCommand = getCurrentCmdArry(history);

  /* ===== check current command is redirect ===== */
  useEffect(() => {
    if (checkRedirect(rerender, currentCommand, "projects")) {
      projects.forEach(({ id, url }) => {
        id === parseInt(arg[1]) && window.open(url, "_blank");
      });
    }
  }, [arg, rerender, currentCommand]);

  /* ===== check arg is valid ===== */
  const checkArg = () =>
    isArgInvalid(arg, "go", ["1", "2", "3", "4"]) ? (
      <Usage cmd="projects" />
    ) : null;

  return arg.length > 0 || arg.length > 2 ? (
    checkArg()
  ) : (
    <div data-testid="projects">
      <ProjectsIntro>
        Here are some of my key projects and products <br />
        that showcase my expertise in AI and IoT solutions
      </ProjectsIntro>
      {projects.map(({ id, title, desc }) => (
        <ProjectContainer key={id}>
          <ProjectTitle>{`${id}. ${title}`}</ProjectTitle>
          <ProjectDesc>{desc}</ProjectDesc>
        </ProjectContainer>
      ))}
      <Usage cmd="projects" marginY />
    </div>
  );
};

const projects = [
  {
    id: 1,
    title: "Car Intelligent Cockpit Banma AliOS",
    desc: "AI Voice Assistant for in-vehicle office work and traffic violation identification using visual perception.",
    url: "https://jaysean1.github.io",
  },
  {
    id: 2,
    title: "AI-Hybrid Service Desk",
    desc: "Crowdsourcing platform providing employment for 110,000+ disabled people, processing 200K daily consultations.",
    url: "https://qiansui.notion.site",
  },
  {
    id: 3,
    title: "Warehouse Video Intelligent Inspection Solution",
    desc: "IoT solution for e-commerce logistics, sold 50,000+ units, saved $24M annually with technology patent.",
    url: "https://jaysean1.github.io",
  },
  {
    id: 4,
    title: "In-Vehicle Citylife Service Cloud Application",
    desc: "Cloud application covering 200,000 in-vehicle devices with 10% weekly active user rate.",
    url: "https://qiansui.notion.site",
  },
];

export default Projects;
