// src/components/common/Button.jsx
export default function Button({ children, onClick, variant = 'primary' }) {
    const styles = {
        primary: 'bg-blue-600 text-white',
        secondary: 'bg-gray-200 text-gray-800'
    };

    return (
        <button 
        onClick={onClick}
        className={`px-4 py-2 rounded ${styles[variant]}`}
        >
        {children}
        </button>
    );
}