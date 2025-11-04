import {
  Python,
  JAVA,
  JMETER,
  SQL,
  MATLAB,
  TEST_ENGINEER,
  CPLUS,
  computer,
  EEG,
  TK_PROJECT,
  neuro,
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Test Engineer",
    icon: web,
  },
  {
    title: "Software Developer",
    icon: backend,
  },
  {
    title: "Data Analyst",
    icon: mobile,
  },
  {
    title: "Neuroscience Researcher",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Python",
    icon: Python,
  },
  {
    name: "Java",
    icon: JAVA,
  },
  {
    name: "JMeter",
    icon: JMETER,
  },
  {
    name: "SQL",
    icon: SQL,
  },
  {
    name: "MATLAB",
    icon: MATLAB,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: tailwind,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "Figma",
    icon: figma,
  },
  {
    name: "C++",
    icon: CPLUS,
  },
];

const experiences = [
  {
    title: "Test Engineer",
    company_name: "Beijing Langwei - Taikang Group",
    icon: TEST_ENGINEER,
    iconBg: "#383E56",
    date: "Jun 2024 - Present",
    points: [
      "Full-Chain Automated Testing: Design and execute 17 end-to-end test cases covering email sending/receiving → intelligent sorting → task generation/flow, ensuring stable and accurate task allocation.",
      "Data-Driven Testing: Implement data-driven testing with CSV parameterization and Python scripts, enhancing test data diversity/coverage while reducing manual intervention.",
      "Deep Database Verification: Verify interface-database data consistency through real-time comparison, boosting system reliability and data integrity.",
      "Application of Advanced Testing Tools: Leverage JMeter's advanced features (JSON extraction, Groovy scripting, dynamic assertions) to improve performance testing and interface verification precision.",
      "Automated Operation & Data Analysis: Develop Python scripts for batch data repair, analysis and report generation, enhancing automated operation capabilities.",
      "Performance Testing & Monitoring: Establish interface performance benchmarks, conduct concurrent stress testing and response time tracking to ensure high-concurrency stability.",
      "Cross-Departmental Collaboration: Collaborate closely with product, development and operation teams to propose process optimization suggestions.",
    ],
  },
  {
    title: "MSc in Computational Neuroscience",
    company_name: "University of Birmingham",
    icon: neuro,
    iconBg: "#E6DEDD",
    date: "Sep 2022 - Dec 2023",
    points: [
      "Courses: Methods & Applications of Cognitive Neuroscience, Mind, Brain & Models, Computational Methods, Electrophysiological Methods in Cognitive Neuroscience.",
      "Specialized in FFT, MNE, Evoked Potentials, Spectral Analysis, Source Modeling.",
      "Conducted research on brain attention control mechanisms in individuals with high autistic traits.",
      "Built Attentional Drift Diffusion Model (ADDM) via MATLAB and Bayesian DE-MCMC.",
    ],
  },
  {
    title: "BSc in Computer Science",
    company_name: "Xi'an University of Architecture",
    icon: computer,
    iconBg: "#383E56",
    date: "Sep 2018 - Jul 2022",
    points: [
      "Courses: Fundamentals of JAVA Programming, Python, Database Systems, C++ Software Development, Web Application Development, Agile Development.",
      "Participated in Interactive Music Therapy Device project based on BCI and Machine Learning.",
      "Developed skills in software development, testing, and data analysis.",
      "Graduated with a strong foundation in computer science and programming.",
    ],
  },
];
const testimonials = [

//const testimonials = [
//   {
//     testimonial:
//       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
//     name: "Sara Lee",
//     designation: "CFO",
//     company: "Acme Co",
//     image: "https://randomuser.me/api/portraits/women/4.jpg",
//   },
//   {
//     testimonial:
//       "I've never met a web developer who truly cares about their clients' success like Rick does.",
//     name: "Chris Brown",
//     designation: "COO",
//     company: "DEF Corp",
//     image: "https://randomuser.me/api/portraits/men/5.jpg",
//   },
//   {
//     testimonial:
//       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
//     name: "Lisa Wang",
//     designation: "CTO",
//     company: "456 Enterprises",
//     image: "https://randomuser.me/api/portraits/women/6.jpg",
//   },
// ];

const projects = [
  {
    name: "Brain Attention Control Mechanisms Research",
    description:
      "Research project investigating attention control mechanisms in individuals with high autistic traits. Used visual search T-task paradigm and built Attentional Drift Diffusion Model (ADDM) via MATLAB and Bayesian DE-MCMC, fitting reaction times to separate attention selection and stimulus recognition features.",
    tags: [
      {
        name: "matlab",
        color: "blue-text-gradient",
      },
      {
        name: "bayesian-modeling",
        color: "green-text-gradient",
      },
      {
        name: "neuroscience",
        color: "pink-text-gradient",
      },
    ],
    image: neuro
  // source_code_link: "https://github.com/",
  },
  {
    name: "Interactive Music Therapy Device",
    description:
      "BCI-based music therapy system using OpenBCI to collect EEG data. Designed frequency-domain feature-based closed-loop control for dynamic music parameter adjustment. Utilized Raspberry Pi for real-time interaction between physiological signals and music output.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "machine-learning",
        color: "green-text-gradient",
      },
      {
        name: "bci",
        color: "pink-text-gradient",
      },
    ],
    image: EEG
  //  source_code_link: "https://github.com/",
  },
  {
    name: "Email Task Sorting Platform Testing",
    description:
      "Comprehensive automated testing platform for Taikang Group's email task sorting system. Implemented full-chain automated testing with 17 end-to-end test cases, data-driven testing with CSV parameterization, and performance testing using JMeter for high-concurrency stability.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "jmeter",
        color: "green-text-gradient",
      },
      {
        name: "automated-testing",
        color: "pink-text-gradient",
      },
    ],
    image: TK_PROJECT
  //  source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
