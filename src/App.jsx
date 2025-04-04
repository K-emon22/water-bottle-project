import {Suspense} from "react";
import "./App.css";
import Bottles from "./components/Bottles";

// const BottlesPromise = fetch("/bottles.json").then((res) => res.json());

const BottlesPromise = async () => {
  const PromiseDAta = await fetch("/bottles.json");
  return PromiseDAta.json();
};

function App() {
  let PromiseBottle = BottlesPromise();
  return (
    <>
      <h1>Vite + React</h1>
      <Suspense>
        <Bottles PromiseBottle={PromiseBottle}> </Bottles>
      </Suspense>
    </>
  );
}

export default App;
