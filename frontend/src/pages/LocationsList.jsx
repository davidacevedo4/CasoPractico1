import React from 'react';
import ListCard from '../components/ListCard';
import { useNavigate } from 'react-router-dom';

// Datos de ejemplo
const mockLocations = [
  { id: 1, title: 'Auditorio Central', subtitle: 'Av. Universitaria 123' },
  { id: 2, title: 'Sala de Conferencias', subtitle: 'Edificio B, Piso 2' },
  { id: 3, title: 'Laboratorio HCI', subtitle: 'Bloque C, Aula 5' },
];

export default function LocationsList() {
  const nav = useNavigate();

  return (
    <main className="container mx-auto py-8">
      <h2 className="text-3xl font-bold mb-6">Lista de Ubicaciones</h2>
      {mockLocations.map(loc => (
        <ListCard
          key={loc.id}
          title={loc.title}
          subtitle={loc.subtitle}
          onView={() => nav(`/locations/${loc.id}`)}
          onEdit={() => nav(`/locations/${loc.id}/edit`)}
        />
      ))}
    </main>
  );
}

