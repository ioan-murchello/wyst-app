import { useState } from "react";
import { Input } from "./Input";
import { CiTrash } from "react-icons/ci";
import appLogo from "../WystLogo.png";
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoMdClose } from "react-icons/io";

export const Sidebar = ({
  subjects,
  len,
  setCategories,
  setCurrentI,
  currentItem,
  handleRemoveItem,
  show,
  setShow
}) => {
   
  let style = "aside-one ";
  if (show) {
    style = "aside-one show";
  }
  console.log(style, "sss");

  return (
    <>
      <div className="burger" onClick={() => setShow((show) => !show)}>
        {show ? <IoMdClose /> : <GiHamburgerMenu />}
      </div>
      <aside className={style}>
        <div className="logo-wrapper">
          <div className="logo">
            {/* <div className="letter-wrapper">
            <div className="w letter">W</div>
            <div className="y letter">Y</div>
            <div className="l letter">S</div>
            <div className="t letter">T</div>
          </div> */}
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
