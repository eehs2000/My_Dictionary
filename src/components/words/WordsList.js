import Words from "./Words";
import classes from "./WordsList.module.css";

function WordsList(props) {
  return (
    <ul className={classes.list}>
      {props.words.map(word => (
        <Words
          key={word.id}
          //word = {word}
          id={word.id}
          word={word["word"]}
          description={word.description}
          example={word.example}
        />
      ))}
    </ul>
  );
}

export default WordsList;
