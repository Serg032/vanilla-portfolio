const contentItems = [
  { name: "Education", href: "./src/pages/education.html" },
  { name: "Experience", href: "./src/pages/experience.html" },
  { name: "Technologies", href: "./src/pages/technologies.html" },
  {
    name: "cv",
    href: "https://sergio-radigales-portfolio.s3.eu-west-1.amazonaws.com/sergio-radigales-dev.pdf",
  },
];

const contentList = document.querySelector(".content-items-list");

const color = "rgb(235, 230, 192)";

contentItems.forEach((item) => {
  const li = document.createElement("li");
  li.style.border = `1px solid ${color}`;
  li.style.borderRadius = "5px";
  li.className = "content-list-item";

  const link = document.createElement("a");
  link.href = item.href;
  link.style.textDecoration = "none";
  link.style.color = color;
  if (item.name === "cv") {
    link.target = "_blank";
  }

  const linkContentContainer = document.createElement("div");
  linkContentContainer.style.display = "flex";
  linkContentContainer.style.justifyContent = "center";
  linkContentContainer.style.alignItems = "center";
  linkContentContainer.style.padding = "1rem";
  linkContentContainer.style.gap = "1rem";
  linkContentContainer.style.boxShadow = `10px 5px 5px ${color}`;

  const linkText = document.createElement("span");
  linkText.textContent = item.name;

  linkContentContainer.appendChild(linkText);

  link.appendChild(linkContentContainer);
  li.appendChild(link);
  contentList.appendChild(li);
});
