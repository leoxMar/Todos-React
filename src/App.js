
import { useState } from "react";
import "./App.css";
import Contatore from "./componenti/Contatore";
import Home from "./componenti/Home";
import Navbar from "./componenti/Navbar";
import TaskManager from "./componenti/TaskManger";
import Diario from "./Diario/Diario";


function App() {

  const [seleziona, setSeleziona] = useState(0)

  return (
    <>

      <Navbar seleziona={setSeleziona}></Navbar>
      {seleziona === 0 ? <Home></Home> : seleziona === 1 ? <Contatore></Contatore> : seleziona === 2 ? <TaskManager></TaskManager> : seleziona===3 ?<Diario></Diario>:console.log('nope')}



    </>
  );
}

export default App;
