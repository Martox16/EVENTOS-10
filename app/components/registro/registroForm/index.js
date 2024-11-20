"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';  // Importamos useRouter
import styles from './registroForm.module.css';

const RegistroForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const router = useRouter();  // Usamos el hook useRouter para la navegación

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Crea el objeto de usuario con first_name y last_name
    const user = {
      first_name: firstName,
      last_name: lastName,
      username: email,
      password
    };

    try {
      // Hacer la solicitud POST al backend para registrar el usuario
      const response = await fetch("http://localhost:4000/api/user/register", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });

      if (!response.ok) {
        // Si la respuesta no es correcta, lanzar error
        const errorMessage = await response.text();  // Obtener mensaje de error
        setMessage(errorMessage || 'Hubo un error al registrar el usuario');
        return;
      }

      // Parseamos la respuesta solo si el status es ok
      const result = await response.json();

      // Verificamos si la respuesta tiene un mensaje de éxito
      if (result && result.message && result.message === "created") {
        setMessage('Usuario registrado exitosamente!');
        // Redirige al login después de 1 segundo de éxito
        setTimeout(() => {
          router.push('/view/login');  // Redirige al login
        }, 1000);  // Tiempo de espera antes de la redirección
      } else {
        setMessage(result.message || 'Error desconocido al registrar el usuario');
      }

    } catch (error) {
      console.error("Error detallado:", error);  // Para depuración
      router.push("/view/login");
    }

    // Limpiar el formulario
    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
  };

  return (
    <form className={styles['registro-form']} onSubmit={handleSubmit}>
      <div className={styles['form-group']}>
        <label htmlFor="firstName">Nombre</label>
        <input 
          type="text" 
          id="firstName" 
          value={firstName} 
          onChange={(e) => setFirstName(e.target.value)} 
          required 
        />
      </div>
      <div className={styles['form-group']}>
        <label htmlFor="lastName">Apellido</label>
        <input 
          type="text" 
          id="lastName" 
          value={lastName} 
          onChange={(e) => setLastName(e.target.value)} 
          required 
        />
      </div>
      <div className={styles['form-group']}>
        <label htmlFor="email">Correo electrónico</label>
        <input 
          type="email" 
          id="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
      </div>
      <div className={styles['form-group']}>
        <label htmlFor="password">Contraseña</label>
        <input 
          type="password" 
          id="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
        />
      </div>
      <button type="submit" className={styles['registro-button']}>Registrar</button>

      {message && <p>{message}</p>}

      {/* Enlace para ir a la página de login - Ahora utilizando router.push */}
      <p className={styles['login-link']}>
        ¿Ya tienes una cuenta?{' '}
        <button 
          type="button" 
          onClick={() => router.push('/view/login')}  // Usamos router.push para la redirección
        >
          Inicia sesión
        </button>
      </p>
    </form>
  );
};

export default RegistroForm;
