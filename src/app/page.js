"use client";  

import { useState } from "react";
import styles from './globals.css'; 


export default function LoginPage() {
  const [isSignUp, setIsSignUp] = useState(false); 
  const handleRegisterClick = () => setIsSignUp(true);
  const handleLoginClick = () => setIsSignUp(false);

  return (
    <div >
      <div>
        <form>
          <h1>Create Account</h1>
          <div>
            <a href="#" ></a>
            <a href="#" ></a>
            <a href="#" ></a>
            <a href="#" ></a>
          </div>
          <span>or use your email for registration</span>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button type="submit">Sign Up</button>
        </form>
      </div>

      <div>
        <form>
          <h1>Sign In</h1>
          <span>or use your email password</span>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <a href="#">Forget Your Password?</a>
          <button type="submit">Sign In</button>
        </form>
      </div>

      <div>
        <div >
          <div>
            <h1>Welcome Back!</h1>
            <p>Enter your personal details to use all site features</p>
            <button onClick={handleLoginClick}>
              Sign In
            </button>
          </div>

          <div>
            <h1>Hello, Friend!</h1>
            <p>Register with your personal details to use all site features</p>
            <button onClick={handleRegisterClick}>
              Sign Up
            </button>
          </div>
          <div>
            <link href="/consult"></link>
            <link href="/dashboard"></link>
            <link href="/testdashboard"></link>
          </div>
        </div>
      </div>
    </div>
  );
}

