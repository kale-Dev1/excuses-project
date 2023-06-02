import Axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [excuse, setExcuse] = useState(null);

  const btnHandler = (e) => {
    const cat = e.target.innerText;

    Axios.get(
      `https://excuser-three.vercel.app/v1/excuse/${cat.toLowerCase()}/`
    ).then((res) => {
      setExcuse(res.data[0].excuse);
    });
    setName("kale");
  };

  return (
    <div className="app">
      <h1>Generate an Excuse</h1>
      <button onClick={btnHandler}>Party</button>
      <button onClick={btnHandler}>Family</button>
      <button onClick={btnHandler}>Office</button>
      <button onClick={btnHandler}>Gaming</button>
      <button onClick={btnHandler}>Funny</button>
      <button onClick={btnHandler}>Unbelievable</button>
      <h2>{excuse}</h2>
    </div>
  );
}

export default App;
