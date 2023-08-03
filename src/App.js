import "./App.css";
import "./index.css";
import { Main } from "./components/Main";
import { Sidebar } from "./components/Sidebar";
import { useState} from "react";
import { Footer } from "./components/Footer";

let allSubjects = [];

if (allSubjects.length === 0) {
  if (localStorage.getItem("subjectslist")) {
    allSubjects = JSON.parse(localStorage.getItem("subjectslist"));
  }
}

let len = () => {
  if (allSubjects.length >= 1) {
    return allSubjects.length - 1;
  } else {
    return 0;
  }
};

let appCreatedYear = "2023";

function App() {
  const [categories, setCategories] = useState(allSubjects);
  const [currentItem, setCurrentItem] = useState(len());
  const [show, setShow] = useState(true);

  const setCurrentI = (id) => {
    setCurrentItem(id);
  };

  const handleRemovePredmet = (objIndex, predmetIndex) => {
    let updatedObjList = [...categories];
    const updatedObjIndex = updatedObjList.findIndex(
      (el) => el.id === objIndex
    );

    if (updatedObjIndex !== -1) {
      updatedObjList[updatedObjIndex].subjects.splice(predmetIndex, 1);
      setCategories(updatedObjList);
      localStorage.setItem("subjectslist", JSON.stringify(updatedObjList));
    }
  };

  let selectedItem;

  if (categories.length && categories.length >= 1) {
    selectedItem = categories.find((_, index) => {
      return index === currentItem;
    });
  } else {
    selectedItem = 0;
  }

  const handleRemoveItem = (objIndex) => {
    const updatedObjList = categories.filter((el) => el.id !== objIndex);

    setCategories(updatedObjList);
    localStorage.setItem("subjectslist", JSON.stringify(updatedObjList));
    setCurrentI(JSON.parse(localStorage.getItem("subjectslist")).length - 1);
  };

  return (
    <div className="App">
      
      <div className="wrapper">
        <Main
          className="main"
          handleRemovePredmet={handleRemovePredmet}
          selectedItem={selectedItem}
          categories={categories}
          setCategories={setCategories}
          currentItem={currentItem}
          setCurrentItem={setCurrentItem}
          show={show}
          setShow={setShow}
        />
        <Sidebar
          subjects={categories}
          setCategories={setCategories}
          currentItem={currentItem}
          setCurrentI={setCurrentI}
          len={len}
          handleRemoveItem={handleRemoveItem}
          show={show}
          setShow={setShow}
        />
      </div>
      
      <Footer year={appCreatedYear} />
    </div>
  );
}

export default App;
