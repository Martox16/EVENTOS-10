'use client'; // Este es un Client Component

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'; // Usamos useRouter para redirigir
import styles from './detalleDeEvento.module.css';

const DetalleDeEvento = () => {
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true); // Estado de carga
  const router = useRouter();

  useEffect(() => {
    const selectedEventId = localStorage.getItem('selectedEventId'); // Obtener el ID del evento desde localStorage

    if (selectedEventId) {
      // Llamada a la API para obtener los detalles del evento
      const fetchEventDetails = async () => {
        try {
          const response = await fetch(`http://localhost:4000/api/event/${selectedEventId}`);
          if (!response.ok) {
            throw new Error('Error al obtener los detalles del evento');
          }
          const data = await response.json();
          setEvent(data);  // Establecer los datos del evento en el estado
          setLoading(false); // Cambiar el estado de carga
        } catch (error) {
          console.error('Error al obtener los detalles:', error);
          setLoading(false); // Cambiar el estado de carga incluso si hay un error
        }
      };

      fetchEventDetails(); // Ejecutar la función para obtener los detalles del evento
    }
  }, []);  // Solo se ejecuta una vez al cargar el componente

  if (loading) {
    return <div className={styles.loading}>Cargando detalles...</div>; // Mostrar mensaje de carga
  }

  if (!event) {
    return <div className={styles.error}>No se encontraron detalles para este evento.</div>; // Si no hay evento
  }

  const handleRegresar = () => {
    router.push('/view/listadoDeEventos'); // Regresar a la página de listado de eventos
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{event.name}</h2>
      <p className={styles.date}>{event.description}</p>
      <p className={styles.date}>Fecha: {event.start_date}</p>
      <p className={styles.duration}>Duración: {event.duration_in_minutes} minutos</p>
      <p className={styles.price}>Precio: ${event.price}</p>
      <p className={styles.maxAssistance}>Máximo de asistentes: {event.max_assistance}</p>
      <p className={styles.description}>{event.description}</p>
      {/* Si la ubicación del evento es una referencia a otro campo, deberías hacer una consulta adicional, si no es así, solo se muestra aquí */}
      <p className={styles.location}>Ubicación: {event.id_event_location}</p>

      <button onClick={handleRegresar} className={styles.regresarButton}>
        Regresar
      </button>
    </div>
  );
};

export default DetalleDeEvento;
