import "../assets/styles/start.css"

type StartProps = {setPage: React.Dispatch< //función para cambiar la página que se muestra
    React.SetStateAction<
      "start" | "login" | "landing" | "guacamole" | "criollo" | "clasico"| "pedido"
    >
  >;
};

function Start({setPage}: StartProps) {
return (
    <div className="estart">
        <img src="/img/logox4.png" alt="Logo" style={{ width: "721px", height: "721px" }}/>
        <button onClick={() => setPage("login")}></button>
    </div>
)
}

export default Start;

