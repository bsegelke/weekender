import { Link } from "react-router-dom";
import styles from "./styles.module.css";


function Login(){

const googleAuth = () =>{
  window.open(
    "http://localhost:8080/auth/google/callback",
    "_self"
  );
};




  return (
    <div className={styles.container}>
      <h1 className={styles.heading}> Log in Form </h1>
      <div className={styles.form_container}>
        <div className={styles.left}>
          
        </div>
        <div className={styles.right}>
          <h2 className={styles.from_heading}>Members Log in</h2>
            <input type="text" className={styles.input} placeholder="Email"/>
            <input type="text" className={styles.input} placeholder="Password"/>
            <button className={styles.btn}>Log In</button>
            <p className={styles.text}>or</p>
            <button className={styles.google_btn} onClick={googleAuth}>
             
              <span>Sign in with Google</span>
            </button>
            <p className={styles.text}>
              New Here? <Link to="/signup">Sign Up</Link>
            </p>
        </div>
      </div>
    </div>
  );
}


export default Login;