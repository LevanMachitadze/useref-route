import { useState, useRef } from 'react';
import './App.css';

function App() {
  // let normalVar = 0; // ჩვეულებრივი ცვლადი
  const [click, setClick] = useState(0);

  const refVar = useRef(0);

  console.log(refVar.current);

  const handleClick = () => {
    // normalVar += 1; // გავზარდოთ ნორმალური ცვლადი
    setClick(click + 1);
    refVar.current += 1;
    console.log('use Ref', refVar.current);
  };

  return (
    <>
      <div>
        <p>Button Clicked {click} Times</p>
        <p>Normal Variable: {refVar.current}</p>
        <button onClick={handleClick}>Click me</button>
      </div>
    </>
  );
}

export default App;
