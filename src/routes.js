import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Feira from './pages/Feira';
import { UsuarioProvider } from './common/context/Usuario';
import { CarrinhoProvider } from './common/context/Carrinho';
import { PagamentoProvider } from './common/context/Pagamentos';
import Carrinho from './pages/Carrinho';

function AppRoutes() {
  return (
    <BrowserRouter>
      <UsuarioProvider>  
          <CarrinhoProvider>
            <PagamentoProvider>
              <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/feira' element={<Feira />} />
                <Route path='/carrinho' element={<Carrinho />} />
              </Routes>
            </PagamentoProvider>
          </CarrinhoProvider>
      </UsuarioProvider>
    </BrowserRouter>
  );
}

export default AppRoutes;
