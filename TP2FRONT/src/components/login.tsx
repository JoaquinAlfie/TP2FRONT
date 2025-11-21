import "../assets/styles/login.css"

type LoginPropos = {
    user: string;
    setUser: React.Dispatch<React.SetStateAction<string>>;
    setPage: React.Dispatch< //función para cambiar la página que se muestra
    React.SetStateAction<
      "start" | "login" | "landing" | "guacamole" | "criollo" | "clasico"| "pedido"
    >
  >;
};

function Login({setPage}: LoginPropos) {
return (
    <div className="estart">
        <img src="/img/logox4.png" alt="Logo" style={{ width: "721px", height: "721px" }}/>
        <div className="logueo">
          <h2 className="logintitulo">Iniciar Sesion</h2>
            <section className="usuario">
              <input id="usuario" name="usuario" placeholder="Usuario" maxLength={10}/>
            </section>
            <section className="contra">
              <input id="contra" name="contra" placeholder="Contraseña" maxLength={20}/>
              <a id="ocultar">
                <img src="/img/invisible.png" alt="invisible" style={{ width: "40px", height: "34px" }}/>
              </a>
            </section>
            <button className="enter" onClick={() => setPage("login")}>Iniciar Sesión</button>
        </div>
    </div>
)
}

export default Login;