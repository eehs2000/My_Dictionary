import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import AddNewWord from "./pages/AddNewWord";
import Main from "./pages/Main";
import { loadDictFB } from "./redux/modules/Dict";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadDictFB());
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/add-new-word" element={<AddNewWord />} />
    </Routes>
  );
}

export default App;
