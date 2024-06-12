import React, { useContext } from 'react';
import { AlertContext } from '../Context/AlertContext';

const AlertasActivas = () => {
    const { alertas } = useContext(AlertContext);

    return (
        <div>
            <h1>Alerta activa</h1>
            {alertas.map(alerta => (
                <div key={alerta.id} className="alerta">
                    <h2>{alerta.tipo}</h2>
                    <p>{alerta.mensaje}</p>
                    <p>{alerta.ubicacion}</p>
                </div>
            ))}
        </div>
    );
};

export default AlertasActivas;
