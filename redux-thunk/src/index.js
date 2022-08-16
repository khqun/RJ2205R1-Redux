import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import store from './redux/store';
import { Provider } from 'react-redux';
import UserLogin from './components/Login';
import UserData from './components/User';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<UserLogin />} />
          <Route path='/user-data' element={<UserData />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
);
