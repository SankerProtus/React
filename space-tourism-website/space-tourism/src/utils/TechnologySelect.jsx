import React from "react";

const TechnologySelect = ({ selectedTechnology, onChangeTechnology }) => {
  const technologies = [
    { id: "vehicle", name: "Launch vehicle", order: 1 },
    { id: "spaceport", name: "Spaceport", order: 2 },
    { id: "capsule", name: "Space capsule", order: 3 },
  ];
  return (
    <div className="technology-selector">
      {technologies.map((tech) => (
        <button
          key={tech.id}
          className={`technology-button ${
            selectedTechnology === tech.id ? "active" : ""
          }`}
          onClick={() => onChangeTechnology(tech.id)}
        >
          {tech.order}
        </button>
      ))}
    </div>
  );
};

export default TechnologySelect;
