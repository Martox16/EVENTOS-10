// app/page.js
// https://github.com/MaxiGarbino/TP-5-Dai BASE DE DATOS
"use client";
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push('/view/login'); // Redirige automáticamente a la página de login
  }, [router]);

  return (
    <div>
      <p>Redirigiendo a la página de login...</p>
    </div>
  );
}
