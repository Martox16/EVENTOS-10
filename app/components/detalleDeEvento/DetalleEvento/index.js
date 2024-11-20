// components/detalleDeEvento/DetalleEvento/index.js
'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';  // Importa useRouter
import styles from './detalleDeEvento.module.css';

const DetalleDeEvento = () => {
  const [event, setEvent] = useState(null);
  const router = useRouter();  // Usamos el router

  useEffect(() => {
    const selectedEventId = localStorage.getItem('selectedEventId');
    if (selectedEventId) {
      // Simulación de obtener evento desde una API
      const mockEvent = {
        id: selectedEventId,
        title: `Evento ${selectedEventId}`,
        description: 'Descripción del evento.',
        date: '2024-11-02', // Fecha de ejemplo
      };
      setEvent(mockEvent);
    }
  }, []);

  if (!event) {
    return <div className={styles.loading}>Cargando detalles...</div>;
  }

  const handleRegresar = () => {
    // Redirige a la vista de listado de eventos
    router.push('/view/listadoDeEventos');
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{event.title}</h2>
      <p className={styles.date}>{event.date}</p>
      <p className={styles.description}>{event.description}</p>

      <button onClick={handleRegresar} className={styles.regresarButton}>
        Regresar
      </button>
    </div>
  );
};

export default DetalleDeEvento;
