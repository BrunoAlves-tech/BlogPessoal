import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import { AuthProvider } from './contexts/AuthContext';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Cadastro from './pages/cadastro/Cadastro';
import ListaTemas from './components/temas/listatemas/ListaTemas';
import FormTema from './components/temas/formtema/FormaTema';
import DeletarTema from './components/temas/deletartema/DeletarTema';
import ListaPostagens from './components/postagens/ListaPostagens';
import FormPostagem from './components/postagens/formpostagem/FormPostagem';
import DeletarPostagem from './components/temas/deletarpostagem/DeletarPostagem';
import Perfil from './pages/lperfil/Perfil';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';



function App() {

  return (
    <>
      <AuthProvider>
        <ToastContainer />
        <BrowserRouter>
          <Navbar />
          <div className="min-h-[80vh]">
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/login" element={<Login />} />
              <Route path="/home" element={<Home />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/temas" element={<ListaTemas />} />
              <Route path="/cadastrartema" element={<FormTema />} />
              <Route path="/editartema/:id" element={<FormTema />} />
              <Route path="/deletartema/:id" element={<DeletarTema />} />
              <Route path="/postagens" element={<ListaPostagens />} />
              <Route path="/cadastrarpostagem" element={<FormPostagem />} />
              <Route path="/editarpostagem/:id" element={<FormPostagem />} />
              <Route path="/deletarpostagem/:id" element={<DeletarPostagem />} />
              <Route path="/perfil" element={<Perfil />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider >
    </>

  );
}

export default App;