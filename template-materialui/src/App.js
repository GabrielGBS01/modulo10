import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/header";
import ListarTarefa from "./pages/tarefa/ListarTarefa";
import Login from "./pages/Login/index";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          {/* Rota para a página de Login */}
          <Route path="/" element={<Login />} />
          {/* Rota para a página de Listar Tarefa */}
          <Route path="/pages/tarefa/ListarTarefa" element={<ListarTarefa />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
