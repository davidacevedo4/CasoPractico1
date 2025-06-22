import React from 'react';
import ListCard from '../components/ListCard';
import { useNavigate } from 'react-router-dom';

// Datos de ejemplo
const mockContacts = [
  { id: 1, title: 'Dr. Juan Pérez', subtitle: 'juan.perez@correo.com' },
  { id: 2, title: 'Sra. María Gómez', subtitle: 'maria.gomez@correo.com' },
  { id: 3, title: 'Ing. Luis Rojas', subtitle: 'luis.rojas@correo.com' },
];

export default function ContactsList() {
  const nav = useNavigate();

  return (
    <main className="container mx-auto py-8">
      <h2 className="text-3xl font-bold mb-6">Lista de Contactos</h2>
      {mockContacts.map(ct => (
        <ListCard
          key={ct.id}
          title={ct.title}
          subtitle={ct.subtitle}
          onView={() => nav(`/contacts/${ct.id}`)}
          onEdit={() => nav(`/contacts/${ct.id}/edit`)}
        />
      ))}
    </main>
  );
}
