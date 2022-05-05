
const Navbar = ({seleziona}) => {

    

    
  return (
    <div className="topnav">
      <a className="active" onClick={()=>seleziona(0)}>
        Home
      </a>
      <a onClick={()=>seleziona(1)}>Contatore</a>
      <a onClick={()=>seleziona(2)}>Todos</a>
      <a onClick={()=>seleziona(3)}>Death Note</a>
    </div>
  );
};

export default Navbar;
