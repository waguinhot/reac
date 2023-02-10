import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import Aplication from './pages/Aplication';


function App() {

  return (
    
    <UserProvider>
        <Aplication />
    </UserProvider>
    
    
  )
}

export default App
