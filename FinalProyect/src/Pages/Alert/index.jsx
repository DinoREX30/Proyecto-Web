import React from 'react'
import Layout from '../../Components/Layout'
import ClearButton from '../../Components/ClearButton'
import { FaFire } from "react-icons/fa";

export default function Alert() {
  return (
    <Layout>
      <div className='flex justify-between py-10'>
        <h1 className='text-4xl font-bold'>Alerta</h1>
        <ClearButton/>
      </div>
      <h2 className='text-2xl font-bold'>Alerta activa</h2>
      <div>
        <div className='flex justify-between items-center bg-red-100 p-5 rounded-lg my-5'>
          <div className='flex items-center gap-5'>
            <FaFire className='text-red-500 text-4xl'/>
            <div>
              <h3 className='text-xl font-bold'>Incendio forestal</h3>
              <p className='text-sm'>Se ha detectado un incendio forestal en el sector de la cordillera de los andes</p>
            </div>
          </div>
          <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded' type='button'>Ver</button>
        </div>
      </div>
      <div>
        <h2 className='text-2xl font-bold'>Ubicación</h2>
        <div className='bg-gray-100 p-5 rounded-lg my-5'>
          <img src="https://motor.elpais.com/wp-content/uploads/2022/01/google-maps-22.jpg" alt="mapa" className='w-full object-contain h-96 rounded-lg'/>
        </div>
      </div>
    </Layout>
  )
}
