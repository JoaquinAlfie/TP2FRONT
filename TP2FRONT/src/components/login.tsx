import "../assets/styles/login.css"
import React, { useState } from "react";

type LoginPropos = {
    user: string;
    setUser: React.Dispatch<React.SetStateAction<string>>;
    setPage: React.Dispatch< //función para cambiar la página que se muestra
    React.SetStateAction<
      "start" | "login" | "landing" | "guacamole" | "criollo" | "clasico"| "pedido"
    >
  >;
};

function Login({setPage, setUser}: LoginPropos) {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");

      const handleLogin = async () => {
        if (!name || !password) {
          setError("Todos los campos son obligatorios");
          return;
        } else {
          setUser(name);
          setPage("landing");
        }
      }
return (
    <div className="loginpag">
        <img src="/img/logox4.png" alt="Logo" style={{ width: "721px", height: "721px" }}/>
        <div className="logueo">
          <h2 className="logintitulo">Iniciar Sesion</h2>
            <section className="usuario">
              <input id="usuario" name="usuario" placeholder="Usuario" maxLength={10} value={name} onChange={(e)=> setName (e.target.value)}/>
            </section>
            <section className="contra">
              <input id="contra" name="contra" placeholder="Contraseña" maxLength={20} type={showPassword ? "text" : "password"} value={password} onChange={(e)=> setPassword (e.target.value)}/>
              <a id="ocultar" onClick={(e) => { e.preventDefault(); setShowPassword(!showPassword);}}>
                <img src="/img/invisible.png" alt="invisible" style={{ width: "40px", height: "39px" }}/>
              </a>
            </section>
            <button className="enter" onClick={handleLogin}>Iniciar Sesión</button>
        </div>
        {error && <p className="obligatorios">{error}</p>}
    </div>
)
}

export default Login;