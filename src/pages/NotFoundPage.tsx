import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-4">
      <h1 className="text-6xl font-bold text-gray-800">404</h1>
      <p className="text-xl text-gray-600 mt-4">Página Não Encontrada</p>
      <p className="text-md text-gray-500 mt-2">
        A página que você está procurando não existe ou foi movida.
      </p>
      <Link 
        to="/" 
        className="mt-6 px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors"
      >
        Voltar para a Página Inicial
      </Link>
    </div>
  );
};

export default NotFoundPage;