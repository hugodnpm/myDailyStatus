import React from 'react'
import NavBar from '../components/NavBar' // importando menu de outra página
// *-- Cabeçalho em outra Página --*
const Header = () => {
    return (
        <div className='bg-gray-200 '>
            <h1><img className='h-24 mx-auto py-4' src='/logo.png' alt='Olá FSL!!' height='60' /></h1>
            <NavBar />
        </div>
    )
}
export default Header