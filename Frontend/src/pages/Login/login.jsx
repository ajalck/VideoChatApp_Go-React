// Import React and necessary styles from Tailwind CSS
import React from 'react';
import LoginForm from '../../components/Login/LoginForm.jsx';
import Navbar from '../../components/NavBar/NavBar.jsx';

function Login() {
  return (
   <>
    <Navbar/>
    <LoginForm/>
   </>
  );
}

export default Login;
