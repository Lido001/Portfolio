
import img from '../../assets/images/annie-spratt-MChSQHxGZrQ-unsplash.jpg';
import web_design from '../../assets/images/DeWatermark.ai_1741530738264.png';
import web_development from '../../assets/images/web_development.png';
import responsive_design from '../../assets/images/Responsive_Design1.png';
import software_development from '../../assets/images/software_development.png';
import seo_optimisation from '../../assets/images/seo_optimisation.png';
import site_optimisation from '../../assets/images/site_optimisation.png';
import tamilloft from '../../assets/images/Screenshot 2025-02-11 213241.png';
import portfolio from '../../assets/images/portfolio.png';
import dashboard from '../../assets/images/dashboard.png';




interface WorkStage {
  time: string;
  title: string;
  description: string;
}
interface Testimonials{
  comment: string;
  title: string;
  position: string; 
  rating: number;
}
interface Service{
  title: string;
  description: string; 
  image : string;
}
interface Project{
  title: string;
  description: string; 
  category: string;
  image: string
}
interface News{
  title: string;
  description: string;
  image: string;
}
interface ReadMore{
  span: string;
}


const readmore: ReadMore [] = [
  {span: "Read More . . ."},
];

const workStages: WorkStage[] = [
  { time: "2020-2024", title: "Cape Institute of Technology", description: "Bachelor's Degree" },
  { time: "2023-2024", title: "RexCoders Academy", description: "Gained experience in React and TS." },
  { time: "2014-2016", title: "Oxford University", description: "Gained experience in React and TS." },
  { time: "2016-2018", title: "Oxford University", description: "Leading projects and mentoring." }
];



const testimonials: Testimonials[] =[
  { comment: "Beautiful Minimalist design and great, fast response with support. Highly recommended. Thanks lidoshanfear.", 
    title: "Baraka Clinton",
    position: "English Teacher",
    rating: 4.5,
  },
  { comment: "Beautiful Minimalist design and great, fast response with support. Highly recommended. Thanks lidoshanfear.", 
    title: "Baraka Clinton",
    position: "English Teacher",
    rating: 3.0
  },
  { comment: "Beautiful Minimalist design and great, fast response with support. Highly recommended. Thanks lidoshanfear.", 
    title: "Baraka Clinton",
    position: "English Teacher",
    rating: 3.5
  },
  { comment: "Beautiful Minimalist design and great, fast response with support. Highly recommended. Thanks lidoshanfear.", 
    title: "Baraka Clinton",
    position: "English Teacher",
    rating: 4.0
  },             
];

const services: Service[] = [
  {
    title: "Web Design",
    description: "Web development is the most famous job in the world and it is very interesting...",
    image: web_design,   
  },
  {
    title: "Web Development",
    description: "Web development is the most famous job in the world and it is very interesting...", 
    image: web_development,  
  },
  {
    title: "Responsive Design",
    description: "Web development is the most famous job in the world and it is very interesting...",  
    image: responsive_design, 
  },
  {
    title: "Software Development",
    description: "Web development is the most famous job in the world and it is very interesting...", 
    image: software_development,  
  },
  {
    title: "SEO Optimization",
    description: "Web development is the most famous job in the world and it is very interesting...",
    image: seo_optimisation,   
  },
  {
    title: "Site Optimization",
    description: "Web development is the most famous job in the world and it is very interesting...",
    image: site_optimisation,
  },
];

const projects: Project [] = [
  { title: "React Dashboard", description: "A web app built with React and TypeScript.", category: "Web Apps" ,image: dashboard, },
  // { title: "E-commerce Site", description: "An online shopping platform using React.", category: "Web Apps" ,image: tamilloft, },
  // { title: "Mobile UI Design", description: "A sleek and modern UI/UX design.", category: "UI/UX Designs" ,image: tamilloft, },
  { title: "Brand Identity", description: "Creative branding project for a startup.", category: "Branding",image: tamilloft, },
  { title: "Portfolio Website", description: "Personal portfolio showcasing projects.", category: "Web Apps" ,image: portfolio, },
  // { title: "UX Wireframing", description: "Detailed wireframes for a client project.", category: "UI/UX Designs" ,image: tamilloft, },

];


const news: News[] = [
  {title: "Artificial Intelligence with the power of IBM Watson.", description: "Discover the latest advancements in AI technology and how IBM Watson is revolutionizing industries with its powerful capabilities. Stay updated with our blog for more insights and news.", image: img},
  {
    title: "The Rise of Web3: Decentralization and the Future of the Internet",
    description:
      "Web3 is redefining the internet with blockchain-based solutions, decentralized finance (DeFi), and NFTs. Learn how this transformation is empowering users and reshaping online experiences.",
      image: img
  },
  {
    title: "Cybersecurity Trends in 2025: Staying Ahead of Threats",
    description:
      "With increasing cyber threats, organizations are adopting AI-driven security measures. Read about the latest cybersecurity innovations and how to protect your data in the digital era.",
      image: img
  },
  {
    title: "The Evolution of AI in Content Creation",
    description:
      "From AI-generated articles to deepfake videos, artificial intelligence is reshaping content creation. Discover how AI tools are revolutionizing journalism, marketing, and entertainment.",
      image: img,
  },
]




const Skills = {
    
    programmingSkills: [
      { skill: "Bootstrap", percentage: 95 },
      { skill: "React", percentage: 50 },
      { skill: "JavaScript", percentage: 75 },
    ],
    
    languageSkills: [
      { language: "English", percentage: 90 },
      { language: "Spanish", percentage: 50 },
      { language: "German", percentage:60},
    ],

    knowledges: [
        { application: ["Bootstrap,"," Angular"]},
        { application: ["React,"," Vue,"," Laravel"]},
        { application: ["Stylus,"," Sass,"," Less"]},
        { application: ["Gulp,"," Webpack,", " Grunt"]},
        { application: ["Tweenmax,", " GSAP"]},
    ],

    interests: [
        { technologies: "Make UI/UX Design"},
        { technologies: "Create Mobile App"},
        { technologies: "Site Optimization"},
        { technologies: "Custom Website"},
        { technologies: "Learn Ecommerce"},
    ]


  };
  
  export { Skills, workStages, testimonials, services, projects, readmore, news,};
 
  