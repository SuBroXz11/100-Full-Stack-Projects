import { nanoid } from 'nanoid';
import { FaHtml5, FaJs, FaReact, FaNodeJs } from 'react-icons/fa';
import img1 from './assets/images/Screenshot (253).png'
import img2 from './assets/images/Screenshot (255).png'
import img3 from './assets/images/Screenshot (254).png'

export const links = [
  { id: nanoid(), href: '#home', text: 'home' },
  { id: nanoid(), href: '#skills', text: 'skills' },
  { id: nanoid(), href: '#about', text: 'about' },
  { id: nanoid(), href: '#projects', text: 'projects' },
];

export const skills = [
  {
    id: nanoid(),
    title: 'HTML&CSS',
    icon: <FaHtml5 className='h-16 w-16 text-emerald-500 animate-pulse' />,
    text: 'Profiecient in crafting clean, semantic HTML5 code and skilled in the responsive design in the CSS with experience of BootStrap and Tailwind CSS.',
  },
  {
    id: nanoid(),
    title: 'Javascript',
    icon: <FaJs className='h-16 w-16 text-emerald-500 animate-pulse' />,
    text: 'Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality',
  },
  {
    id: nanoid(),
    title: 'React',
    icon: <FaReact className='h-16 w-16 text-emerald-500 animate-spin' />,
    text: 'Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.',
  },
  {
    id: nanoid(),
    title: 'Node JS',
    icon: <FaNodeJs className='h-16 w-16 text-emerald-500 animate-pulse' />,
    text: 'Advanced proficiency in Node.js, building scalable and efficient server-side applications with a focus on asynchronous programming and robust API development.'
  },
];

export const projects = [
  {
    id: nanoid(),
    img: img3,
    url: 'https://subroxz-ecom.netlify.app/',
    github: 'https://github.com/SuBroXz11',
    title: 'Front-end Ecommerce Project',
    text: 'This is the project where i learnt to use tutorial APIs for CRUDs and AUthentication',
  },
  {
    id: nanoid(),
    img: img2,
    url: 'https://subroxz-prompt.vercel.app/',
    github: 'https://github.com/SuBroXz11',
    title: 'Next JS Blog Project',
    text: 'This is the project where i learnt google authentication with next js and mongoDB for database',
  },
  {
    id: nanoid(),
    img: img1,
    url: 'https://subroxz-shop.onrender.com/',
    github: 'https://github.com/SuBroXz11',
    title: 'Full Stack Ecommerce Project',
    text: 'This is the project where i learnt the most about a big web application with admin functionality'
  },
];
