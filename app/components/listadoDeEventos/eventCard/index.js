'use client'; // Este es un Client Component

import React from 'react';
import { useRouter } from 'next/navigation';  // Para usar router.push
import styles from './eventCard.module.css';

const EventCard = ({ event }) => {
  const router = useRouter();

  const handleDetailsClick = () => {
    // Guardamos el ID del evento en localStorage y luego redirigimos
    localStorage.setItem('selectedEventId', event.id);
    router.push('/view/detalleDeEvento');  // Redirigimos a la página de detalles
  };

  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{event.title}</h3>
      <p className={styles.date}>{event.date}</p>
      <p className={styles.description}>{event.description}</p>
      <button onClick={handleDetailsClick} className={styles.detailsButton}>
        Ver detalles
      </button>
    </div>
  );
};

export default EventCard;
