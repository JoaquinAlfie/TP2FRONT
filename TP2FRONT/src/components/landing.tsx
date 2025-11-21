import "../assets/styles/landing.css"

type LandingProps = {
    user: string;
    setUser: React.Dispatch<React.SetStateAction<string>>;
    setPage: React.Dispatch< //función para cambiar la página que se muestra
    React.SetStateAction<
      "start" | "login" | "landing" | "guacamole" | "criollo" | "clasico"| "pedido"
    >
  >;
};

function Landing({setPage}: LandingProps) {
return (
    <div className="estart">
        <img src="/img/logox4.png" alt="Logo" style={{ width: "721px", height: "721px" }}/>
        <button className="iniciar" onClick={() => setPage("login")}></button>
    </div>
)
}

export default Landing;