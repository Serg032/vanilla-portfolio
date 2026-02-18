const entries = [
  {
    title: "Factory Method",
    tags: ["Design Patterns", "Software Architecture"],
    shortDescription:
      "Factory Method is a creational design pattern that defines an interface for creating an object, but lets subclasses decide which concrete class to instantiate.",
    route: "./../pages/blog-entries/factory-method.html",
  },
];

const blogContent = document.querySelector(".blog-content");

entries.forEach((entrie) => {
  const entryContainer = document.createElement("a");

  entryContainer.href = entrie.route;

  const entrieTitle = document.createElement("span");
  entrieTitle.textContent = `Title: ${entrie.title}`;
  Object.assign(entrieTitle.style, {
    fontWeight: "bold",
  });

  const entrieShortDescription = document.createElement("span");
  entrieShortDescription.textContent = `Description: ${entrie.shortDescription}`;

  entryContainer.append(entrieTitle);
  entryContainer.append(entrieShortDescription);

  entrie.tags.forEach((tag) => {
    const tagContaier = document.createElement("div");

    Object.assign(tagContaier.style, {
      border: "2px solid rgb(235, 230, 192)",
      borderRadius: "10px",
      width: "fit-content",
      padding: "0.5rem",
    });

    const tagName = document.createElement("span");
    tagName.textContent = tag;

    tagContaier.append(tagName);
    entryContainer.append(tagContaier);
  });

  Object.assign(entryContainer.style, {
    width: "20rem",
    border: "2px solid rgb(235, 230, 192)",
    borderRadius: "10px",
    padding: "1rem",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    textDecoration: "none",
  });

  blogContent.append(entryContainer);
});
