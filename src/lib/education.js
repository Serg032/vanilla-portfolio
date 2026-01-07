const list = document.querySelector(".education-list");

const listItems = [
  {
    title: "Full Stack Development Master",
    description:
      "The Master in Full Stack Development at Nuclio Digital School is an intensive, career-focused program designed to equip students with the technical skills and real-world experience needed to become full stack web developers. Over the course of the curriculum, participants learn both front-end and back-end technologies, building complete applications from the ground up. The program covers foundational programming concepts, modern JavaScript, frameworks such as React, backend development with Node.js and Express, database management, and project deployment practices. Students also work with agile development methodologies and complete hands-on projects that mirror real industry workflows, culminating in a final project that showcases their ability to architect and deliver full web applications. This learning experience prepares graduates to contribute effectively in tech teams and adapt to the demands of the current digital job market.",
    school: "Nuclio Digital School",
    schoolLink: "https://nuclio.school/",
    certificationLink:
      "https://sergio-radigales-portfolio.s3.eu-west-1.amazonaws.com/nuclio2023.pdf",
  },
  {
    title: "Docker from 0 to Development",
    description:
      "Learn what Docker is and how to get the most out of containers. Starting from the beginning, we'll see how to use Docker to run your application locally as if it were in production, starting a database with Docker Compose.",
    school: "Codely",
    schoolLink: "https://codely.com/en",
    certificationLink:
      "https://sergio-radigales-portfolio.s3.eu-west-1.amazonaws.com/docker-de-0-a-deployment.pdf",
  },
  {
    title: "Back End Development and APIs",
    description:
      "Learn what Docker is and how to get the most out of containers. Starting from the beginning, we'll see how to use Docker to run your application locally as if it were in production, starting a database with Docker Compose.",
    school: "Codeacademy",
    schoolLink: "https://www.codecademy.com/",
    certificationLink:
      "https://sergio-radigales-portfolio.s3.eu-west-1.amazonaws.com/backend-certification.pdf",
  },
  {
    title: "Testing",
    description:
      "Learn what Docker is and how to get the most out of containers. Starting from the beginning, we'll see how to use Docker to run your application locally as if it were in production, starting a database with Docker Compose.",
    school: "Codely",
    schoolLink: "https://codely.com/en",
    certificationLink:
      "https://sergio-radigales-portfolio.s3.eu-west-1.amazonaws.com/testing-introduccion-y-buenas-practicas.pdf",
  },
  {
    title: "GraphQL Developer - Associate",
    description:
      "Learn what Docker is and how to get the most out of containers. Starting from the beginning, we'll see how to use Docker to run your application locally as if it were in production, starting a database with Docker Compose.",
    school: "Apollo",
    schoolLink: "https://codely.com/en",
    certificationLink:
      "https://sergio-radigales-portfolio.s3.eu-west-1.amazonaws.com/apollo-certificate.pdf",
  },
  {
    title: "Hexagonal Architecture",
    description:
      "Learn what Docker is and how to get the most out of containers. Starting from the beginning, we'll see how to use Docker to run your application locally as if it were in production, starting a database with Docker Compose.",
    school: "Codely",
    schoolLink: "https://codely.com/en",
    certificationLink:
      "https://sergio-radigales-portfolio.s3.eu-west-1.amazonaws.com/arquitectura-hexagonal.pdf",
  },
  {
    title: "OOP Good Practices",
    description:
      "Learn what Docker is and how to get the most out of containers. Starting from the beginning, we'll see how to use Docker to run your application locally as if it were in production, starting a database with Docker Compose.",
    school: "Codely",
    schoolLink: "https://codely.com/en",
    certificationLink:
      "https://sergio-radigales-portfolio.s3.eu-west-1.amazonaws.com/buenas-practicas-de-programacion-orientada-a-objetos.pdf.pdf",
  },
  {
    title: "Clean Code",
    description:
      "Learn what Docker is and how to get the most out of containers. Starting from the beginning, we'll see how to use Docker to run your application locally as if it were in production, starting a database with Docker Compose.",
    school: "Codely",
    schoolLink: "https://codely.com/en",
    certificationLink:
      "https://sergio-radigales-portfolio.s3.eu-west-1.amazonaws.com/clean-code.pdf.pdf",
  },
  {
    title: "Event Driven Architecture",
    description:
      "Learn what Docker is and how to get the most out of containers. Starting from the beginning, we'll see how to use Docker to run your application locally as if it were in production, starting a database with Docker Compose.",
    school: "Codely",
    schoolLink: "https://codely.com/en",
    certificationLink:
      "https://sergio-radigales-portfolio.s3.eu-west-1.amazonaws.com/comunicacion-entre-microservicios-event-driven-architecture.pdf",
  },
  {
    title: "Solid Principles",
    description:
      "Learn what Docker is and how to get the most out of containers. Starting from the beginning, we'll see how to use Docker to run your application locally as if it were in production, starting a database with Docker Compose.",
    school: "Codely",
    schoolLink: "https://codely.com/en",
    certificationLink:
      "https://sergio-radigales-portfolio.s3.eu-west-1.amazonaws.com/principios-solid-aplicados.pdf.pdf",
  },
  {
    title: "CQRS",
    description:
      "Learn what Docker is and how to get the most out of containers. Starting from the beginning, we'll see how to use Docker to run your application locally as if it were in production, starting a database with Docker Compose.",
    school: "Codely",
    schoolLink: "https://codely.com/en",
    certificationLink:
      "https://sergio-radigales-portfolio.s3.eu-west-1.amazonaws.com/cqrs-command-query-responsibility-segregation.pdf",
  },
  {
    title: "Python",
    description:
      "Learn what Docker is and how to get the most out of containers. Starting from the beginning, we'll see how to use Docker to run your application locally as if it were in production, starting a database with Docker Compose.",
    school: "Codeacademy",
    schoolLink: "https://codely.com/en",
    certificationLink:
      "https://sergio-radigales-portfolio.s3.eu-west-1.amazonaws.com/Python-cert.pdf",
  },
];

const color = "rgb(235, 230, 192)";

listItems.forEach((item) => {
  const li = document.createElement("li");
  li.style.border = `1px solid ${color}`;
  li.style.borderRadius = "5px";
  li.className = "content-list-item";

  const link = document.createElement("a");
  link.href = item.certificationLink;
  link.target = "_blank";
  link.style.textDecoration = "none";
  link.style.color = color;

  const linkContentContainer = document.createElement("div");
  linkContentContainer.className = "content-list-item-container";
  linkContentContainer.style.width = "15rem";
  linkContentContainer.style.display = "flex";
  linkContentContainer.style.flexDirection = "column";
  linkContentContainer.style.alignItems = "start";
  linkContentContainer.style.padding = "1rem";
  linkContentContainer.style.gap = "1rem";
  linkContentContainer.style.boxShadow = `10px 5px 5px ${color}`;

  const linkTitle = document.createElement("span");
  linkTitle.textContent = `Title: ${item.title}`;

  const linkSchool = document.createElement("span");
  linkSchool.textContent = `School: ${item.school}`;

  linkContentContainer.appendChild(linkTitle);
  linkContentContainer.appendChild(linkSchool);
  // linkContentContainer.appendChild(linkIcon);

  link.appendChild(linkContentContainer);
  li.appendChild(link);
  list.appendChild(li);
});
