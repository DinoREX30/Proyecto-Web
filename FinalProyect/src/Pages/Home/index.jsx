import React from 'react'
import { Fa1 } from "react-icons/fa6";
import { Fa2 } from "react-icons/fa6";
import { Fa3 } from "react-icons/fa6";
import Layout from '../../Components/Layout'

export default function Home() {
  return (
    <Layout>
        <div className="contenedor font-thin">
            <img src="/src/assets/fireman.jpg" className=' h-96 rounded-md object-cover w-full' alt="" />
            <div className="centrado text-2xl text-white">Bienvenido al detector de incendios</div>
            <button className='centrado2 bg-white w-40 p-2 rounded-lg text-black'>Empezar</button>
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
