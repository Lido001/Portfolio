
import ibm from '../../assets/images/news_img/ibm.jpg';
import web3 from '../../assets/images/news_img/web3.jpg';
import cyber from '../../assets/images/news_img/cyber.png';
import ai from '../../assets/images/news_img/ai.jpg';
import web_design from '../../assets/images/DeWatermark.ai_1741530738264.png';
import web_development from '../../assets/images/web_development.png';
import responsive_design from '../../assets/images/Responsive_Design1.png';
import software_development from '../../assets/images/software_development.png';
import seo_optimisation from '../../assets/images/seo_optimisation.png';
import site_optimisation from '../../assets/images/site_optimisation.png';
import tamilloft from '../../assets/images/Screenshot 2025-02-11 213241.png';
import todo_App from "../../assets/images/Screenshot 2025-05-10 231750..png";
import portfolio from '../../assets/images/portfolio.png';
import dashboard from '../../assets/images/dashboard.png';
import html from '../../assets/images/skills_img/html.svg';
import css from '../../assets/images/skills_img/css.svg';
import bootstrap from '../../assets/images/skills_img/bootstrap.svg';
import javascript from '../../assets/images/skills_img/javascript.svg';
import tailwind from '../../assets/images/skills_img/tailwind.svg';
import materialui from '../../assets/images/skills_img/materialui.svg';
import python from '../../assets/images/skills_img/python.svg';
import figma from '../../assets/images/skills_img/figma.svg';
import typescript from '../../assets/images/skills_img/typescript.png';
import react from '../../assets/images/skills_img/react.svg';
import redux from '../../assets/images/skills_img/redux.svg';
import nodejs from '../../assets/images/skills_img/nodejs.svg';
import express from '../../assets/images/skills_img/express.png';
import mongodb from '../../assets/images/skills_img/mongodb.svg';
import vs_code from '../../assets/images/skills_img/vc_code.png';
import git from '../../assets/images/skills_img/git.svg';
import postman from '../../assets/images/skills_img/postman.png';
import github from '../../assets/images/skills_img/github.png';




interface WorkStage {
  education: {
    time: string;
    title: string;
    description: string;
  }[];
  experience: {
    time: string;
    title: string;
    location: string;
    description: string;
  }[];
};
interface Testimonials{
  comment: string;
  title: string;
  position: string; 
  rating: number;
}
interface Service{
  title: string;
  description: string; 
  link: string;
  image : string;
}
interface Project{
  title: string;
  description: string; 
  category: string;
  link: string;
  image: string
}
interface News{
  title: string;
  description: string;
  image: string;
  link: string;
}
interface Skills{
  image: string;
  title: string;
  category: string;
  link: string;
}
interface ReadMore{
  span: string;
}


const readmore: ReadMore [] = [
  {span: "Read More . . ."},
];

const workStages: WorkStage = {
  education: [
    { time: "2011-2017", title: "Little Flower Matriculation School", description: "Completed My High School" },
    { time: "2018-2020", title: "St.Mary Goretty Higher Secondary School", description: "Completed My Higher Secondary School " },
    { time: "2021-2025", title: "Cape Institute of Technology", description: "Completed My Bachelor's Degree" },
    { time: "2023-Now", title: "RexCoders Academy", description: "Gained experience in React and TS." },
  ],
  experience:[
    { time: "2022-2022", title: "Android App Development Intern,",location: "NSIC, Chennai.", description: "Gained experience in Flutter Development" },
    { time: "2024-2024", title: "Front-End development Intern,",location: "RexCoders Academy, Paalpannai.", description: "Gained Experience in FrontEnd Development" },
    { time: "2024-2025", title: "Full Stack Development",location: "RexCoders Academy, Paalpannai. ", description: "Gained Experience in Full Stack Development" },
  ],
};



const testimonials: Testimonials[] =[
  { comment: "Lido delivered an amazing web application for our business! The UI/UX is smooth, and the performance is outstanding. Highly recommend!", 
    title: "Emily R.",
    position: "Startup Founder",
    rating: 4.5,
  },
  { comment: "The portfolio website Lido built for me is sleek, modern, and exactly what I needed to showcase my work. Great attention to detail!", 
    title: "James D.",
    position: "Graphic Designer",
    rating: 3.0,
  },
  { comment: "Super impressed with the e-commerce website! The user experience is seamless, and the design is top-notch. Will definitely work with Lido again!", 
    title: " Sarah K.",
    position: "Online Store Owner",
    rating: 3.5,
  },
  { comment: "Lido’s creativity in branding is exceptional! The design he created truly represents our brand identity and resonates with our audience.", 
    title: "Mark T.",
    position: "Marketing Director",
    rating: 4.0,
  }, 
  { comment: "Lido built a high-performance React dashboard for our analytics. The interface is intuitive, and the functionalities are exactly what we needed!", 
    title: "Nathan P.",
    position: "Data Analyst",
    rating: 5.0,
  },             
               
];

const services: Service[] = [
  {
    title: "Web Design",
    description: "Web development is the most famous job in the world and it is very interesting...",
    link: "",
    image: web_design,   
  },
  {
    title: "Web Development",
    description: "Web development is the most famous job in the world and it is very interesting...",
    link: "", 
    image: web_development,  
  },
  {
    title: "Responsive Design",
    description: "Web development is the most famous job in the world and it is very interesting...",
    link: "",  
    image: responsive_design, 
  },
  {
    title: "Software Development",
    description: "Web development is the most famous job in the world and it is very interesting...",
    link: "", 
    image: software_development,  
  },
  {
    title: "SEO Optimization",
    description: "Web development is the most famous job in the world and it is very interesting...",
    link: "",
    image: seo_optimisation,   
  },
  {
    title: "Site Optimization",
    description: "Web development is the most famous job in the world and it is very interesting...",
    link: "",
    image: site_optimisation,
  },
];

const projects: Project [] = [
  { title: "To-do APP", description: "A simple to-do list application built with Next JS.", link: "https://advanced-todo-beige.vercel.app/", category: "Web Apps", image: todo_App, },
  { title: "Portfolio Website", description: "Personal portfolio showcasing projects.", link: "https://portfolio-ebon-three-57.vercel.app/", category: "Web Apps" ,image: portfolio, },
  // { title: "E-commerce Site", description: "An online shopping platform using React.", category: "Web Apps" ,image: tamilloft, },
  // { title: "Mobile UI Design", description: "A sleek and modern UI/UX design.", category: "UI/UX Designs" ,image: tamilloft, },
  { title: "Brand Identity", description: "Creative branding project for a startup.", link: "https://client-website-olive.vercel.app/", category: "Branding",image: tamilloft, },
  { title: "React Dashboard", description: "A web app built with React and TypeScript.", category: "Web Apps", link: "https://news-website-pied-iota.vercel.app/", image: dashboard, },

];


const news: News[] = [
  {title: "Artificial Intelligence with the power of IBM Watson.", description: "Discover the latest advancements in AI technology and how IBM Watson is revolutionizing industries with its powerful capabilities. Stay updated with our blog for more insights and news.",
     image: ibm,link: "https://www.ibm.com/products/watsonx-ai",},
  {
    title: "The Rise of Web3: Decentralization and the Future of the Internet",
    description:
      "Web3 is redefining the internet with blockchain-based solutions, decentralized finance (DeFi), and NFTs. Learn how this transformation is empowering users and reshaping online experiences.",
      image: web3,
      link: "https://community.nasscom.in/communities/web-30/web-30-decentralized-and-democratized-future-internet",
  },
  {
    title: "Cybersecurity Trends in 2025: Staying Ahead of Threats",
    description:
      "With increasing cyber threats, organizations are adopting AI-driven security measures. Read about the latest cybersecurity innovations and how to protect your data in the digital era.",
      image: cyber,
      link: "https://engage.checkpoint.com/security-report-2025?utm_campaign=dg-cm_ps_25q1_ww_all_mix-gen-inf-cyber-security-report-2025-or_en-gsem&utm_source=google-dg&utm_medium=cpc&utm_term=cybersecurity%20trends%202025&utm_content=cs_trends&gad_source=1&gclid=Cj0KCQjwytS-BhCKARIsAMGJyzoAoHenfA4y_oomXfm5MAfhbxCVOaVXssy-tw6y4V3k2nkK1VZYGKUaAmhtEALw_wcB",
  },
  {
    title: "The Evolution of AI in Content Creation",
    description:
      "From AI-generated articles to deepfake videos, artificial intelligence is reshaping content creation. Discover how AI tools are revolutionizing journalism, marketing, and entertainment.",
      image: ai,
      link: "https://aicontentfy.com/en/blog/evolution-of-ai-generated-content",
  },
];

const skills : Skills[] = [
  {image: html, title: "HTML 5", link:"https://en.wikipedia.org/wiki/HTML5", category: "Front End",},
  {image: css, title: "CSS", link: "https://en.wikipedia.org/wiki/CSS", category: "Front End",},
  {image: bootstrap, title: "Bootstrap 5", link: "https://getbootstrap.com/docs/5.0/getting-started/introduction/", category: "Front End",},
  {image: tailwind, title: "Tailwind CSS", link: "https://tailwindcss.com/docs/installation/using-vite", category: "Front End",},
  {image: materialui, title: "Material UI", link: "https://mui.com/material-ui/getting-started/", category: "Front End",},
  {image: figma, title: "Figma", link: "https://www.figma.com/", category: "Front End",},
  {image: javascript, title: "JavaScript", link: "https://www.tpointtech.com/javascript-tutorial", category: "Front End",},
  {image: typescript, title: "TypeScript", link: "https://www.typescriptlang.org/", category: "Front End",},
  {image: react, title: "React JS", link: "https://react.dev/learn", category: "Front End",},
  {image: redux, title: "Redux", link: "https://redux.js.org/", category: "Front End",},
  {image: nodejs, title: "Node JS", link: "https://nodejs.org/en", category: "Back End",},
  {image: mongodb, title: "MongoDb", link: "https://www.mongodb.com/", category: "Back End",},
  {image: express, title: "Express JS", link: "https://expressjs.com/", category: "Back End",},
  {image: vs_code, title: "Visual Studio", link: "https://code.visualstudio.com/", category: "Front End",},
  {image: github, title: "GitHub", link: "https://docs.github.com/en/get-started", category: "Back End",},
  {image: git, title: "Git", link: "https://git-scm.com/", category: "Back End",},
  {image: postman, title: "Postman", link: "https://www.postman.com/", category: "Back End",},
  {image: python, title: "Python", link: "https://www.python.org/", category: "Back End",},
] 




const Skills = {
    
    programmingSkills: [
      { skill: "HTML", percentage: 100 },
      { skill: "CSS", percentage: 90 },
      { skill: "Bootstrap", percentage: 95 },
      { skill: "JavaScript", percentage: 75 },
      { skill: "Tailwind CSS", percentage: 80 },
      { skill: "React", percentage: 60 },
      { skill: "Redux", percentage: 40 },
    ],
    
    languageSkills: [
      { language: "Tamil", percentage: 100 },
      { language: "English", percentage: 90 },
      { language: "Malayalam", percentage: 50},
    ],

    interests: [
        { technologies: "Make UI/UX Design"},
        { technologies: "Create Mobile App"},
        { technologies: "Site Optimization"},
        { technologies: "Custom Website"},
        { technologies: "Learn Ecommerce"},
    ]


  };
  
  export { Skills, workStages, testimonials, services, projects, readmore, news, skills};
 
  