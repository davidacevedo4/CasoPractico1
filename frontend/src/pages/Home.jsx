import React from 'react';

export default function Home() {
  return (
    <main className="container mx-auto flex flex-col items-center justify-center py-20">
      <h2 className="text-4xl font-bold mb-8">Bienvenido al Gestor</h2>
      <div className="space-y-4">
        <a
          href="/events"
          className="block px-6 py-3 bg-blue-600 text-white rounded-lg text-center hover:bg-blue-700"
        >
          Ver Eventos
        </a>
        <a
          href="/locations"
          className="block px-6 py-3 bg-green-600 text-white rounded-lg text-center hover:bg-green-700"
        >
          Ver Ubicaciones
        </a>
        <a
          href="/contacts"
          className="block px-6 py-3 bg-purple-600 text-white rounded-lg text-center hover:bg-purple-700"
        >
          Ver Contactos
        </a>
      </div>
    </main>
  );
}
