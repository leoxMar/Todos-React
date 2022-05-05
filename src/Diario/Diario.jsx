import { useRef, useState } from "react";
import MostraContenuto from "./MostraContenuto";

const Diario = () => {
  const inputRef1 = useRef();
  const inputRef2 = useRef();
  const [mostra, setMostra] = useState(true);
  const [diario, setDiario] = useState([]);
  const [id, setId] = useState(1);
  const [contenuto, setContenuto] = useState("");
  const creaNota = (e) => {
    setId(id + 1);

    e.preventDefault();
    setDiario([
      ...diario,
      {
        nome: inputRef1.current.value,
        id: id,
        contenuto: inputRef2.current.value,
      },
    ]);
  };

  const definisciMostra = () => {
    setMostra(!mostra);
  };
  const prendiContenuto = (id) => {
    setContenuto(diario.find((el) => el.id == id));
  };
  return (
    <>
      <div className="cardStyle">
        <form onSubmit={creaNota}>
          <input type="text" name="name" ref={inputRef1} placeholder="titolo" />

          <input
            type="text"
            name="name"
            ref={inputRef2}
            placeholder="contenuto"
          />
          <br />
          <input type="submit" />
        </form>
      </div>
      {diario === false ? (
        <h3>non ci sono note nel diario</h3>
      ) : (
        <>
          <div className="cardStyle">
            <div className={mostra ? "mostra" : ""}>
              {!contenuto ? (
                <>
                  {diario.map((nota, index) => (
                    <div key={index}>
                      <p>titolo: {nota.nome}</p>
                      <br />
                      <button onClick={() => prendiContenuto(nota.id)}>
                        vedi contenuto
                      </button>
                    </div>
                  ))}
                </>
              ) : (
                <>
                  <MostraContenuto contenuto={contenuto}></MostraContenuto>
                </>
              )}
            </div>
            <button onClick={() => setContenuto()}>vai ai titoli</button>
            <button onClick={definisciMostra}>mostra lista</button>
          </div>
        </>
      )}
    </>
  );
};

export default Diario;
