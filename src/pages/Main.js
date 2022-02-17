import { useSelector } from "react-redux";
import WordsList from "../components/words/WordsList";
import { Link } from "react-router-dom";
import classes from "./Main.module.css";

function Main() {
  const wordList = useSelector(state => state.Dict.wordData);

  // console.log(wordList);

  return (
    <section>
      <h1>My Dictionary</h1>
      <WordsList words={wordList} />
      <div>
        <Link to="/add-new-word">
          <button className={classes.addingBtn}>+</button>
        </Link>
      </div>
    </section>
  );
}

export default Main;
