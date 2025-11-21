import { useState } from 'react'
import Start from './components/start';
import Landing from './components/landing';
import Login from './components/login';
import Clasico from './components/clasico';
import Criollo from './components/criollo';
import Guacamole from './components/guacamole';
import Pedido from './components/pedido';

function App() {
  const [user, setUser] = useState<string>("");
  const [page, setPage] = useState<
    "start" | "login" | "landing" | "guacamole" | "criollo" | "clasico"| "pedido">("start");

 if (user) {
    switch (page) {
      case "landing":
        return <Landing setPage={setPage} user={user}  setUser={setUser}/>; 
      case "criollo":
        return <Criollo setPage={setPage} />; 
      case "clasico":
        return <Clasico setPage={setPage}/>; 
      case "guacamole":
        return <Guacamole setPage={setPage}/>; 
      case "pedido":
        return <Pedido setPage={setPage} />; 
      default:
        return <Landing setPage={setPage} user={user} setUser={setUser}/>;
          }
}
    switch (page) {
      case "login":
        return <Login user={user} setUser={setUser} setPage={setPage} />; 
      default:
        return <Start setPage={setPage} />;
  }
  
}

export default App;
