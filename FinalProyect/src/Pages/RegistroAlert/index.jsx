// src/Pages/RegistroAlert/index.jsx
import React, { useContext } from 'react';
import { AlertContext } from "../../Context/AlertContext";
import Layout from "../../Components/Layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";

const RegistroAlertas = () => {
    const { alertas } = useContext(AlertContext);

    const renderFireIcon = (tipo) => {
        return tipo === 'B' ? <FontAwesomeIcon icon={faExclamationTriangle} className=" text-yellow-400" /> : null;
    };

    return (
        <Layout>
            <div className="max-w-7xl mx-auto py-8">
                <h1 className="text-3xl font-bold mb-6">Registro de alertas</h1>
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
                        <thead className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                            <tr>
                                <th className="py-3 px-6 text-left">Tipo</th>
                                <th className="py-3 px-6 text-left">Mensaje</th>
                                <th className="py-3 px-6 text-left">Ubicación</th>
                                <th className="py-3 px-6 text-left">Estado</th>
                                <th className="py-3 px-6 text-left">Fecha</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-600 text-sm font-light">
                            {alertas.map(alerta => (
                                <tr key={alerta.id} className="border-b border-gray-200 hover:bg-gray-100">
                                    <td className="py-3 px-6 text-left whitespace-nowrap">
                                        <div className="flex items-center">
                                            {renderFireIcon(alerta.tipo)}
                                            <span className="ml-2">{alerta.tipo}</span>
                                        </div>
                                    </td>
                                    <td className="py-3 px-6 text-left">{alerta.mensaje}</td>
                                    <td className="py-3 px-6 text-left">{alerta.ubicacion}</td>
                                    <td className="py-3 px-6 text-left">{alerta.estado}</td>
                                    <td className="py-3 px-6 text-left">{new Date(alerta.fecha.seconds * 1000).toLocaleDateString()}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </Layout>
    );
};

export default RegistroAlertas;

