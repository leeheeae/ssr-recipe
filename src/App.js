import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from './components/Menu';
import RedPage from './pages/RedPage';
import BluePage from './pages/BluePage';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Menu />
        <hr />
        <Routes>
          <Route path='/' element={<RedPage />} />
          <Route path='/red' element={<RedPage />} />
          <Route path='/blue' element={<BluePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
