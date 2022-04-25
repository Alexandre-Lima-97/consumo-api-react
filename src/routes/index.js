import React from 'react';
import { Route, Routes} from 'react-router-dom';

 import PrivateRoute from './MyRoute';
import Login from '../pages/Login';
import Page404 from '../pages/Page404';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={ <Login /> } />
      <Route path="/" element={<Page404 /> } />
      <Route path="*" element={ <PrivateRoute> <Page404 /></PrivateRoute> } />
    </Routes>
  );
}
