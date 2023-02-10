import React from 'react'

import { UserContext } from '../../../context/UserContext'
import Input from '../components/Input';

const Login = () => {

    const {login, error, loading } = React.useContext(UserContext);

    const [email, setEmail] = React.useState();
    const [password, setPassword] = React.useState();

     function logar()
    {
        login({email, password})
    }
    
  return (
  <div className="h-screen flex ">
    <div className='lg:w-4/12 w-full  p-10  flex flex-col justify-center'>
      <h1 className="text-4xl text-green-400 font-bold text-center ">PERSONAL</h1>
      <div className="mt-10">
      </div>
    <form action="" onSubmit={e => { e.preventDefault();}} >
        <Input  id="email" label="Email" type="email" place="Digite seu email..." name="email" change={({target}) => setEmail(target.value)}/>
        
        <Input  id="password" label="Senha" type="password" place="Digite sua senha..." name="email" change={({target}) => setPassword(target.value)}/>
        
        {loading && <h1>Carregando ...</h1>}
        {error && <p>Erro ao realizar login.</p>}

        <button className='bg-green-500 p-2 text-white w-full mt-4 rounded' onClick={logar}>Login</button>
    </form>
  </div>
  <div className="bg-green-500 lg:w-8/12 ">

  </div>
  </div>
  )
}

export default Login