"use client";  // Add this line at the very top

import { useState } from "react";
import styles from './globals.css'; 

export default function LoginPage() {
  const [isSignUp, setIsSignUp] = useState(false); 
  const handleRegisterClick = () => setIsSignUp(true);
  const handleLoginClick = () => setIsSignUp(false);

  return (
    <div className={`${styles.container} ${isSignUp ? styles.active : ""}`} id="container">
      <div className={`${styles["form-container"]} ${styles["sign-up"]}`}>
        <form>
          <h1>Create Account</h1>
          <div className={styles["social-icons"]}>
            <a href="#" className={styles.icon}><i className="fa-brands fa-google-plus-g"></i></a>
            <a href="#" className={styles.icon}><i className="fa-brands fa-facebook-f"></i></a>
            <a href="#" className={styles.icon}><i className="fa-brands fa-github"></i></a>
            <a href="#" className={styles.icon}><i className="fa-brands fa-linkedin-in"></i></a>
          </div>
          <span>or use your email for registration</span>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button type="submit">Sign Up</button>
        </form>
      </div>

      <div className={`${styles["form-container"]} ${styles["sign-in"]}`}>
        <form>
          <h1>Sign In</h1>
          <div className={styles["social-icons"]}>
            <a href="#" className={styles.icon}><i className="fa-brands fa-google-plus-g"></i></a>
            <a href="#" className={styles.icon}><i className="fa-brands fa-facebook-f"></i></a>
            <a href="#" className={styles.icon}><i className="fa-brands fa-github"></i></a>
            <a href="#" className={styles.icon}><i className="fa-brands fa-linkedin-in"></i></a>
          </div>
          <span>or use your email password</span>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <a href="#">Forget Your Password?</a>
          <button type="submit">Sign In</button>
        </form>
      </div>

      <div className={styles["toggle-container"]}>
        <div className={styles.toggle}>
          <div className={`${styles["toggle-panel"]} ${styles["toggle-left"]}`}>
            <h1>Welcome Back!</h1>
            <p>Enter your personal details to use all site features</p>
            <button className={styles.hidden} onClick={handleLoginClick}>
              Sign In
            </button>
          </div>

          <div className={`${styles["toggle-panel"]} ${styles["toggle-right"]}`}>
            <h1>Hello, Friend!</h1>
            <p>Register with your personal details to use all site features</p>
            <button className={styles.hidden} onClick={handleRegisterClick}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

