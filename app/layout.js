"use client";
import { AuthProvider } from "./context/AuthContext"; // Importamos el AuthProvider
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // Para redirigir al login
import styles from "./layout.module.css";

const Layout = ({ children }) => {
  const [user, setUser] = useState(null);
  const router = useRouter(); // Hook de redirección
  const [loading, setLoading] = useState(true); // Para saber si estamos verificando el estado de la sesión

  useEffect(() => {
    const usuario = JSON.parse(localStorage.getItem("userData"));
    if (usuario) {
      setUser(usuario); // Si el usuario está en localStorage, lo guardamos en el estado
    }
    setLoading(false); // Termina la verificación
  }, []);

  const handleLogout = () => {
    // Limpiamos el localStorage
    localStorage.removeItem("userToken");
    localStorage.removeItem("userData");
    setUser(null); // Limpiamos el estado local del usuario
    router.push("/view/login"); // Redirigimos al login
  };

  if (loading) {
    return <div>Loading...</div>; // Si estamos verificando el estado, mostramos un loading
  }

  return (
    <AuthProvider>
      <html lang="en">
        <body>
          <div className={styles.layout}>
            <header className={styles.header}>
              <div className={styles.logo}>
                <Image
                  src="/img/logo.png"
                  alt="Logo del sitio"
                  width={150}
                  height={50}
                />
              </div>
              <nav className={styles.nav}>
                <Link href="/view/listadoDeEventos">Home</Link>
                <Link href="/view/contacto">Contacto</Link>
                {user && (
                  <div className={styles.userInfo}>
                    <span>Hola, {user.first_name}</span>
                    <button onClick={handleLogout}>Cerrar sesión</button>
                  </div>
                )}
              </nav>
            </header>
            <main>{children}</main>
            <footer className={styles.footer}>© Sitio De Eventos bokita</footer>
          </div>
        </body>
      </html>
    </AuthProvider>
  );
};

export default Layout;
