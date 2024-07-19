import { useState } from "react";
import Button from "./components/Button";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Header from "./components/Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <ButtonGradient />
      </div>
    </>
  );
}

export default App;
