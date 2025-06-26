import { ReactElement } from "react";
import { FaBuildingColumns, FaGraduationCap, FaLaptopCode, FaLocationDot, FaSchool } from "react-icons/fa6";

export type JourneyContentType = {
  title: string;
  body: string;
  icon: ReactElement;
  bigTitle: string;
  bigBody: string;
  bigIcon: ReactElement;
}

export const JourneyContent: JourneyContentType[] = [
  {
    title: "1997",
    body: "Born and lived most of my life in Kottayam, Kerala",
    icon: <FaLocationDot fill="white" className="md:text-4xl text-2xl" />,
    bigTitle: 'Born in 1997',
    bigBody: "I was born in Kottayam, Kerala, India. I have lived here for most of my life. I have a family of 5, my parents and my younger sister and brother. I got my first comupter in 1999, an IBM machine running windows 98. I've always had a fascination with technology and computers, and spend most of school years trying to figure out how I could harness this fascination into a career.",
    bigIcon: <FaLocationDot fill="white" fontSize={64} />,
  },
  {
    title: "2016",
    body: "I went to School at Excelsior English School, Kottayam",
    icon: <FaSchool fill="white" className="md:text-4xl text-2xl" />,
    bigTitle: 'Passed out in 2016',
    bigBody: "I completed my 10th and 12th grades at Excelsior English School in Kottayam with a 9.5 GPA in 10th and a 93.5% score in 12th. My school life guided who I am now. The school has an equal emphasis on academics and extracurriculars. I participated in many quizzes, debates and Model United Nations in school. I was elected as sports captain in 11th and nominated to the position of head boy in 12th.",
    bigIcon: <FaSchool fill="white" fontSize={64} />,
  },
  {
    title: "2020",
    body: "Btech in CS and Engineering from MACE, Kerala",
    icon: <FaGraduationCap fill="white" className="md:text-4xl text-2xl" />,
    bigTitle: 'Graduated in 2020',
    bigBody: "I completed my BTech in Computer Science and Engineering with a CGPA of 7.85 from Mar Athanasius College of Engineering, Kothamangalam, Kerala. During my time in college, I was part of the IEEE Chapter, the Computer Society of India Chapter and the Developer Student Club Chapter. I was pivotal in organising MACE MUN and TEDxMACE. Apart from this, I was a volunteer in the Training and Placement Cell of the College helped organise various recruitment drives and training programs for the students.",
    bigIcon: <FaGraduationCap fill="white" fontSize={64} />,
  },
  {
    title: "2023",
    body: "Keyvalue Software Systems as associate software engineer",
    icon: <FaLaptopCode fill="white" className="md:text-4xl text-2xl" />,
    bigBody: 'I joined Keyvalue Software Systems as an Associate Software Engineer in 2020. Although most of my training was for React, I was onboarded onto a React Native Project. Through extensive self-learning and excellent mentoring, I was crafting full features within a month. Within the year, I was one of the go-to experts in the company for React Native-related queries, after Google, of course. I was entrusted with training the next batch of graduates who joined us in 2021 and 2022. But perhaps the favourite non-coding job I was given was being part of the 2023 recruitment process. ',
    bigTitle: 'Worked till 2023',
    bigIcon: <FaLaptopCode fill="white" fontSize={64} />,
  },
  {
    title: "2025",
    body: "MSc in Advanced Computer Science at the University of Hertfordshire",
    icon: <FaBuildingColumns fill="white" className="md:text-4xl text-2xl" />,
    bigBody: "I pursued my MSc in Advanced Computer Science from the University of Hertfordshire. I completed my course with an overall of 73.3%. My research dissertation was on version control for large binary files, which led to a deeper understanding of version control systems and how they can be optimized for specific use cases. The courses I picked allowed me to jump into the theoretical side of algorithms, software development methodologies, artificial intelligence and team management. While the academic side of computer science is fascinating and vast, I can't wait to get back on the software engineering horse.",
    bigTitle: 'Will graduate in 2025',
    bigIcon: <FaBuildingColumns fill="white" fontSize={64} />,
  },
];