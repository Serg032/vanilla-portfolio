const entries = [
  {
    title: "Factory Method",
    tags: ["Design Patterns", "Software Architecture"],
    shortDescription:
      "Factory Method is a creational design pattern that defines an interface for creating an object, but lets subclasses decide which concrete class to instantiate.",
  },
];

const blogContent = document.querySelector(".blog-content");

entries.forEach((entrie) => {
  const entryContainer = document.createElement("div");

  const entrieTitle = document.createElement("span");
  entrieTitle.textContent = `Title: ${entrie.title}`;

  const entrieShortDescription = document.createElement("span");
  entrieShortDescription.textContent = `Description: ${entrie.shortDescription}`;

  entryContainer.append(entrieTitle);
  entryContainer.append(entrieShortDescription);

  entrie.tags.forEach((tag) => {
    console.log(tag);
    const tagContaier = document.createElement("div");

    Object.assign(tagContaier.style, {
      border: "2px solid white",
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
    border: "2px solid white",
    borderRadius: "10px",
    padding: "1rem",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  });

  blogContent.append(entryContainer);
});
