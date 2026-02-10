import Layout from '../../components/layout/Layout';
import Button from '../../components/common/Button';

export default function Login() {
    return (
        <Layout>
        <div className="max-w-md mx-auto mt-10">
            <h2 className="text-2xl font-bold mb-4">Iniciar Sesión</h2>
            <form className="space-y-4">
            <input 
                type="email" 
                placeholder="Email"
                className="w-full p-2 border rounded"
            />
            <input 
                type="password" 
                placeholder="Contraseña"
                className="w-full p-2 border rounded"
            />
            <Button>Entrar</Button>
            </form>
        </div>
        </Layout>
    );
}