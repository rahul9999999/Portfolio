import { IconBrandGithub, IconBrandInstagram, IconBrandLeetcode, IconBrandLinkedin, IconBrandYoutube } from "@tabler/icons-react";
const Info = {
    name: "Rahul Kumar Panda",
    stack: ["Software Engineer", "Full Stack Developer", "Competitive Programmer", "Freelancer", "Open Source Contributor"],
    bio: "I'm a passionate software engineer specialized in crafting efficient and scalable solutions, deliver top-notch web applications, and provide freelance services that exceed client expectations. Let's connect and create something amazing together!"
}



const ProjectInfo = [
    {
        title: "StudyNotion",
        desc: "StudyNotion is a comprehensive web application built using the React framework, designed to enhance the e-learning experience. It focuses on providing users with tools for study management and interactive learning. Key features include user authentication, course management, and progress tracking, making it suitable for both students and educators. The project leverages modern web development technologies such as React for the front end, Express.js for backend services, and MongoDB for database management. The application also incorporates responsive design principles to ensure seamless functionality across devices.",
        image: "StudyNotion.png",
        live: false,    
        technologies: ["React", "Redux","Node","Express","Mongo DB"],
        link: "https://github.com/rahul9999999/StudyNotion.git",
        github: "https://github.com/rahul9999999/StudyNotion.git"
    },
    {
        title: "MovieBuzz",
        desc: "MovieBuzz is a dynamic movie discovery platform built using React and Vite, designed for movie enthusiasts to explore trending films. The application provides real-time movie information by integrating with third-party APIs such as The Movie Database (TMDb), allowing users to search for movies, view details, and explore trailers. The project uses SCSS for modular, maintainable styles, ensuring a sleek and responsive user interface. Deployed using Vercel, the application offers fast load times and seamless performance. It also emphasizes clean code and efficient development practices, making it an ideal demonstration of modern web development techniques.",
        image: "MovieBuzz.png",
        live: false,    
        technologies: ["React"],
        link: "https://github.com/rahul9999999/MovieBuzz.git",
        github: "https://github.com/rahul9999999/MovieBuzz.git"
    },
    {
        title: "Crypto App",
        desc: "The Crypto-App is a React-based application built with Create React App. It allows users to track cryptocurrency prices and market trends. The app utilizes JavaScript and HTML, and includes features for building, testing, and deployment. The main functionality of the app is likely related to real-time data fetching from cryptocurrency APIs to provide users with up-to-date information on various digital currencies. It follows a clean code structure with modern web development tools and is intended to be responsive and user-friendly.",
        image: "Crypto.png",
        live: false,    
        technologies: ["React"],
        link: "https://github.com/rahul9999999/Crypto-App.git",
        github: "https://github.com/rahul9999999/Crypto-App.git"
    },
    {
        title: "Weather App",
        desc: "The Weather App is a simple project built using HTML, CSS, and JavaScript. It allows users to check real-time weather updates for various locations. The app likely interacts with weather APIs to fetch and display data, providing essential information like temperature, humidity, and conditions. The repository contains standard web development files, including index.html, style.css, and JavaScript logic for dynamic content handling.",
        image: "Weather.png",
        live: false,    
        technologies: ["HTML","CSS","Javascript"],
        link: "https://github.com/rahul9999999/WEATHER-APP.git",
        github: "https://github.com/rahul9999999/WEATHER-APP.git"
    },
    {
        title: "Password Generator",
        desc: "The Password Generator is a simple JavaScript-based project designed to create secure passwords. It generates random passwords with customizable criteria such as length and character types (upper/lower case, numbers, special characters). Built with HTML, CSS, and JavaScript, the app features a clean interface that allows users to copy generated passwords easily. The project emphasizes functionality and user experience while maintaining minimal and efficient code.",
        image: "Password.png",
        live: false,    
        technologies: ["HTML","CSS","Javascript"],
        link: "https://github.com/rahul9999999/PASSWORD-GENERATOR.git",
        github: "https://github.com/rahul9999999/PASSWORD-GENERATOR.git"
    },
    {
        title: "Ekart E-comm App",
        desc: "This e-commerce project is a comprehensive online shopping platform built with a modern tech stack, including React for the user interface and Node.js with Express for the server-side logic. Utilizing MongoDB as the database, the application efficiently manages user accounts, product listings, and order transactions. It features a secure user authentication system that allows customers to register and log in seamlessly. The admin dashboard empowers administrators to effortlessly add, update, and remove products from the catalog, while customers enjoy a user-friendly shopping experience with a fully functional shopping cart and checkout process. The responsive design ensures optimal performance across both desktop and mobile devices, providing a smooth user journey. The backend is designed as a RESTful API, facilitating efficient data communication between the client and server. Additional tools such as JSON Web Tokens (JWT) enhance security for user sessions, and Axios is used for streamlined API interactions. This project exemplifies modern web development practices and serves as a robust foundation for further enhancements, such as integrating payment gateways or implementing advanced search functionality.",
        image: "Ecommorce.png",
        live: false,
        technologies: ["React", "Redux","Node","Express","Mongo DB"],
        link: "https://github.com/rahul9999999/Ecommerce.git",
        github: "https://github.com/rahul9999999/Ecommerce.git"
    },
    
    
    
    
    
]


const SkillInfo = [
    {
        title: "Frontend",
        skills: ["HTML", "CSS", "SASS", "JavaScript", "React JS", "Redux", "Tailwind CSS", "GSAP", "Material UI", "Bootstrap"
        ]
    },
    {
        title: "Backend",
        skills: ["Springboot", "Node JS", "Express JS", "MongoDB", "Firebase"]
    },
    {
        title: "Languages",
        skills: ["C++", "JavaScript", "TypeScript"]
    },
    {
        title: "Tools",
        skills: ["Git", "Github", "VS Code", "Postman", "MongoDB Compass"]
    }
]
const socialLinks = [
    { link: "https://github.com/rahul9999999", icon: IconBrandGithub },
    { link: "https://www.linkedin.com/in/rahul-kumar-panda-84586322b/", icon: IconBrandLinkedin },
    { link: "https://www.instagram.com/rahul___799/", icon: IconBrandInstagram }, 
    { link: "https://www.youtube.com/@RaHuLKuMaR-fd1ec", icon: IconBrandYoutube },
    { link: "https://leetcode.com/u/rahulkumarpanda999/", icon: IconBrandLeetcode }
];


const ExperienceInfo = [
    {
        role: "Full-stack developer",
        img:"Ecommorce",
        desc: "Developed a course-selling platform with two distinct user roles: Student and Instructor. Students can browse, purchase, and enroll in courses, while instructors can create and manage their own courses.",
        skills: [ "React JS", "Node JS", "MongoDB", "Express.js","JWT for authentication"]
    },
    {
        role: "Frontend developer",
        img:"MovieBuzz",
        desc: " Developed a movie streaming platform that allows users to browse, search, and sort through a variety of movies. Users can find specific movies by using a search functionality and organize them based on different criteria such as popularity or release date.",
        skills: ["React","SCSS"]
    }
]
const Slugs = [
    "typescript",
    "spring",
    "javascript",
    "dart",
    "java",
    "react",
    "angular",
    "flutter",
    "android",
    "html5",
    "css3",
    "springboot",
    "mongodb",
    "selenium",
    "nodedotjs",
    "express",
    "nextdotjs",
    "prisma",
    "mysql",
    "amazonaws",
    "postgresql",
    "firebase",
    "nginx",
    "vercel",
    "testinglibrary",
    "jest",
    "cypress",
    "docker",
    "git",
    "jira",
    "github",
    "gitlab",
    "visualstudiocode",
    "androidstudio",
    "sonarqube",
    "figma",
];
export { Info, ProjectInfo,socialLinks, SkillInfo, ExperienceInfo, Slugs };