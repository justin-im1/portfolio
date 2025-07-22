import { Project, Experience } from '@/types';

export const projects: Project[] = [
  {
    name: 'Golf In One',
    technologies: 'MongoDB, Express.js, React.js, Node.js, Tailwind CSS',
    description: 'Created a full-stack web application for users to easily discover courses, track rounds, and view key statistics. Designed a responsive UI with React.js and Tailwind CSS, featuring intuitive navigation with a dynamic navbar. Implemented CRUD functionality, seamlessly allowing users to view, update, post, and delete their rounds. Built a robust backend with Express.js and MongoDB, leveraging RESTful APIs for efficient data handling.',
    github: '#', // Replace with actual GitHub link
    live: '#' // Replace with actual live link if available
  },
  {
    name: 'SaaS Website Builder',
    technologies: 'MySQL, Node.js, React.js, Next.js, TypeScript',
    description: 'Developed a scalable SaaS website builder using Next.js, allowing users to create and manage custom websites. Utilized MySQL for efficient data storage, ensuring seamless management of user profiles and site content. Implemented authentication and authorization with Clerk, providing secure login and account management. Integrated Stripe for payment processing, leading to easy subscription management and one-time payments.',
    github: '#', // Replace with actual GitHub link
    live: '#' // Replace with actual live link if available
  },
  {
    name: 'YelpCamp',
    technologies: 'JavaScript, Express.js, Node.js, MongoDB, HTML/CSS',
    description: 'Developed a web application for users to explore various campgrounds, integrating a comprehensive review system. Crafted a fully responsive UI with Bootstrap, ensuring an ideal and consistent UX across all screen sizes. Structured a backend with Express.js and MongoDB to efficiently manage and respond to various HTTP requests.',
    github: '#', // Replace with actual GitHub link
    live: '#' // Replace with actual live link if available
  },
];

export const experiences: Experience[] = [
  {
    title: 'Software Developer Intern',
    company: 'University Health Network',
    dates: 'September 2024 - December 2024',
    location: 'Toronto, ON',
    details: [
      'Developed a 10+ page dynamic web platform using React.js, enhancing accessibility for researchers by 30%',
      'Optimized API endpoints for MSSQL queries and tested them with Postman, reducing response times by 15%',
      'Implemented 5+ new high-impact features into the research intranet, streamlining workflows to increase efficiency',
      'Initiated the development of the external research website, boosting user engagement with improved functionality',
      'Managed data integration using dotCMS, ensuring smooth delivery and scalable performance across the websites'
    ]
  },
  {
    title: 'UI/UX Designer and Developer Intern',
    company: 'Voxer',
    dates: 'January 2024 - April 2024',
    location: 'San Francisco, CA',
    details: [
      'Led the end-to-end redesign of the UI/UX for all platforms, boosting weekly active users by 5% within one month',
      'Integrated 2+ key features into Voxer Pro on Android and iOS using React Native, resulting in retained users',
      'Utilized React Native to implement a new cross-platform design, reducing development time by 10%',
      'Developed a UI for Voxer\'s Business Portal, driving a 25% increase in user satisfaction by enhancing the UX',
      'Collaborated with senior developers to debug issues, increasing app stability and optimizing code performance'
    ]
  },
]; 