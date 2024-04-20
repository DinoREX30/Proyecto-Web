import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className='flex justify-between items-center fixed w-full py-4 z-10 text-sm font-thin top-0 px-20'>
        <ul className='flex items-center gap-5'>
            <li className=' font-bold text-lg'>
            <NavLink 
                to='/'>
                    Alert
                </NavLink>
            </li>
        </ul>
        <ul className='flex items-center gap-5'>
            <li>
                <NavLink 
                to='/alerta'>
                    Alerta
                </NavLink>
            </li>
            <li>
                <NavLink 
                to='/registro-alertas'>
                    Registro de Alertas
                </NavLink>
            </li>
        </ul>
    </nav>
  )
}
