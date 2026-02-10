// Actualizar src/components/layout/Layout.jsx
import { Link } from 'react-router-dom';

export default function Layout({ children }) {
    return (
        <div className="min-h-screen bg-gray-50">
        <nav className="bg-white shadow-sm p-4">
            <div className="container mx-auto flex justify-between items-center">
            <Link to="/" className="text-xl font-bold">Fitness AI</Link>
            <div className="space-x-4">
                <Link to="/login" className="text-blue-600">Login</Link>
                <Link to="/register" className="text-blue-600">Registro</Link>
                <Link to="/dashboard" className="text-blue-600">Dashboard</Link>
            </div>
            </div>
        </nav>
        <main className="container mx-auto p-4">
            {children}
        </main>
        </div>
    );
}