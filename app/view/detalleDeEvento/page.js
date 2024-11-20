"use client";
import React from 'react';
import DetalleDeEvento from '../../components/detalleDeEvento/DetalleEvento/index.js';
import PrivateRoute from '../../components/PrivateRoute'; // Importamos el componente de protección de ruta

export default function Page() {
  return (
    <PrivateRoute> {/* Envolvemos la página en PrivateRoute */}
      <DetalleDeEvento />
    </PrivateRoute>
  );
}
