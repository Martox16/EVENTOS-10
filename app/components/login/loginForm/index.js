"use client";
import React, { useState } from "react";
import axios from "axios"; // Asegúrate de haber instalado axios
import { useRouter } from "next/navigation";
import { useAuth } from "../../../context/AuthContext"; // Importamos el contexto para acceder al estado de autenticación
import styles from "./loginForm.module.css"; // Si tienes estilos CSS para este formulario

const LoginForm = () => {
  const [username, setUsername] = useState("");  // Cambié 'email' por 'username' según tu API
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter(); // Hook para redirigir
  const { login } = useAuth(); // Llamamos a la función login del contexto

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:4000/api/user/login",  // Endpoint de la API
        {
          username,  // Username en lugar de 'email'
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        // Si la respuesta es exitosa
        const { token, result } = response.data;
        // Guardamos el token y los datos del usuario en el localStorage
        localStorage.setItem("userToken", token);
        localStorage.setItem("userData", JSON.stringify(result));

        // Llamamos a la función login del contexto para actualizar el estado global (si es necesario)
        login(result, token);  // 'result' es el usuario y 'token' es el JWT

        alert("Inicio de sesión exitoso!");
        router.push("/view/listadoDeEventos"); // Redirigir a la página de eventos
      }
    } catch (err) {
      console.error(err);
      // Muestra el error si hay un problema con la solicitud
      if (err.response) {
        // Si la respuesta de la API contiene un error
        setError(err.response.data.message || "Credenciales incorrectas.");
      } else {
        // Si no hay respuesta, indica que hubo un problema de conexión
        setError("Hubo un problema con la solicitud, por favor inténtalo de nuevo.");
      }
    }
  };

  return (
    <form className={styles["login-form"]} onSubmit={handleSubmit}>
      {error && <p className={styles.error}>{error}</p>}
      <div className={styles["form-group"]}>
        <label htmlFor="username">Correo electrónico o Usuario</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>
      <div className={styles["form-group"]}>
        <label htmlFor="password">Contraseña</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit" className={styles["login-button"]}>
        Ingresar
      </button>
    </form>
  );
};

export default LoginForm;
