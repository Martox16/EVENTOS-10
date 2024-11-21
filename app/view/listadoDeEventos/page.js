'use client'; // Asegúrate de que este archivo es un "Client Component"

import React from 'react';
import ListadoDeEventos from '../../components/listadoDeEventos/listadoDeEventos';
import PrivateRoute from '../../components/PrivateRoute'; // Envolvemos la página en PrivateRoute

export default function Page() {
  return (
    <PrivateRoute>
      <ListadoDeEventos />  {/* Aquí renderizamos el componente de listado de eventos */}
    </PrivateRoute>
  );
}
