// src/Components/Navbar.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';
import appFirebase from '../../Credentials';

const auth = getAuth(appFirebase);

const Navbar = ({ user }) => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/login'); 
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  };

  return (
    <nav className="flex items-center justify-between p-6 lg:px-20" aria-label="Global">
      <div className="flex lg:flex-1 items-center">
        <Link to="/" className="-m-1.5 p-1.5">
          <h1 className='font-bold'>Alert</h1>
        </Link>
      </div>
      <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-6 items-center">
        {user ? (
          <div className="flex items-center gap-4">
            <span className="text-sm font-semibold leading-6 text-gray-900">Hola!, {user.email}</span>
            <button onClick={handleLogout} className="text-sm font-semibold leading-6">Logout</button>
            <Link to="/registro-alertas" className="text-sm font-semibold leading-6">Registro</Link>
            <Link to="/alerta" className="text-sm font-semibold leading-6">Alertas</Link>
          </div>
        ) : (
          <Link to="/login" className="text-sm font-semibold leading-6 p-3 rounded-lg w-auto text-center">Login/Sign-In</Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
