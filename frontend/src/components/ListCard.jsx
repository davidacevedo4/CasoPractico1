import React from 'react';

export default function ListCard({ title, subtitle, onView, onEdit }) {
  return (
    <div className="bg-white shadow rounded-lg p-4 flex justify-between items-center mb-4">
      <div>
        <h3 className="text-xl font-semibold">{title}</h3>
        {subtitle && <p className="text-gray-500">{subtitle}</p>}
      </div>
      <div className="space-x-2">
        <button
          onClick={onView}
          className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Ver
        </button>
        <button
          onClick={onEdit}
          className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Editar
        </button>
      </div>
    </div>
  );
}
