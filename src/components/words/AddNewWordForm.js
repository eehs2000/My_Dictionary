import Card from "../ui/Card";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { createDict } from "../../redux/modules/Dict";
import { useNavigate } from "react-router-dom";
import classes from "./AddNewWordForm.module.css";
import { addDictFB } from "../../redux/modules/Dict";

import { collection, addDoc } from "firebase/firestore";

function AddNewWordForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const wordRef = useRef();
  const descriptionRef = useRef();
  const exampleRef = useRef();

  function AddNewWordHandler(event) {
    event.preventDefault();

    const enteredWord = wordRef.current.value;
    const enteredDescription = descriptionRef.current.value;
    const enteredExample = exampleRef.current.value;

    const wordData = {
      word: enteredWord,
      description: enteredDescription,
      example: enteredExample,
    };

    dispatch(addDictFB(wordData));
    navigate("/");
  }

  return (
    <Card>
      <form onSubmit={AddNewWordHandler}>
        <div>
          <label htmlFor="word">Word</label>
          <input type="text" ref={wordRef}></input>
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <textarea id="description" ref={descriptionRef}></textarea>
        </div>
        <div>
          <label htmlFor="example">Example</label>
          <input type="text" ref={exampleRef}></input>
        </div>
        <div>
          <button className={classes.btn}>Add New Word</button>
        </div>
      </form>
    </Card>
  );
}

export default AddNewWordForm;
