// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Amay's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Amay Nagpal Portfolio",
    type: "website",
    url: "?",
  },
};

//Home Page
const greeting = {
  title: "Amay Nagpal",
  logo_name: "AmayNagpal",
  nickname: "Nagpal'S",
  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "https://drive.google.com/file/d/1EE7fLe5ARZrOQLljtUnZCZeWtWLl7JpS/view?usp=sharing",
  githubProfile: "https://github.com/amaynagpal",
};

const socialMediaLinks = [

  {
    name: "Github",
    link: "https://github.com/amaynagpal",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/amay-nagpal/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
];

const skills = {
  data: [
    {
      title: "Web Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React and Angular",
        "⚡ Developing robust backend systems with Spring Boot and Spring Framework",
        "⚡ Creating secure applications with Spring Security",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "AngularJS",
          fontAwesomeClassname: "simple-icons:angular",
          style: {
            color: "#DD0031",
          },
        },
        {
          skillName: "TypeScript",
          fontAwesomeClassname: "simple-icons:typescript",
          style: {
            color: "#3178C6",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "simple-icons:java",
          style: {
            color: "#007396",
          },
        },
        {
          skillName: "Spring",
          fontAwesomeClassname: "simple-icons:spring",
          style: {
            color: "#6DB33F",
          },
        },
        {
          skillName: "Bootstrap",
          fontAwesomeClassname: "simple-icons:bootstrap",
          style: {
            color: "#7952B3",
          },
        },
      ],
    },
    {
      title: "Database & Tools",
      fileName: "DatabaseImg",
      skills: [
        "⚡ Experience working with MySQL databases and DBeaver",
        "⚡ Data analysis and visualization with Power BI",
        "⚡ Strong fundamentals in database management systems (DBMS)",
      ],
      softwareSkills: [
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "DBeaver",
          fontAwesomeClassname: "simple-icons:dbeaver",
          style: {
            color: "#0277BD",
          },
        },
        {
          skillName: "Power BI",
          fontAwesomeClassname: "simple-icons:powerbi",
          style: {
            color: "#F2C811",
          },
        },
      ],
    },
    {
      title: "Computer Science Fundamentals",
      fileName: "ComputerScienceImg",
      skills: [
        "⚡ Strong foundation in Data Structures and Algorithms",
        "⚡ Understanding of Operating Systems concepts and principles",
        "⚡ Knowledge of Computer Networks fundamentals",
      ],
      softwareSkills: [
        {
          skillName: "DSA",
          fontAwesomeClassname: "carbon:data-vis-4",
          style: {
            color: "#0288D1",
          },
        },
        {
          skillName: "OS",
          fontAwesomeClassname: "carbon:bare-metal-server",
          style: {
            color: "#FF6F00",
          },
        },
        {
          skillName: "Networks",
          fontAwesomeClassname: "carbon:network-4",
          style: {
            color: "#009688",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "Geeks for Geeks",
      iconifyClassname: "simple-icons:geeksforgeeks",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://www.geeksforgeeks.org/user/amaynagpal5269/?_gl=1*fay8gg*_up*MQ..*_gs*MQ..&gbraid=0AAAAAC9yBkDlkmH0JZGsRiiyy-pPEqC0H",
    },
  ]
};

const degrees = {
  degrees: [
    {
      title: "Vellore Institute Of Technology",
      subtitle: "B.Tech. in Computer Science and Engineering",
      logo_path: "VIT_Bhopal.png",
      alt_name: "VIT Bhopal",
      duration: "September 2021 - Present",
      descriptions: [
        "⚡ I have studied fundamental computer science subjects like DSA, DBMS, OS, CN, etc.",
        "⚡ Additionally, I have focused on web development technologies and databases, with hands-on project experience.",
        "⚡ I have participated in hackathons and achieved notable results, including 2nd place in the DataPalooza Hackathon and 3rd place in a design hackathon."
      ],
      website_link: "https://vitbhopal.ac.in/",
    },
    {
      title: "Dr. Soney Lal Patel Public School",
      subtitle: "CBSE Class XII",
      logo_path: "CBSE.png",
      alt_name: "CBSE",
      duration: "Completed July 2021",
      descriptions: [
        "⚡ Completed higher secondary education with a grade of 65.2%",
        "⚡ Developed foundational knowledge for pursuing computer science engineering",
      ],
      website_link: "https://drslpssschool.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Certified Scrum Master",
      subtitle: "",
      logo_path: "Scrum_Master.png",
      certificate_link:
        "https://drive.google.com/file/d/17bo1OsfRiOtOWgHz7GshOYvECSjgZa5n/view?usp=sharing",
      alt_name: "Scrum Alliance",
      color_code: "#8C151599",
    },
    {
      title: "Java Development on Oracle Cloud",
      subtitle: "",
      logo_path: "Oracle.png",
      certificate_link:
        "https://drive.google.com/file/d/1hvH_3Yr1zPlMv8hAYs3syto4RCFLd5Ho/view?usp=sharing",
      alt_name: "Oracle",
      color_code: "#00000099",
    },
    {
      title: "Java Full Stack Course",
      subtitle: "",
      logo_path: "Iamneo.png",
      certificate_link:
        "https://drive.google.com/file/d/1CB4SwiEiIkFr_5nmf4sjvwXQusZwWkQ6/view?usp=sharing",
      alt_name: "",
      color_code: "#0C9D5899",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Internship and Volunteerships",
  description:
    "Versatile and results-driven Full Stack Developer with hands-on experience in ReactJS, Spring Boot, and TypeScript, contributing to evolving startups and hackathon-winning teams by delivering scalable web applications, real-time transcription tools, and user-focused interfaces.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Internship",
      work: true,
      experiences: [
        {
          title: "Junior ReactJs Intern",
          company: "Munsow Technologies",
          company_url: "https://www.munsow.com/",
          logo_path: "Munsow.jpg",
          duration: "Feb 2025 - Present",
          location: "Remote",
          description:
            "Designed and integrated interactive UI features including a custom cursor, pop-up dialogue, dynamic redirection, stream selection, feedback section, interactive sub-buttons, intelligent report generation, and real-time audio/video transcription.",
          color: "#000000",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "HR and Operation",
          company: "Fusion Club VIT Bhopal",
          company_url: "https://thefusionclub.in/",
          logo_path: "Fusion_Club.png",
          duration: "June 2023 - July 2024",
          location: "Bhopal,MP",
          description:
            "Spearheaded recruitment efforts at Fusion Club VIT Bhopal’s H.R. and Operations Team, boosting team effi-ciency by 40% and onboarding 15+ members.",
          color: "#000000",
        },
      ]
    },

  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "I develop responsive web applications using React, Angular and Spring Boot, with strong database skills in MySQL and visualization tools like Power BI, all supported by my solid foundation in data structures, algorithms and computer networks",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "my_photo.jpg",
    description:
      "I am available on LinkedIn, GitHub, and through email. You can message me, and I will reply within 24 hours. I can help you with web development using React and Angular, Spring Boot backends, Java programming, database management, and computer science fundamentals.",
  },
  addressSection: {
    title: "Address",
    subtitle: "620/47 W Block Tulsi Vihar ",
    locality: "Saket Nagar",
    country: "India",
    region: "UttarPradesh",
    postalCode: "208014",
    streetAddress: "Tulsi Vihar",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://www.google.com/maps/place/620%2F47,+Niralanagar+Juhi,+Juhi+Kalan,+Saket+Nagar,+Kanpur,+Uttar+Pradesh+208014/@26.4317669,80.3103606,19z/data=!4m6!3m5!1s0x399c47affe48b6e5:0x1d08b76391a405c!8m2!3d26.4316394!4d80.3102667!16s%2Fg%2F11j4jn2jgp?entry=ttu&g_ep=EgoyMDI1MDUwNi4wIKXMDSoASAFQAw%3D%3D",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
};