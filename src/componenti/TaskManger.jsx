import { useRef, useState } from "react";
import Create from "./Create";
import Read from "./Read";

const TaskManager = () => {
  const inputRef = useRef();

  const [todos, setTodos] = useState([]);
  const [id, setId] = useState(1);

  const creaTodo = (e) => {
    setId(id + 1);

    e.preventDefault();
    setTodos([...todos, { nome: inputRef.current.value, id: id, modificato:false }]);
  };
  const modTodo=(id)=>{
      setTodos([...todos.filter((todo)=> todo.id !==id),{...todos.find((todo)=> todo.id === id),nome:inputRef.current.value,modificato:true}])
  }
  const eliminami=(id)=>{
      setTodos([...todos.filter((todo)=> todo.id !==id)])
  }
  return (
    <><h1>Un altro inutile Todos</h1>
    <div className="corpo">
      <Create crea={creaTodo} input={inputRef}></Create>
      <Read todos={todos}  modTodo={modTodo} eliminami={eliminami} ></Read>
      </div>
    </>
  );
};

export default TaskManager;

// Aggiungere al componente precedentemente creato TASK Manager nella sezione Read
//  un wrapper attorno ad ogni elemento della lista, 
//  il wrapper deve essere visibile solo nel caso l'elemento sia stato modificato tramite la funzione data nel pulsante update 

//  Hint 1: E' possibile aggiungere un flag "modificato" a tutti gli oggetti
