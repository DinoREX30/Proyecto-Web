import React, { createContext, useState, useEffect } from 'react';
import { db } from '../Credentials';
import { collection, onSnapshot } from "firebase/firestore";

export const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
    const [alertas, setAlertas] = useState([]);

    useEffect(() => {
        const unsubscribe = onSnapshot(collection(db, "alertas"), (snapshot) => {
            const alertasData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setAlertas(alertasData);
        });

        return () => unsubscribe();
    }, []);

    return (
        <AlertContext.Provider value={{ alertas, setAlertas }}>
            {children}
        </AlertContext.Provider>
    );
};
