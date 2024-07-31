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
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React & React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Machine Learning Enthusiast",
      icon: creator,
    },
  ];
  
  const technologies = [
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
      name: "TypeScript",
      icon: typescript,
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
      title: "React.js Developer",
      company_name: "Innovation Hacks AI",
      icon: starbucks,
      iconBg: "#383E56",
      date: "April 2023 - August 2023",
      points: [
        "Spearheaded the front-end development for Datawise, an AI-based data management system, ensuring user-centric design and enhanced functionality.",
        "Designed and developed scalable interfaces and highly responsive applications, achieving seamless API integration to optimize data handling and efficiency by 80%.",
        "Integrated advanced Docker container techniques to streamline deployment processes, improving 65% operational efficiency.",
        "Orchestrated deployment processes on the Azure platform, ensuring robust and scalable infrastructure for continuous integration and delivery.",
        
      ],
    },
    {
      title: "Computer Enginerring Student",
      company_name: "KJ SOMAIYA POLYTECHNIC",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "AUGUST 2021 - MAY-2024",
      points: [
        "Consistently maintained more than 90% while working part-time and participating in extracurricular activities.",
        "Developed a passion for web development and machine learning, leading to the completion of multiple projects and internships.",
        "Participated in hackathons and coding competitions, winning several awards and accolades.",
        "Collaborated with peers on various projects, fostering teamwork and leadership skills.",
      ],
    },
    {
      title: "High School Student",
      company_name: "SKI HIGH SCHOOL",
      icon: shopify,
      iconBg: "#383E56",
      date: "May 2012 - May 2021",
      points: [
        "Graduated with honors, maintaining a percentage of 91.6%.",
        "Participated in various extracurricular activities, including sports and music.",
        "Developed a strong foundation in mathematics and science, leading to a passion for computer engineering.",
        "Participated in public speaking competitions and debates, honing communication and leadership skills.",
      ],
    },
    {
      title: "CSI Technical Head",
      company_name: "Computer Society of India",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2022 - May 2024",
      points: [
        "Led a team of 10 members to organize technical events, workshops, and seminars, fostering a culture of innovation and learning.",
        "Collaborated with industry professionals to conduct webinars and training sessions on emerging technologies.",
        "Developed and maintained the organization's website, ensuring a user-friendly interface and seamless navigation.",
        "Participated in hackathons and coding competitions, winning several awards and accolades.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Daksh comes with lot young energy , he is a fast learner always an asset to have him on the team. ",
      name: "Ajay Solanki",
      designation: "Founder",
      company: "Innovation Hacks AI",
      image: "https://media.licdn.com/dms/image/D4D35AQHlM3YLqSt4cQ/profile-framedphoto-shrink_100_100/0/1716261278171?e=1723046400&v=beta&t=gkJFOpnFdJcxjHPE-0_-hFOxlbAo7ggSzYfgqhK46T0",
    },
    {
      testimonial:
        "I highly recommend Daksh as a dedicated and skilled intern who significantly contributed to our project at Innovation Hacks AI.  Daksh's commitment and quick learning make him an asset to any team.",
      name: "Abhijeet Patil",
      designation: "Marketing Head",
      company: "Innovation Hacks AI",
      image: "https://media.licdn.com/dms/image/D4E03AQGJTt9dm8owzw/profile-displayphoto-shrink_100_100/0/1705930782613?e=1727913600&v=beta&t=CGtG9i9kNzM4GxriAP9Uv58GbTfWWOTz7Xpk3nRxZ8g",
    },
    {
      testimonial:
        "His expertise in Full-Stack Web Development and programming was evident in the excellent work he did on the front-end of our product.",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Cypress",
      description:
        "Developed real-time collaboration and integrated payment features using Next.js and streamlined payment processing, reducing transaction times by 25% Devised multi-user shared workspaces with live updates, reflecting real-time changes across users.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/Dash10107/Cypress-Online-Shared-Workspace",
    },
    {
      name: "Edusync",
      description:
        "ilt using React.js and Node.js, featuring admin, teacher, and student interfaces, AI integration, interactive modules, and statistical analysis tools. Streamlined development with modular design, enhancing responsiveness and scalability. Reduced bug incidence by 40% through regular testing and feedback loops.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "express",
          color: "green-text-gradient",
        },
        {
          name: "mongodb",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "http://edusync.netlify.app/",
    },
    {
      name: "CryptoDunks",
      description:
        "NFt marketplace, which lets you mine NFTs on the blockchain, and sell them on the marketplace as well as buy them from my crypto token as well. It's a cool neat app that utilizes the potential of blockchain and NFTs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "motoko",
          color: "green-text-gradient",
        },
        {
          name: "blockchain",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/Dash10107/NFT-marketplace",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };