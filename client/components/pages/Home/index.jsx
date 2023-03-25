
import styles from "./styles.module.css";


function Home(userDetails){
const user = userDetails.user;
const logout = () =>{
  window.open(
    "http://localhost:8080/auth/logout",
    "_self"
  );
};




  return (
    <div className={styles.container}>
      <h1 className={styles.heading}> Home </h1>
      <div className={styles.form_container}>
        <div className={styles.left}>
          
        </div>
        <div className={styles.right}>
          <h2 className={styles.from_heading}>Profile</h2>
        
          <input type="text" defaultValue={user.name} className={styles.input} />
            <input type="text" defaultValue={user.email} className={styles.input} />
           
            <button className={styles.btn} onClick={logout}>Log Out</button>
           
        </div>
      </div>
    </div>
  );
}


export default Home;