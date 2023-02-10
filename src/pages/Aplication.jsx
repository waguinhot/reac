import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import { UserContext } from '../context/UserContext'
import Login from './auth/login/Login'
import Dashboard from './dashboard/Dashboard'
import Icondashboard from './icons/Icondashboard'
import Iconhamburguer from './icons/Iconhamburguer'
import Iconlogout from './icons/Iconlogout'
import Iconresume from './icons/Iconresume'
import Iconuser from './icons/Iconuser'
import Notfound from './notfound/Notfound'
import Resume from './resume/Resume'
import User from './user/User'

const Aplication = () => {
    const [nav, setNav] = React.useState(true);

    const {logado , goLogout} = React.useContext(UserContext);
    if(!logado) return <Login/>

    return (
        <BrowserRouter>
            <div className="flex">
                <button
                    className='bg-emerald-800 fixed m-4 p-2 rounded-lg text-white '
                    onClick={() => setNav(!nav)}
                >
                    <Iconhamburguer />
                </button>
                {nav &&
                    <div className={'lg:w-3/12 bg-green-600 h-screen w-6/12'}>
                        <h1 className='text-white text-center text-3xl mt-20'> Titulo nav</h1>
                        <hr />
                        <nav className='flex flex-col w-28 mr-auto ml-auto mt-10 text-white'>
                            <Link to="/" className='mt-4 flex'><Icondashboard /> Dashboard</Link>
                            <Link to="/user" className='mt-4 flex'> <Iconuser /> User</Link>
                            <Link to="/resume" className='mt-4 flex'><Iconresume /> Resume</Link>
                            <div onClick={goLogout} className='p-2 cursor-pointer bg-emerald-800 rounded-lg mt-4  flex'> <Iconlogout /> Logout</div>
                        </nav>
                    </div>
                }

                <div className='w-full bg-gray-200 h-screen'>
                    <Routes>
                        <Route path='/' element={<Dashboard />} />
                        <Route path='/user' element={<User />} />
                        <Route path='/resume' element={<Resume />} />
                        <Route path='*' element={<Notfound />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default Aplication