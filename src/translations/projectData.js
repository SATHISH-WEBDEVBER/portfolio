import project1image from "../assets/image/KnowledgeToIntelligenceSC.png"
import project2image from "../assets/image/YuvaPetCareSc.png"
import project3image from "../assets/image/NexLinK2ISC.png"



import { GiPaperWindmill } from "react-icons/gi";



export const projectData = [
   {
    projectimage: project1image,
    nameKey: "knowledgeName",
    contentKey: "knowledgeContent",
    tech: "React.js, Node.js, MongoDB, Express.js,",
    github: "https://github.com/SATHISH-WEBDEVBER/Information_Portf/blob/main/README.md",
    demo: "https://knowledge-to-intelligence.vercel.app/"
  },
  {
    projectimage: project2image,
    nameKey: "yuvasName",
    contentKey: "yuvasContent",
    tech: "Next.js, Tailwind, MongoDB",
    github: "https://github.com/SATHISH-WEBDEVBER/Information_Portf/blob/main/README.md",
    demo: "https://www.yuvaspetcare.in/"
  },
  {
    projectimage: project3image,
    nameKey: "contactName",
    contentKey: "contactContent",
    tech: "React.js, Node.js, MongoDB, Express.js, JWT ",
    github: "https://github.com/SATHISH-WEBDEVBER/Information_Portf/blob/main/README.md",
    demo: "https://contact-management-hub-psi.vercel.app/"
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