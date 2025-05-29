import { EduIntro, EduList } from "../styles/Education.styled";
import { Wrapper } from "../styles/Output.styled";

const Education: React.FC = () => {
  return (
    <Wrapper data-testid="education">
      <EduIntro>Here is my education background!</EduIntro>
      {eduBg.map(({ title, desc }) => (
        <EduList key={title}>
          <div className="title">{title}</div>
          <div className="desc">{desc}</div>
        </EduList>
      ))}
    </Wrapper>
  );
};

const eduBg = [
  {
    title: "Master of Applied Economics",
    desc: "Zhejiang University of Technology | Sep 2012 - Apr 2015",
  },
  {
    title: "Bachelor's Degree in International Economics and Trade",
    desc: "Zhejiang University of Technology Zhijiang College | Sep 2008 - Sep 2012",
  },
];

export default Education;
