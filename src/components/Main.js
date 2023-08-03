import { useState } from "react";
import "animate.css";
import { BsTrash3 } from "react-icons/bs";
import logo from '../WystLogo.png'

export const Main = ({
  selectedItem,
  categories,
  currentItem,
  setCategories,
  handleRemovePredmet,
  show
}) => {
  const [inputText, setInputText] = useState("");

  const [subjectsArray, setSubjectArray] = useState(categories || []);

  let titleForPlaceholder;
  if (selectedItem) {
    titleForPlaceholder = selectedItem.title;
  } else {
    titleForPlaceholder = "";
  }
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  if (!categories.length) {
    return false;
  }

  const getRandomPositionLeft = () => {
    let leftRandomPosition = Math.floor(Math.random() * (20 - -20) + -20);
    return leftRandomPosition;
  };

  const getRandomBackgroundColor = () => {
    const palette = [
      "#d7ffcc",
      "#9aff7e",
      "#aff5c9",
      "#b7cfff",
      "#d1b7ff",
      "#fdcfcf",
    ];

    let bookmarkBackgroundcolor =
      palette[Math.floor(Math.random() * palette.length)];
    return bookmarkBackgroundcolor;
  };

  const getRandomAnimation = () => {
    let animationTypes = [
      "animate__flipInX",
      "animate__bounceIn",
      "animate__headShake",
    ];
    let randomAnimationType =
      animationTypes[Math.floor(Math.random() * animationTypes.length)];
    return randomAnimationType;
  };

  const getRanodmColor = () => {
    let colors = [
      "lightcoral",
      "#64ce58",
      "#4ecece",
      "#ac71dc",
      "#dc7196",
      "#8041ff",
    ];
    let bgc = colors[Math.floor(Math.random() * colors.length)];
    return bgc;
  };
  const onAddSubjectToSubjectsList = (text) => {
    let date = new Date();
    let day = date.getDay();
    let time = `${date.toLocaleTimeString()} / ${
      weekdays[day]
    } / ${date.toLocaleDateString()}`;

    const newColor = getRanodmColor();
    const newRandomPosition = getRandomPositionLeft();
    const animationType = getRandomAnimation();
    const noteBackgroundColor = getRandomBackgroundColor();

    text = text.trim();
    if (text === "") {
      return false;
    }

    let newNote = {
      data: time,
      text,
      background: noteBackgroundColor,
      left: newRandomPosition,
      animation: animationType,
      bookmarkBackgroundcolor: newColor,
    };
    setSubjectArray([...subjectsArray, newNote]);

    const updatedObjList = [...categories];
     updatedObjList[currentItem].subjects = [
      ...updatedObjList[currentItem].subjects,
      newNote,
    ];

    setCategories(updatedObjList);
    localStorage.setItem("subjectslist", JSON.stringify(updatedObjList));

    setInputText("");
  };

  return (
    <div className="main">
       
        <>
          <div className="input-wrapper">
            <textarea
              className="main-input"
              value={inputText}
              placeholder={`what topic(s) did you study today in ${titleForPlaceholder}?`}
              onInput={(e) => setInputText(e.currentTarget.value)}
            />

            <button
              className="main-btn"
              onClick={() => {
                onAddSubjectToSubjectsList(inputText);
              }}
            >
              Add
            </button>
          </div>

          {selectedItem ? (
            <ul className="knowledge">
              {selectedItem.subjects.map((subject, subjectIndex) => {
                return (
                  <li
                    key={subjectIndex}
                    className={`topic animate__animated ${subject.animation}`}
                    style={{
                      left: subject.left || 0,
                      backgroundColor: subject.background,
                    }}
                  >
                    <div className="topic-wrapper">
                      <div className="topic-title">{subject.text}</div>
                      <div className="date">
                        {subject.data ? subject.data : ""}
                      </div>
                    </div>

                    <div
                      className="bookmark"
                      style={{
                        backgroundColor:
                          subject.bookmarkBackgroundcolor || "lightcoral",
                      }}
                    >
                      <div
                        className="triangle"
                        style={{
                          borderTop: `8px solid ${
                            subject.background || "#d7ffcc"
                          }`,
                        }}
                      ></div>
                    </div>
                    <BsTrash3
                      className="remove"
                      size={25}
                      onClick={() =>
                        handleRemovePredmet(selectedItem.id, subjectIndex)
                      }
                    />
                  </li>
                );
              })}
            </ul>
          ) : (
            <p className="helper-text animate__animated animate__fadeIn">
              You learned nothing yet about this subject
            </p>
          )}
          {!selectedItem || selectedItem.subjects.length === 0 ? (
            <p className="helper-text animate__animated animate__fadeIn">
              You learned nothing yet about this subject
            </p>
          ) : null}
        </>
      
    </div>
  );
};
