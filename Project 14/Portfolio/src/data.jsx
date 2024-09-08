import { nanoid } from 'nanoid';
import { FaHtml5, FaJs, FaReact } from 'react-icons/fa';
import img1 from './Screenshot (168).png'
import img2 from './Screenshot (169).png'
import img3 from './Screenshot (167).png'

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
];

export const projects = [
  {
    id: nanoid(),
    img: img3,
    url: 'https://subroxz-color-generator.netlify.app/',
    github: 'https://github.com/SuBroXz11',
    title: 'first project',
    text: 'This is the project where i started using different libraries in my project and map and filter though their properties. This made my base...',
  },
  {
    id: nanoid(),
    img: img2,
    url: 'https://subroxz-todo.netlify.app/',
    github: 'https://github.com/SuBroXz11',
    title: 'second project',
    text: 'This is the project where i learned the Basic create update and deletion of the frontend data and saving the data in the Local storage...',
  },
  {
    id: nanoid(),
    img: img1,
    url: 'https://subrat-karmacharya.netlify.app/',
    github: 'https://github.com/SuBroXz11',
    title: 'third project',
    text: 'This is an Unsplash Images API project where I used Axios react-router-dom and react query. It was the first API project I did as a beginner in react...'
  },
];
