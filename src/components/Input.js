import React, { useState } from "react";
export const Input = ({ subjects, setCategories, len, setCurrentI }) => {
  const [textFromInput,  setTextFromInput] = useState("");
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const addSubjectToList = (textFromInput) => {
    const d = new Date();
    let day = d.getDay();
    let dateAndTime = `${weekdays[day].slice(
      0,
      3
    )} ${d.toLocaleTimeString()} / ${d.toLocaleDateString()}`;

    if (textFromInput === "") {
      return false;
    } else {
      const newSubject = {
        id: Math.random(),
        title: textFromInput.trim(),
        subjects: [],
        date: dateAndTime,
      };
      const subjectsList = [...subjects, newSubject];
      setCategories(subjectsList);
      localStorage.setItem("subjectslist", JSON.stringify(subjectsList));

       setTextFromInput("");

      setCurrentI(subjectsList.length - 1); 
    }
  };

  return (
    <>
      <input
        value={textFromInput}
        onInput={(e) =>  setTextFromInput(e.currentTarget.value)}
        className="asside-input"
        placeholder="What subject did you study today?"
      />
      <button
        className="add-predmet-btn"
        onClick={() => {
          len();
          addSubjectToList(textFromInput);
        }}
      >
        Add
      </button>
    </>
  );
};
