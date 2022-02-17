import { db } from "../../firebase";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

const LOAD = "Dict/LOAD";
const CREATE = "Dict/CREATE";
const DELETE = "Dict/DELETE";
const UPDATE = "Dict/UPDATE";

const initialState = {
  wordData: [
    { id: "1", word: "word", description: "description", example: "example" },
  ],
};

export const loadDict = Dict => {
  return { type: LOAD, Dict };
};

export const createDict = Dict => {
  return { type: CREATE, Dict };
};

export const deleteDict = Dict => {
  return { type: DELETE, Dict };
};

//middlewares
export const loadDictFB = () => {
  return async function (dispatch) {
    const word_data = await getDocs(collection(db, "words"));

    let word_list = [];
    word_data.forEach(doc => {
      // console.log(doc.data);
      word_list.push({ id: doc.id, ...doc.data() });
    });
    // console.log(word_list);
    dispatch(loadDict(word_list));
  };
};

export const addDictFB = wordData => {
  return async function (dispatch) {
    const docRef = await addDoc(collection(db, "words"), wordData);
    const _word = await getDoc(docRef);
    const word_data = { id: _word.id, ..._word.data() };
    // console.log((await getDoc(docRef)).data());
    dispatch(createDict(word_data));
  };
};

export const deleteDictFB = word_id => {
  return async function (dispatch, getState) {
    if (!word_id) {
      window.alert("no matching id");
      return;
    }
    const docRef = doc(db, "words", word_id);
    await deleteDoc(docRef);

    dispatch(deleteDict(word_id));
  };
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    // do reducer stuff
    case "Dict/LOAD": {
      // console.log(action.Dict);
      return { wordData: action.Dict };
    }

    case "Dict/CREATE": {
      const new_word_list = [...state.wordData, action.Dict];
      // console.log(new_word_list)
      return { wordData: new_word_list };
    }

    case "Dict/DELETE": {
      const new_word_list = state.wordData.filter(word => {
        // console.log(word.id)
        // console.log(action.Dict.id)
        return word.id !== action.Dict;
      });
      // console.log(new_word_list)
      return { wordData: new_word_list };
    }

    default:
      return state;
  }
}
