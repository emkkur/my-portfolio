import { ReactElement } from "react";
import { FaBuildingColumns, FaGraduationCap, FaLaptopCode, FaLocationDot, FaSchool } from "react-icons/fa6";

export type Page3ContentType = {
  title: string;
  body: string;
  icon: ReactElement;
  bigTitle: string;
  bigBody: string;
  bigIcon: ReactElement;
}

export const Page3Content: Page3ContentType[] = [
  {
    title: "1997",
    body: "Born and lived most of my life in Kottayam, Kerala",
    icon: <FaLocationDot fill="white" fontSize={32} />,
    bigTitle: '1997',
    bigBody: "I was born in Kottayam, Kerala, India. I have lived here for most of my life. I have a family of 5, my parents and my younger sister and brother. I got my first comupter in 1999, an IBM machine running windows 98. I've always had a fascination with technology and computers, and spend most of school years trying to figure out how I could harness this fascination into a career.",
    bigIcon: <FaLocationDot fill="white" fontSize={64} />,
  },
  {
    title: "2016",
    body: "I went to School at Excelsior English School, Kottayam",
    icon: <FaSchool fill="white" fontSize={32} />,
    bigTitle: '2002-2016',
    bigBody: "I completed my 10th and 12th grades at Excelsior English School in Kottayam with a 9.5 GPA in 10th and a 93.5% score in 12th. My school life guided who I am now. The school has an equal emphasis on academics and extracurriculars. I participated in many quizzes, debates and Model United Nations in school. I was elected as sports captain in 11th and nominated to the position of head boy in 12th.",
    bigIcon: <FaSchool fill="white" fontSize={64} />,
  },
  {
    title: "2020",
    body: "Btech in CS and Engineering from MACE, Kerala",
    icon: <FaGraduationCap fill="white" fontSize={32} />,
    bigTitle: '2016-2020',
    bigBody: "I completed my BTech in Computer Science and Engineering with a CGPA of 7.85 from Mar Athanasius College of Engineering, Kothamangalam, Kerala. During my time in college, I was part of the IEEE Chapter, the Computer Society of India Chapter and the Developer Student Club Chapter. I was pivotal in organising MACE MUN and TEDxMACE. Apart from this, I was a volunteer in the Training and Placement Cell of the College helped organise various recruitment drives and training programs for the students.",
    bigIcon: <FaGraduationCap fill="white" fontSize={64} />,
  },
  {
    title: "2023",
    body: "Keyvalue Software Systems as associate software engineer",
    icon: <FaLaptopCode fill="white" fontSize={32} />,
    bigBody: 'I joined Keyvalue Software Systems as an Associate Software Engineer. I was part of the team that developed the company\'s flagship product, a CRM software for small and medium businesses. I was responsible for developing the front end of the application using React and Redux. I also worked on the backend of the application using Node.js and Express. I was also responsible for writing unit tests for the application using Jest and Enzyme. I was also responsible for writing end-to-end tests for the application using Cypress.',
    bigTitle: '2020-2023',
    bigIcon: <FaLaptopCode fill="white" fontSize={64} />,
  },
  {
    title: "2025",
    body: "MSc in Advanced Computer Science at the University of Hertfordshire",
    icon: <FaBuildingColumns fill="white" fontSize={32} />,
    bigBody: "I am pursuing my MSc in Advanced Computer Science from the University of Hertfordshire. I have completed my first semester with a 4.37 GPA as of July 2024. Returning to classrooms after working for three years was an experience I could not compare to anything before. I could apply the concepts taught in class, and being part of a master's program meant a lot to my coursemates were well-versed in these concepts. The course demands you to perform at a master's level, which is a challenge I welcome.",
    bigTitle: '2023-2025',
    bigIcon: <FaBuildingColumns fill="white" fontSize={64} />,
  },
];