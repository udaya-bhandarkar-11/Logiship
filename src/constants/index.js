import {
    mobile,
    backend,
    creator,
    web,
    email,
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
    user,
    tesla,
    warehouse,
    features,
    shopify,
    transport,
    carrent,
    jobit,
    tripguide,
    threejs,
    tracking,
    multipleop,
    list,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "Admin",
      title: "Admin",
      path:"/Owner"
    },
    {
      id: "Warehouse",
      title: "Warehouse",
      path:"/Owner",
    },
    {
      id: "Transport",
      title: "Transport",
      path:"/Owner",
    },
  ];
  
  const services = [
    {
      title: "Alert Messages",
      icon: email,
    },
    {
      title: "Tracking",
      icon: tracking  ,
    },
    {
      title: "Client's Vendor Selection Menu",
      icon: multipleop,
    },
    {
      title: "Transport Listing",
      icon: list,
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
      title: "User",
      //company_name: "User",
      icon: user,
      iconBg: "#383E56",
      //date: "March 2020 - April 2021",
      points: [
        "The landing page is prompted with 3 categories namely Admin, Warehouse and Transport which has separate login credentials of it's own.",
        "The business owner has various options to choose which service he/she wants to avail.",
        "Once the owner proceeds to place the order, they are redirected to a page to enter the basic details for shipment and confirm the same with their payment.",
        "They are shown with multiple options of transportation and can choose one among them."
        
      ],
    },
    {
      title: "Warehouse",
      //company_name: "Warehouse",
      icon: warehouse,
      iconBg: "#E6DEDD",
      //date: "Jan 2021 - Feb 2022",
      points: [
        "This involves tracking the movement of goods in and out of the warehouse, as well as managing products stored in the warehouse and ensuring that inventory is accurate and up-to-date.",
        "This involves processing orders and shipping them out to customers in a timely and efficient manner.",
        "This involves optimizing the use of the available space in the warehouse to ensure that goods can be stored, accessed, and moved around efficiently."
      ],
    },
    {
      title: "Features",
      //company_name: "Shopify",
      icon: features,
      iconBg: "#383E56",
      //date: "Jan 2022 - Jan 2023",
      points: [
        "This feature helps the business owner to get a track of status of the order from the time of processing till arrival.",
        "Once the order-Id is entered from the owner side a pop up will be shown on the page to get the status of the package that is being transported.",
        "Additionally there will also be email alerts sent to the linked email account at every stage of delivery."
      ],
    },
    {
      title: "Transport",
      //company_name: "Meta",
      icon: transport, //truck,
      iconBg: "#E6DEDD",
      //date: "Jan 2023 - Present",
      points: [
        "Once the order has been placed successfully, the business owner can view the details of the mode of transportation and other relevant details in this page.",
        "This acts like an acknowledgment for the owner once the order is processed which will then redirect him/her to other features."
        
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
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
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };