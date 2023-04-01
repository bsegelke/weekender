import { Link } from 'react-router-dom'
import { useEffect } from 'react'

const Login = () =>{
  const google = ()=>{
    
    window.open(`${process.env.REACT_APP_CLIENT_URL}auth/google/`, "_self")
  }
  useEffect(() => {
    document.body.classList.add('login-page');
    return () => {
      document.body.classList.remove('login-page');
    };
  }, []);


  return(
    
   
    <div className="loginPage">
      <div className="topBar">
        <h1 className="weekendertext">WEEKENDER</h1>
        <h1 className='welcome'>LOGIN TO PLAN YOUR ADVENTURE</h1>
        <button className="googleLogin" onClick={google}>Log In</button>
      </div>
    </div>
  

  )
}

export default Login