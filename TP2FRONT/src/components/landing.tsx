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

function Landing({setPage, user}: LandingProps) {
return (
    <div className="landingpag">
      <header className="navbar">
        <img src="/img/logochico.png" alt="Logo" className="eluser" style={{ width: "187.23px", height: "187.23px" }}/>
        <button className="usuariolanding">{user}</button>
      </header>
        <h1 className="disponible">DISPONIBLE</h1>
      <section className="panchos">
        <section className="clasicopancho">
          <a className="clasicoboton" onClick={() => setPage("clasico")}>
            <img src="/img/clasico.png" alt="Logo" style={{ width: "407px", height: "325px" }}/>
          </a>
          <p className="precioclasico">
            PANCHO CLASICO 
            $2500
          </p>
        </section>
        <section className="guacamolepancho">
          <a className="guacamoleboton" onClick={() => setPage("guacamole")}>
            <img src="/img/guacamole.png" alt="Logo" style={{ width: "407px", height: "325px" }}/>
          </a>
          <p className="precioguacamole">
            PANCHO GUACAMOLE
            $3000
          </p>
        </section>
        <section className="criollopancho">
          <a className="criolloboton" onClick={() => setPage("criollo")}>
            <img src="/img/criollo.png" alt="Logo" style={{ width: "407px", height: "325px" }}/>
          </a>
          <p className="preciocriollo">
            PANCHO CRIOLLO
            $3000
          </p>
        </section>
      </section>
    </div>
)
}

export default Landing;