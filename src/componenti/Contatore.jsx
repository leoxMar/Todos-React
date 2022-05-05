import { useEffect, useState } from "react";

const Contatore = () => {
  const [count1, setCount1] = useState(100);
  const manageCount1 = () => {
    
     setCount1(count1 + 1);
     setCount2(count2 - 1);}
  ;
  useEffect(() => {}, [count1]);
  const [count2, setCount2] = useState(100);
  const manageCount2 = () => {
    setCount2(count2 + 1);
    setCount1(count1 - 1);
  };
  useEffect(() => {}, [count2]);
  if (count1 == 118) setCount2("cendo dicottoooooo");
  return (
    <>
      <div className="cardStyle">
        <h2>un numero che sale:{count1}</h2>
        <button onClick={manageCount1}>sale questo</button>
        <h2>un numero che scende:{count2}</h2>
        <button onClick={manageCount2}>sale questo</button>
      </div>
    </>
  );
};
export default Contatore;
