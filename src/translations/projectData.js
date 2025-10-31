import project1image from "../assets/image/work1.jpg"
import project2image from "../assets/image/work2.jpg"
import project3image from "../assets/image/work3.jpg"
import project4image from "../assets/image/work4.jpg"
import project5image from "../assets/image/work5.jpg"

import { GiPaperWindmill } from "react-icons/gi";



export const projectData = [
   {
    projectimage: project1image,
    nameKey: "portfolioName",
    contentKey: "portfolioContent",
    tech: "React, Tailwind, Framer Motion",
    github: "https://github.com/sathish/portfolio",
    demo: "https://sathish-portfolio.vercel.app"
  },
  {
    projectimage: project2image,
    nameKey: "ecommerceName",
    contentKey: "ecommerceContent",
    tech: "MERN Stack",
    github: "https://github.com/sathish/ecommerce",
    demo: "https://sathish-shop.vercel.app"
  },
  {
    projectimage: project3image,
    nameKey: "blogName",
    contentKey: "blogContent",
    tech: "React, Node.js, MongoDB",
    github: "https://github.com/sathish/blog-app",
    demo: "https://sathish-blogs.netlify.app"
  },
  {
    projectimage: project4image,
    nameKey: "weatherName",
    contentKey: "weatherContent",
    tech: "HTML, CSS, JavaScript",
    github: "https://github.com/sathish/weather-app",
    demo: "https://weatherbysathish.netlify.app"
  },
  {
    projectimage: project5image,
    nameKey: "todoName",
    contentKey: "todoContent",
    tech: "React + LocalStorage",
    github: "https://github.com/sathish/todo-app",
    demo: "https://todo-sathish.netlify.app"
  }
];

export const serviceData = [
  {
    icon: GiPaperWindmill,
    titleKey: "webDevelopmentTitle",
    contentKey: "webDevelopmentContent",
  },
  {
    icon: GiPaperWindmill,
    titleKey: "uiuxTitle",
    contentKey: "uiuxContent",
  },
  {
    icon: GiPaperWindmill,
    titleKey: "backendTitle",
    contentKey: "backendContent",
  },
  {
    icon: GiPaperWindmill,
    titleKey: "apiTitle",
    contentKey: "apiContent",
  },
];