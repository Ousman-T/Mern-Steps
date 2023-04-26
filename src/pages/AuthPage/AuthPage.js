import { useState } from "react";
import SignUpForm from "../../components/SignUpForm/SignUpForm"
import LoginForm from "../../components/LogInForm/LogInForm";
import styles from './AuthPage.module.css'
import Logo from "../../components/Logo/Logo";

function AuthPage({ setUser }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <main className={styles.AuthPage}>
      <Logo />

      <h3 onClick={() => setShowLogin(!showLogin)}>
        {showLogin ? "Sign up" : "Sign in"}
      </h3>

      {showLogin ? (
        <LoginForm setUser={setUser} />
      ) : (
        <SignUpForm setUser={setUser} />
      )}
    </main>
  );
}

export default AuthPage;
