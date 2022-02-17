import { useDispatch } from "react-redux";
import { deleteDict, deleteDictFB } from "../../redux/modules/Dict";
import Card from "../ui/Card";
import classes from "./Words.module.css";

function Words(props) {
  //{word}
  const dispatch = useDispatch();
  // console.log(props);
  const deleteCard = () => {
    dispatch(deleteDictFB(props.id));
  };

  return (
    <li className={classes.item}>
      <Card>
        <div>
          <h3>Word</h3>
          <p>{props.word}</p>
        </div>
        <div>
          <h3>Description</h3>
          <p>{props.description}</p>
        </div>
        <div>
          <h3>Example</h3>
          <p className={classes.example}>{props.example}</p>
        </div>
        <div>
          <button className={classes.btn} onClick={deleteCard}>
            delete
          </button>
        </div>
      </Card>
    </li>
  );
}

export default Words;
