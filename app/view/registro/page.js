// app/view/registro/page.js
import React from 'react';
import RegistroForm from '../../components/registro/registroForm/index.js';
import styles from './registro.module.css';


const RegistroPage = () => (
  <div>
    <h2 className={styles.title}>Registro de Usuario</h2>
    <RegistroForm />
  </div>
);

export default RegistroPage;
