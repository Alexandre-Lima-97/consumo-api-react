import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';

import store from './store';
import GlobalStyle from './styles/globalstyles';
import Header from './components/Header';
import AppRoutes from './routes';

function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
      <Header />
      <AppRoutes />
      <GlobalStyle />
      <ToastContainer autoClose={3000} className="toast-container"/>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
