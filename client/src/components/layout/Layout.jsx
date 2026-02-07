// src/components/layout/Layout.jsx
export default function Layout({ children }) {
    return (
        <div className="min-h-screen bg-gray-50">
        <nav className="bg-white shadow-sm p-4">
            <h1 className="text-xl font-bold">Fitness AI</h1>
        </nav>
        <main className="container mx-auto p-4">
            {children}
        </main>
        </div>
    );
}