import "../assets/styles/clasico.css"

type ClasicoProps = {
    setPage: React.Dispatch< //función para cambiar la página que se muestra
    React.SetStateAction<
      "start" | "login" | "landing" | "guacamole" | "criollo" | "clasico"| "pedido"
    >
  >;
};

function Clasico({setPage}: ClasicoProps) {
return (
    <div className="estart">
        <img src="/img/logox4.png" alt="Logo" style={{ width: "721px", height: "721px" }}/>
        <button className="iniciar" onClick={() => setPage("login")}></button>
    </div>
)
}

export default Clasico;