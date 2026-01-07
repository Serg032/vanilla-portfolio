const experienciesList = document.querySelector(".experience-list");

const experiencies = [
  {
    companyName: "Hiberus",
    position: "Full Stack Software Engineer",
    place: "Remote",
    from: new Date("2025/02/10"),
    to: "now",
    description:
      "I've been working on a faturation module for a big media company as Grupo Prisa. The technologies that I used at tha time were AWS CDK to make IaC with AWS Services, working with Typescript. Now I'm working for Unidad Editorial another big media company in Spain as Full Stack Developer, usin JavaScript Vanilla.",
  },
  {
    companyName: "Avvale",
    position: "Full Stack Software Engineer",
    place: "Remote",
    from: new Date("2024/02/01"),
    to: new Date("2025/02/06"),
    description:
      "I was working in two big projects, one for a big community as Scouts and the other one was for Refrival, big beer spanish distribution company.",
  },
  {
    companyName: "Wordlcoo",
    position: "Full Stack Software Engineer",
    place: "Remote",
    from: new Date("2022/09/01"),
    to: new Date("2024/01/26"),
    description:
      "At Worldcoo, my work as full stack engineer was with AWS Services, using Serverless Framework, Typescript, React.js, Next.js, Angular and Mongo DB. Here we as team were working by SCRUM, doing Hexagonal Architecture and TDD, Microservices, and diferent types of tests.",
  },
  {
    companyName: "Legal Innovation Technologies",
    position: "Full Stack Software Engineer",
    place: "Remote",
    from: new Date("2022/04/01"),
    to: new Date("2024/08/26"),
    description:
      "This was my first professional experience. I worked with Python and Vue.js.",
  },
];

const color = "rgb(235, 230, 192)";

const marshalledDate = (value) => {
  if (typeof value === "object") {
    return value.toDateString();
  }

  return value;
};

experiencies.forEach((experience) => {
  const li = document.createElement("li");
  li.className = "content-list-item";

  const experienceContainer = document.createElement("div");
  experienceContainer.style.color = color;
  experienceContainer.style.fontSize = "large";
  experienceContainer.style.background = "rgb(26, 26, 23)";
  experienceContainer.style.boxShadow = `10px 5px 5px ${color}`;
  experienceContainer.style.border = `1px solid ${color}`;
  experienceContainer.style.borderRadius = "5px";

  const contentContainer = document.createElement("div");
  contentContainer.className = "experience-list-item";
  contentContainer.style.width = "15rem";
  contentContainer.style.display = "flex";
  contentContainer.style.flexDirection = "column";
  contentContainer.style.textAlign = "left";
  contentContainer.style.padding = "1rem";
  contentContainer.style.gap = "1rem";

  const experienceButtonCompanyContainer = document.createElement("div");
  experienceButtonCompanyContainer.style.display = "flex";
  experienceButtonCompanyContainer.style.flexDirection = "column";
  experienceButtonCompanyContainer.style.gap = "0.5rem";
  const experienceButtonCompanyHeader = document.createElement("span");
  experienceButtonCompanyHeader.textContent = `Company:`;
  const experienceButtonCompanyBody = document.createElement("span");
  experienceButtonCompanyBody.textContent = `${experience.companyName}`;
  experienceButtonCompanyContainer.appendChild(experienceButtonCompanyHeader);
  experienceButtonCompanyContainer.appendChild(experienceButtonCompanyBody);

  const experienceButtonPositionContainer = document.createElement("div");
  experienceButtonPositionContainer.style.display = "flex";
  experienceButtonPositionContainer.style.flexDirection = "column";
  experienceButtonPositionContainer.style.gap = "0.5rem";
  const experienceButtonPositionHeader = document.createElement("span");
  experienceButtonPositionHeader.textContent = `Position:`;
  const experienceButtonPositionBody = document.createElement("span");
  experienceButtonPositionBody.textContent = `${experience.position}`;
  experienceButtonPositionContainer.appendChild(experienceButtonPositionHeader);
  experienceButtonPositionContainer.appendChild(experienceButtonPositionBody);

  const experienceButtonDescriptionContainer = document.createElement("div");
  experienceButtonDescriptionContainer.style.display = "flex";
  experienceButtonDescriptionContainer.style.flexDirection = "column";
  experienceButtonDescriptionContainer.style.gap = "0.5rem";
  const experienceButtonDescriptionHeader = document.createElement("span");
  experienceButtonDescriptionHeader.textContent = `Description:`;
  const experienceButtonDescriptionBody = document.createElement("span");
  experienceButtonDescriptionBody.textContent = `${experience.description}`;
  experienceButtonDescriptionContainer.appendChild(
    experienceButtonDescriptionHeader
  );
  experienceButtonDescriptionContainer.appendChild(
    experienceButtonDescriptionBody
  );

  const experienceButtonFromContainer = document.createElement("div");
  experienceButtonFromContainer.style.display = "flex";
  experienceButtonFromContainer.style.flexDirection = "column";
  experienceButtonFromContainer.style.gap = "0.5rem";
  const experienceButtonFromHeader = document.createElement("span");
  experienceButtonFromHeader.textContent = `From:`;
  const experienceButtonFromBody = document.createElement("span");
  experienceButtonFromBody.textContent = `${marshalledDate(experience.from)}`;
  experienceButtonFromContainer.appendChild(experienceButtonFromHeader);
  experienceButtonFromContainer.appendChild(experienceButtonFromBody);

  const experienceButtonToContainer = document.createElement("div");
  experienceButtonToContainer.style.display = "flex";
  experienceButtonToContainer.style.flexDirection = "column";
  experienceButtonToContainer.style.gap = "0.5rem";
  const experienceButtonToHeader = document.createElement("span");
  experienceButtonToHeader.textContent = `To:`;
  const experienceButtonToBody = document.createElement("span");
  experienceButtonToBody.textContent = `${marshalledDate(experience.to)}`;
  experienceButtonToContainer.appendChild(experienceButtonToHeader);
  experienceButtonToContainer.appendChild(experienceButtonToBody);

  contentContainer.appendChild(experienceButtonCompanyContainer);
  contentContainer.appendChild(experienceButtonPositionContainer);
  contentContainer.appendChild(experienceButtonDescriptionContainer);
  contentContainer.appendChild(experienceButtonFromContainer);
  contentContainer.appendChild(experienceButtonToContainer);

  experienceContainer.appendChild(contentContainer);
  li.appendChild(experienceContainer);
  experienciesList.appendChild(li);
});
