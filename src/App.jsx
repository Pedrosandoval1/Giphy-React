import { useState, useEffect } from "react";
import * as ApiTra from "./assets/componest/Confing-Url";
import Search from "./assets/componest/search/Search";
import Card from "./assets/componest/targetTrending/Card";
import SliderRange from "./assets/componest/slider/SliderRange";
import "./App.css";

function App() {
  const [targetSearch, setTargetSearch] = useState([]);
  const [numberOne, setNumberOne] = useState(0);
  const [value, setValue] = useState(0);
  const DataSearch = async () => {
    const list = await ApiTra.FetchSearch(value, numberOne);
    setTargetSearch(list.data);
  };
  const Change = (e) => {
    if (value) {
      return setNumberOne(e.target.value);
    }
  };
  useEffect(() => {
    DataSearch(value, numberOne);
  }, [value, numberOne]);

  return (
    <div>
      <Search setValue={setValue} />
      <SliderRange Change={Change} />
      <h3>numeros de gif que quieres que se muestren</h3>
      <h1>{numberOne}</h1>
      <Card targetSearch={targetSearch} />
    </div>
  );
}
export default App;
