// src/pages/Home.jsx
import Button from '../components/common/Button';
import Layout from '../components/layout/Layout';

export default function Home() {
    const handleClick = () => {
        alert('¡Botón clickeado!');
    };

    return (
        <Layout>
        <h2>Bienvenido a Fitness AI</h2>
        <Button onClick={handleClick}>Comenzar</Button>
        <Button variant="secondary">Aprender más</Button>
        </Layout>
    );
}