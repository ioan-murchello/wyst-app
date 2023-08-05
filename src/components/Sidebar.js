import { Input } from "./Input";
import { CiTrash } from "react-icons/ci";
import appLogo from "../WystLogo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";

export const Sidebar = ({
  subjects,
  len,
  setCategories,
  setCurrentI,
  currentItem,
  handleRemoveItem,
}) => {
  const [initialX, setInitialX] = useState(null);
  const [isOpen, setIsOpen] = useState(true);

  const handleTouchStart = (event) => {
    setInitialX(event.touches[0].clientX);
  };

  const handleTouchMove = (event) => {
    if (!initialX) return;

    const currentX = event.touches[0].clientX;
    const diffX = currentX - initialX;

    if (!isOpen && diffX > 0) return;
    if (isOpen && diffX < 0) return;
  };

  const handleTouchEnd = (event) => {
    const currentX = event.changedTouches[0].clientX;
    const diffX = currentX - initialX;
    console.log(diffX);

    if (isOpen && diffX > 100) {
      setIsOpen(false);
    } else if (!isOpen && diffX > 100) {
      setIsOpen(true);
    }

    setInitialX(null);
  };

  return (
    <>
      <div className="burger" onClick={() => setIsOpen((isOpen) => !isOpen)}>
        {isOpen ? <IoMdClose /> : <GiHamburgerMenu />}
      </div>
      <aside
        className={`aside-one ${isOpen ? "show" : ""}`}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="logo-wrapper">
          <div className="logo">
            <img className="img-logo" src={appLogo} alt="Logo" />
          </div>
        </div>
        <div className="input-wrapper-asside">
          <Input
            subjects={subjects}
            setCategories={setCategories}
            setCurrentI={setCurrentI}
            currentItem={currentItem}
            len={len}
          />
        </div>

        {subjects.length >= 1 ? (
          <ul className="sidebar-list">
            {subjects.map((obj, index) => {
              return (
                <li
                  key={obj.id}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentI((old) => index);
                  }}
                  className={
                    index === currentItem ? "predmet active" : "predmet"
                  }
                >
                  <div className="predmet-title">{obj.title}</div>
                  <div className="date-of-created">{obj.date}</div>
                  <div className="trash-wrapper">
                    <CiTrash
                      onClick={(e) => {
                        e.stopPropagation();
                        handleRemoveItem(obj.id);
                      }}
                      className="remove-subject"
                      size={30}
                    />
                  </div>
                </li>
              );
            })}
          </ul>
        ) : (
          <div className="info-text">
            So far you have not studied any subject
          </div>
        )}
      </aside>
      <aside className="aside-two">
        <div className="logo-wrapper">
          <div className="logo">
            <img className="img-logo" src={appLogo} alt="Logo" />
          </div>
        </div>
        <div className="input-wrapper-asside">
          <Input
            subjects={subjects}
            setCategories={setCategories}
            setCurrentI={setCurrentI}
            currentItem={currentItem}
            len={len}
          />
        </div>

        {subjects.length >= 1 ? (
          <ul className="sidebar-list">
            {subjects.map((obj, index) => {
              return (
                <li
                  key={obj.id}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentI((old) => index);
                  }}
                  className={
                    index === currentItem ? "predmet active" : "predmet"
                  }
                >
                  <div className="predmet-title">{obj.title}</div>
                  <div className="date-of-created">{obj.date}</div>
                  <div className="trash-wrapper">
                    <CiTrash
                      onClick={(e) => {
                        e.stopPropagation();
                        handleRemoveItem(obj.id);
                      }}
                      className="remove-subject"
                      size={30}
                    />
                  </div>
                </li>
              );
            })}
          </ul>
        ) : (
          <div className="info-text">
            So far you have not studied any subject
          </div>
        )}
      </aside>
    </>
  );
};
