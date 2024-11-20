"use client";
import React from "react";
import { useAuth } from "../context/AuthContext"; // Importamos el hook de AuthContext
import { useRouter } from "next/navigation";

// Componente que protege las rutas privadas
const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth(); // Accedemos al estado del usuario desde el contexto
  const router = useRouter();

  // Si el estado de carga aún está en proceso (cuando cargamos desde localStorage), podemos mostrar un "loading"
  if (loading) return <div>Loading...</div>;

  // Si el usuario no está autenticado, redirigimos a la página de login
  if (!user) {
    router.push("/view/login");
    return null;
  }

  return <>{children}</>; // Si el usuario está autenticado, muestra el contenido protegido
};

export default PrivateRoute;
