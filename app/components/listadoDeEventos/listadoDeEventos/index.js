// components/listadoDeEventos/listadoDeEventos/index.js
import EventCard from '../eventCard';
import styles from './listadoDeEventos.module.css';

const ListadoDeEventos = ({ events }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Listado de Eventos</h1>
      <div className={styles.eventsList}>
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default ListadoDeEventos;
