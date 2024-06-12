import React, { useState } from 'react';
import { db } from '../../Credentials';
import { addDoc, collection } from "firebase/firestore";

const NuevaAlerta = () => {
    const [tipo, setTipo] = useState('');
    const [ubicacion, setUbicacion] = useState('');
    const [mensaje, setMensaje] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await addDoc(collection(db, "alertas"), {
                tipo,
                ubicacion,
                mensaje,
                estado: "Active",
                fecha: new Date()
            });
            setTipo('');
            setUbicacion('');
            setMensaje('');
        } catch (error) {
            console.error("Error añadiendo el documento: ", error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={tipo}
                onChange={(e) => setTipo(e.target.value)}
                placeholder="Tipo de incendio"
                required
            />
            <input
                type="text"
                value={ubicacion}
                onChange={(e) => setUbicacion(e.target.value)}
                placeholder="Ubicación"
                required
            />
            <textarea
                value={mensaje}
                onChange={(e) => setMensaje(e.target.value)}
                placeholder="Mensaje"
                required
            ></textarea>
            <button type="submit">Registrar Alerta</button>
        </form>
    );
};

export default NuevaAlerta;
