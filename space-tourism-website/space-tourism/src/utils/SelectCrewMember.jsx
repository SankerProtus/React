import React from "react";
import "../App.css";

const SelectCrewMember = ({ selectedCrewMember, onChangeCrewMember }) => {
  const crewMembers = [
    { id: "commander", role: "Commander" },
    { id: "specialist", role: "Mission Specialist" },
    { id: "pilot", role: "Pilot" },
    { id: "engineer", role: "Flight Engineer" }
  ];

  return (
    <div>
      {crewMembers.map((crew) => (
        <input
          key={crew.id}
          type="radio"
          className={`custom-radio ${
            selectedCrewMember === crew.id ? "checked" : ""
          }`}
          onClick={() => onChangeCrewMember(crew.id)}
        />
      ))}
    </div>
  );
};

export default SelectCrewMember;
