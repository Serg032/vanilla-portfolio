const contentItems = [
  { name: "Education", href: "./src/pages/education.html" },
  { name: "Experience", href: "./src/pages/education.html" },
  { name: "Languajes", href: "./src/pages/education.html" },
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

  const linkContentContainer = document.createElement("div");
  linkContentContainer.style.display = "flex";
  linkContentContainer.style.justifyContent = "center";
  linkContentContainer.style.alignItems = "center";
  linkContentContainer.style.padding = "1rem";
  linkContentContainer.style.gap = "1rem";
  linkContentContainer.style.boxShadow = `10px 5px 5px ${color}`;

  const linkText = document.createElement("span");
  linkText.textContent = item.name;

  // const linkIcon = document.createElement("img");
  // linkIcon.src = "./src/icons/add.png";
  // linkIcon.style.width = "2rem";
  // linkIcon.alt = "add-icon";

  linkContentContainer.appendChild(linkText);
  // linkContentContainer.appendChild(linkIcon);

  link.appendChild(linkContentContainer);
  li.appendChild(link);
  contentList.appendChild(li);
});
