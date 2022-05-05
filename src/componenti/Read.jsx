import { useState } from "react";
import Update from "./Update";
import Delete from "./Delete";
const Read = ({ todos,modTodo,eliminami }) => {
  const [mostra, setMostra] = useState(true);

  const definisciMostra = () => {
    setMostra(!mostra);
  };
  

  
    return (
        <>
      
      {todos===false ? (<h3>la lista di todos è vuota</h3>) :(
          <>
      
        <ul className={mostra ? "mostra" : ""}>
          {todos.map((todo, index) => (
            <div key={index}>
              <li>nome:{todo.nome}</li>
              <li>id:{todo.id}</li>  
              {todo.modificato===true ? <li>modificato</li>:null}
              <Update id={todo.id} action={modTodo} ></Update>
              <Delete id ={todo.id} action={eliminami}></Delete>
              </div>
              
            
          ))}
        </ul>
        <button onClick={definisciMostra}>mostra lista</button>
        </>

         ) } 
          </>);
};
export default Read;
