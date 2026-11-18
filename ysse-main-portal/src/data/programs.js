// Sample program data for the YSSE Main Portal (frontend demo content)
import leadershipImg from "../assets/images/program-leadership.jpg";
import techImg from "../assets/images/program-tech.jpg";
import entrepreneurshipImg from "../assets/images/program-entrepreneurship.jpg";
import careerImg from "../assets/images/program-career.jpg";
import communityImg from "../assets/images/program-community.jpg";
import trainingImg from "../assets/images/program-training.jpg";

export const programs = [
  {
    id: 1,
    title: "Youth Leadership Bootcamp",
    category: "Leadership",
    duration: "4 Weeks",
    description:
      "A hands-on program that builds confidence, communication, and decision-making skills in young leaders.",
    fullDescription:
      "The Youth Leadership Bootcamp is an intensive, mentor-guided program designed to help young people discover and strengthen their leadership potential. Participants work through real-world case studies, team challenges, and public-speaking exercises, culminating in a community leadership project that they design and pitch themselves.",
    image: leadershipImg,
  },
  {
    id: 2,
    title: "Digital Skills & Tech Innovation",
    category: "Technology & Innovation",
    duration: "6 Weeks",
    description:
      "Learn the fundamentals of web development, design thinking, and digital tools used in modern workplaces.",
    fullDescription:
      "This program introduces participants to essential digital skills including basic web development, UI/UX fundamentals, and productivity tools. Through weekly workshops and a final capstone project, learners build a portfolio piece they can showcase to future employers or universities.",
    image: techImg,
  },
  {
    id: 3,
    title: "Entrepreneurship Accelerator",
    category: "Entrepreneurship",
    duration: "8 Weeks",
    description:
      "Turn your business idea into a working plan with mentorship, workshops, and a final pitch day.",
    fullDescription:
      "The Entrepreneurship Accelerator guides aspiring founders from idea validation to a polished pitch deck. Weekly sessions cover market research, budgeting, branding, and storytelling, with one-on-one mentorship from experienced entrepreneurs throughout the program.",
    image: entrepreneurshipImg,
  },
  {
    id: 4,
    title: "Career Readiness Workshop Series",
    category: "Career Development",
    duration: "3 Weeks",
    description:
      "Resume building, interview preparation, and professional networking skills for young job seekers.",
    fullDescription:
      "This workshop series equips participants with practical career tools: writing a strong resume and cover letter, mastering interview techniques, and building a professional network both online and offline. The program closes with mock interviews and personalized feedback.",
    image: careerImg,
  },
  {
    id: 5,
    title: "Community Volunteer Initiative",
    category: "Community Engagement",
    duration: "Ongoing",
    description:
      "Join local outreach projects focused on education, environment, and social welfare.",
    fullDescription:
      "The Community Volunteer Initiative connects young people with ongoing outreach projects across education support, environmental clean-up drives, and social welfare campaigns. Volunteers gain teamwork experience while making a measurable difference in their communities.",
    image: communityImg,
  },
  {
    id: 6,
    title: "Professional Skills Training",
    category: "Training & Development",
    duration: "5 Weeks",
    description:
      "Strengthen communication, teamwork, time management, and problem-solving skills for the workplace.",
    fullDescription:
      "Professional Skills Training focuses on the soft skills employers value most: effective communication, collaborative teamwork, time management, and structured problem-solving. The program blends interactive workshops with group exercises and self-assessment tools.",
    image: trainingImg,
  },
];
