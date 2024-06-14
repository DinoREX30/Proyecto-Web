import React from 'react'
import { Fa1 } from "react-icons/fa6";
import { Fa2 } from "react-icons/fa6";
import { Fa3 } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import Layout from '../../Components/Layout'
import { useContext, useEffect, useState } from 'react';
import { AlertContext } from '../../Context/AlertContext';
import { FaExclamationTriangle, FaTimes } from 'react-icons/fa';
import Modal from 'react-modal';


export default function Home() {
    const { alertas } = useContext(AlertContext);
    const [modalIsOpen, setModalIsOpen] = useState(false);

    useEffect(() => {
        if (alertas.length > 0) {
            setModalIsOpen(true);
        }
    }, [alertas]);

    const closeModal = () => {
        setModalIsOpen(false);
    };
  return (
    <Layout>
        <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                className="fixed inset-0 flex items-center justify-center z-50"
                overlayClassName="fixed inset-0 bg-black bg-opacity-50 z-40"
                contentLabel="Alerta Activa"
            >
                <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg">
                    <div className="flex items-center justify-between border-b pb-3 mb-4">
                        <div className="flex items-center">
                            <FaExclamationTriangle className="text-red-500 text-2xl mr-2" />
                            <h2 className="text-xl font-semibold">Alerta Activa</h2>
                        </div>
                        <button className="text-gray-600 hover:text-gray-900" onClick={closeModal}>
                            <FaTimes />
                        </button>
                    </div>
                    <div className="text-gray-700">
                        Hay una alerta activa actualmente. Revisa la sección de alertas para más detalles.
                    </div>
                    <div className="mt-4 text-right">
                        <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600" onClick={closeModal}>
                            Cerrar
                        </button>
                    </div>
                </div>
        </Modal>
        <div className="contenedor font-thin">
            <img src="/src/assets/fireman.jpg" className=' h-96 rounded-md object-cover w-full' alt="" />
            <div className="centrado text-2xl text-white">Bienvenido al detector de incendios</div>
            <Link to="/login"  className='centrado2 bg-white w-40 p-2 rounded-lg text-black'>Empezar</Link>
        </div>
        <h1 className=' text-6xl py-16 font-bold'>Nuestros Servicios</h1>
        <h3 className=' font-thin'>Enfocados en la alerta de incendios forestales para su pronto control</h3>
        <div className="grid grid-cols-3 gap-10 py-20">
            <div className="card border border-gray-200 p-5 rounded-md">
                <Fa1 className=''/>
                <h2 className=' text-2xl font-bold py-5'>Detección de incendios</h2>
                <p className=' font-thin'>Emision de alertas en tiempo real</p>
            </div>
            <div className="card border border-gray-200 p-5 rounded-md">
                <Fa2 className=' '/>
                <h2 className=' text-2xl font-bold py-5'>Alerta temprana</h2>
                <p className=' font-thin'>Se muestra la ubicacion en tiempo real del lugar donde se origino el incendio</p>
            </div>
            <div className="card border border-gray-200 p-5 rounded-md">
                <Fa3 className=' '/>
                <h2 className=' text-2xl font-bold py-5'>Control de incendios</h2>
                <p className=' font-thin'>Se lleva un registro de todos los incedios detectados</p>
            </div>
        </div>
    </Layout>
  )
}
