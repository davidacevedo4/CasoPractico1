import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-white shadow p-4">
      <nav className="container mx-auto flex space-x-4">
        <Link to="/" className="text-lg font-semibold hover:text-blue-600">
          Home
        </Link>
        <Link to="/events" className="text-lg hover:text-blue-600">
          Eventos
        </Link>
        <Link to="/locations" className="text-lg hover:text-blue-600">
          Ubicaciones
        </Link>
        <Link to="/contacts" className="text-lg hover:text-blue-600">
          Contactos
        </Link>
      </nav>
    </header>
  );
}
