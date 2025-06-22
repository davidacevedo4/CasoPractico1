import React from 'react';
import ListCard from '../components/ListCard';
import { useNavigate } from 'react-router-dom';

const mockEvents = [
  { id: 1, title: 'Conferencia React', subtitle: '01/07/2025 10:00' },
  { id: 2, title: 'Taller de HCI', subtitle: '05/07/2025 14:00' },
  { id: 3, title: 'Charla Seguridad', subtitle: '10/07/2025 16:00' },
];

export default function EventsList() {
  const nav = useNavigate();

  return (
    <main className="container mx-auto py-8">
      <h2 className="text-3xl font-bold mb-6">Lista de Eventos</h2>
      {mockEvents.map(evt => (
        <ListCard
          key={evt.id}
          title={evt.title}
          subtitle={evt.subtitle}
          onView={() => nav(`/events/${evt.id}`)}
          onEdit={() => nav(`/events/${evt.id}/edit`)}
        />
      ))}
    </main>
  );
}
