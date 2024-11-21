'use client'; // Este es un Client Component

import React, { useEffect, useState } from 'react';
import EventCard from '../eventCard';  // Componente para mostrar cada evento
import styles from './listadoDeEventos.module.css';

// Llamada a la API para obtener los eventos
const fetchEvents = async () => {
  try {
    const response = await fetch('http://localhost:4000/api/event');
    if (!response.ok) {
      throw new Error('Error al obtener los eventos');
    }
    const data = await response.json();
    return data; // Retorna los eventos
  } catch (error) {
    console.error('Error al obtener eventos:', error);
    return []; // Si hay error, devolvemos un array vacío
  }
};

const ListadoDeEventos = () => {
  const [events, setEvents] = useState([]);  // Estado para almacenar los eventos

  useEffect(() => {
    const getEvents = async () => {
      const data = await fetchEvents(); // Llamamos a la API
      setEvents(data);  // Actualizamos el estado con los eventos
    };

    getEvents();  // Llamada inicial
  }, []);  // El array vacío asegura que solo se ejecute una vez al cargar el componente

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Listado de Eventos</h1>
      <div className={styles.eventsList}>
        {events.length === 0 ? (
          <p>No se encontraron eventos.</p>
        ) : (
          events.map((event) => (
            <EventCard key={event.id} event={event} />  // Pasamos los eventos al componente de tarjeta
          ))
        )}
      </div>
    </div>
  );
};

export default ListadoDeEventos;
