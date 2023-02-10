import React from "react";
import {UserContext} from '../../context/UserContext';

const Dashboard = () =>{

    const { user,  } = React.useContext(UserContext);
    return(<div> página de dashboard <br/> {user.name }  {user.email} </div>);
}

export default Dashboard;