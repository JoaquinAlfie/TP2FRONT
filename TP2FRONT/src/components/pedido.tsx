import "../assets/styles/pedido.css"

type PedidoProps = {
    setPage: React.Dispatch< //función para cambiar la página que se muestra
    React.SetStateAction<
      "start" | "login" | "landing" | "guacamole" | "criollo" | "clasico"| "pedido"
    >
  >;
};

function Pedido({setPage}: PedidoProps) {
return (
    <div className="pedidopag">
      <header className="navbar">
        <a className="volver" onClick={() => setPage("landing")}>
          <img src="/img/volver.png" alt="Logo" style={{ width: "152px", height: "78.24px" }}/>
        </a>
      </header>
      <main className="mainpedido">
        <h1 className="enviatitulo">ENVIA TU PEDIDO</h1>
        <section className="codigo">
          <input id="codigo" name="codigo" placeholder="Codigo postal" maxLength={15}/>
        </section>
        <section className="direccion">
          <input id="direccion" name="direccion" placeholder="Dirección" maxLength={30}/>
        </section>
        <section className="departamento">
          <input id="departamento" name="departamento" placeholder="Departamento (si es necesario)" maxLength={30}/>
        </section>
        <button className="comprar">COMPRAR</button>
      </main>
    </div>
)
}

export default Pedido;