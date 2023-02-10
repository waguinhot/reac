import React from 'react'
import { apiLogin, verifyToken,logout } from '../services/Api';

export const UserContext = React.createContext();


export const UserProvider = ({children}) => {


    const [user, setUser] = React.useState();
    const [error , setError] = React.useState(false);
    const [logado, setLogado] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    const token = localStorage.getItem('tokenpersonal');

     async function login(data)
    { 
      setLoading(true);
        const response = await apiLogin(data);
        if(response.status != 200){
          setError(true);
          setLoading(false);
          return ;
        }
        const json =  await response.json();

        localStorage.setItem('tokenpersonal' , json.authorization.token);
        setUser(json.user);
        setLogado(true);
        setLoading(false);
        return;
    }

    // função de autologin quando inicia a aplicação 
    // e tem algum token disponível
    async function autoLogin()
    { 

      setLoading(true);
      

      if(!token)
      {
        setLogado(false);
        setUser("");
        setLoading(false);
        
        return;

      }
      const response = await verifyToken(token);

      if(response.status != 200)
      { 
        console.log(response);
        setLoading(false);
        setLogado(false);
        return ;
      }

      const json = await response.json();
      
      setLogado(true);
      setUser(json.user);
      setLoading(false);
      return;
    }


    async function goLogout()
    {
      setLoading(true);
     const response = await logout(token);
     if(response.status != 200)
     { 
      setLoading(false);
       return ;
     }

     localStorage.removeItem('tokenpersonal');
     setUser("");
     setLogado(false);
     setLoading(false);
     return;
    }


    React.useEffect(() => {
      autoLogin();
    } , []);

  return (
    <UserContext.Provider value={{ login, error, logado, user, loading, goLogout  }}>
        {children}
    </UserContext.Provider>
  )
}
