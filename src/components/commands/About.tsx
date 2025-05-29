import {
  AboutWrapper,
  HighlightAlt,
  HighlightSpan,
} from "../styles/About.styled";

const About: React.FC = () => {
  return (
    <AboutWrapper data-testid="about">
      <p>
        Hi, my name is <HighlightSpan>Sui Qian</HighlightSpan>!
      </p>
      <p>
        I'm <HighlightAlt>a Technical Product Leader</HighlightAlt> with 9 years of experience,
        specializing in AI and IoT solutions.
      </p>
      <p>
        I am passionate about creating innovative products and <br />
        developing AI-driven solutions to solve real-world challenges.
      </p>
    </AboutWrapper>
  );
};

export default About;
