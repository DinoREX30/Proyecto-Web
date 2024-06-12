// src/App.js
import { useRoutes, BrowserRouter } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import appFirebase from '../../Credentials';

import Home from '../Home';
import Alert from '../Alert';
import RegistroAlert from '../RegistroAlert';
import NotFound from '../NotFound';
import Login from '../Login';
import Navbar from '../../Components/Navbar';
import { AlertProvider } from '../../Context/AlertContext';
import Nosotros from '../Nosotros';
import Funcionamiento from '../Funcionamiento';
import './index.css';



const auth = getAuth(appFirebase);

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/alerta', element: <Alert /> },
    { path: '/registro-alertas', element: <RegistroAlert /> },
    { path: '/login', element: <Login /> },
    { path: '/nosotros', element: <Nosotros /> },
    { path: '/funcionamiento', element: <Funcionamiento /> },
    { path: '/*', element: <NotFound /> },
  ]);

  return routes;
};

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user ? user : null);
    });

    return () => unsubscribe();
  }, []);

  return (
    <BrowserRouter>
      <AlertProvider>
        <Navbar user={user} />
        <AppRoutes />
      </AlertProvider>
    </BrowserRouter>
  );
}

export default App;
