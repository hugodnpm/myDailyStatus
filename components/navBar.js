import React from 'react'
import Link from 'next/link'

const NavLink = ({href, children}) => {
    return (
        <Link href={href}>
            <a className='p-2 hover:underline hover:text-red-700 ' >{children}</a>
        </Link>
    )
}

const NavBar = () => {
    return (
        <div className='bg-gray-400 py-4 text-center'>
            <NavLink href='/'><a>Home</a></NavLink>
            <NavLink href='/sobre'><a>Sobre</a></NavLink>
            <NavLink href='/cadastro'><a>Cadastro</a></NavLink>
            <NavLink href='/entrar'><a>Entrar</a></NavLink>
        </div>

    )
}
export default NavBar