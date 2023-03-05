import MainScreen from "./components/MainScreen";
import Footer from "./components/FooterScreen";
import questions from "../src/mock"
import { useState } from "react";

export default function App() {
  const [flipened, setFlipened] = useState(0);
  let auxFlipened =0;

function flips(){
  auxFlipened++
  setFlipened(auxFlipened);
  countingFlips(auxFlipened)
}
function countingFlips(){
  return `${(auxFlipened/2)}/${questions.length} CONCLUÍDOS`
}
 
  return (
    <>
      <MainScreen
        flips={flips}
      />
      <Footer
      countingFlips={countingFlips}
      />
    </>
  );
}


