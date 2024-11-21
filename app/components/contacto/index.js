// app/components/contacto/index.js

import styles from './contacto.module.css';

const Contacto = () => {
  return (
    <div className={styles.contactoContainer}>
      <h2>Eventos Bokita</h2>
      <p><strong>Teléfono:</strong> +54 9 11 2337-1691</p>
      <p><strong>Instagram:</strong> <a href="https://www.instagram.com/bocavoley/" target="_blank" rel="noopener noreferrer">@Bokita</a></p>
      <p><strong>Twitter:</strong> <a href="https://x.com/BocaVoley" target="_blank" rel="noopener noreferrer">@Bokita</a></p>
    </div>
  );
}

export default Contacto;
