// app/components/login/LoginHeader/index.js
"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import styles from './loginHeader.module.css';

const LoginHeader = () => {
  const router = useRouter();

  const handleRegisterClick = () => {
    router.push('/view/registro'); // Redirige a la página de registro
  };

  return (
    <div className={styles['login-header']}>
      <h1>Bienvenido a Eventos</h1>
      <p onClick={handleRegisterClick}>¿No tienes cuenta? Regístrate aquí</p>
    </div>
  );
};

export default LoginHeader;
