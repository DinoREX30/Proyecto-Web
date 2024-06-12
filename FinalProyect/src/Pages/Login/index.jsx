import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import appFirebase from '../../Credentials';
import Layout from '../../Components/Layout';

const auth = getAuth(appFirebase);

export default function Login() {
  const [registrando, setRegistrando] = useState(false);
  const [alerta, setAlerta] = useState('');
  const navigate = useNavigate();

  const handleAuth = async (e) => {
    e.preventDefault();
    const correo = e.target.email.value;
    const password = e.target.password.value;

    try {
      if (registrando) {
        await createUserWithEmailAndPassword(auth, correo, password);
        navigate('/');
      } else {
        await signInWithEmailAndPassword(auth, correo, password);
        navigate('/');
      }
    } catch (error) {
      setAlerta(error.message);
      console.error('Error en la autenticación:', error.message);
    }
  };

  return (
    <Layout>
      <div className="bg-white font-family-karla h-screen">
        <div className="w-full flex flex-wrap">
          <div className="w-full md:w-1/2 flex flex-col">
            <div className="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
              <p className="text-center text-3xl">Bienvenido</p>
              {alerta && <div className="text-red-600">{alerta}</div>}
              <form className="flex flex-col pt-3 md:pt-8" onSubmit={handleAuth}>
                <div className="flex flex-col pt-4">
                  <label htmlFor="email" className="text-lg">Email</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="your@email.com"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
                <div className="flex flex-col pt-4">
                  <label htmlFor="password" className="text-lg">Password</label>
                  <input
                    type="password"
                    id="password"
                    placeholder="Password"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
                <button className="bg-black text-white font-bold text-lg hover:bg-gray-700 p-2 mt-8 rounded-lg">
                  {registrando ? "Regístrate" : "Inicia Sesión"}
                </button>
              </form>
              <h4>
                {registrando ? "¿Ya tienes una cuenta?" : "¿No tienes cuenta?"}
                <button
                  className='bg-black rounded-md w-auto text-white m-10 p-2'
                  onClick={() => setRegistrando(!registrando)}
                >
                  {registrando ? "Iniciar Sesión" : "Regístrate"}
                </button>
              </h4>
            </div>
          </div>
          <div className="w-1/2 shadow-2xl">
            <img
              className="object-cover w-full h-screen hidden md:block"
              src="/src/assets/bomberos.jpg"
              alt="Background"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}
