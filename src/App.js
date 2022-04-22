import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './styles/globalstyles';

import Header from './components/Header';
import AppRoutes from './routes';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <AppRoutes />
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
