import {
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
    threejs,
  } from "../assets";
  import Rayban from '../assets/Rayban.png';
  import Finance from '../assets/AI Finance.png';
  import freelancerIcon from '../assets/company/freelancerIcon.png'
  
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
      title: "Frontend Developer",
      icon: web,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Motion Designer",
      icon: threejs,
    },
    {
      title: "Editor",  
      icon: creator,
    },
  ];
  
  const technologies = [

    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },      
    { 
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma", 
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Full Stack Freelancer", 
      icon :  freelancerIcon,
      iconBg: "#E0E0E0",  
      date: "November 2024 - Present",
      points: [
        "Designing and maintaining high-performance web applications with React.js and modern libraries, ensuring clean, maintainable code.",
        "Collaborating with cross-functional teams—designers, product managers, and fellow developers to deliver user-focused solutions on time and within scope.",
        "Implementing responsive layouts and cross-browser compatibility, optimizing for performance, accessibility, and scalability.",
      ],
    },  

  ];  
   
  const testimonials = [
    {
      testimonial:
        "A true professional! Delivered the project ahead of schedule with flawless execution.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "Amazing experience working with Aryan! Delivered exactly what I needed—on time and beyond expectations.",
      name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "Good Understanding and Outputs",
      name: "Anshika Dhiman",
      image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vogue.in%2Fmagazine-story%2F6-indian-women-in-tech-whose-stories-will-inspire-young-girls-everywhere%2F&psig=AOvVaw0p-w25s0gp3uh96OGs5wTU&ust=1741713621301000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCODZtYSDgIwDFQAAAAAdAAAAABAE",
    },
  ];
  
  const projects = [
    {
      name: "Ray-ban Landing Page Redesigned",
      description:
        'Ray-ban Landing Page with a modern and sleek design.',
      tags: [
        {
          name: "JavaScript",
          color: "blue-text-gradient",
        },
        {
          name: "Figma",
          color: "green-text-gradient",
        },
        {
          name: "SherryJS",
          color: "pink-text-gradient",
        },
      ],
      image: Rayban,
      source_code_link: "https://github.com/Aryanbhargava18/RayBan-Landing-Page",
    },
    {
      name: "AI Finance Manager",
      description:
        "Full Stack AI Finance Platform that helps to manage your finances by use of AI.",
      tags: [
        {
          name: "Next JS",
          color: "blue-text-gradient",
        },
        {
          name: "Tailwind",
          color: "green-text-gradient",
        },
        {
          name: "ArcJet",
          color: "pink-text-gradient",
        },
      ],
      image: Finance,
      // source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };