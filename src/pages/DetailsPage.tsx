import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getPersonById } from '../services/personService';
import type { Person } from '../types';
import StatusBadge from '../components/ui/StatusBadge';
import InfoForm from '../components/features/InfoForm';

const DetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const [person, setPerson] = useState<Person | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    if (!id) return;

    const fetchPerson = async () => {
      setIsLoading(true);
      try {
        const data = await getPersonById(id);
        setPerson(data);
      } catch (err) {
        setError('Pessoa não encontrada ou erro na API.');
      } finally {
        setIsLoading(false);
      }
    };
    fetchPerson();
  }, [id]);

  if (isLoading) return <p>Carregando detalhes...</p>;
  if (error) return <p className="text-red-500">{error}</p>;
  if (!person) return <p>Nenhuma informação encontrada.</p>;

  return (
    <div className="container mx-auto p-8">
      <Link to="/" className="text-blue-600 hover:underline mb-4 inline-block">&larr; Voltar para a lista</Link>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <div className="md:flex">
          <img src={person.foto} alt={person.nome} className="h-64 w-full md:w-64 rounded-lg object-cover mr-6" />
          <div>
            <div className="flex items-center mb-2">
              <h1 className="text-3xl font-bold mr-4">{person.nome}</h1>
              <StatusBadge status={person.status} />
            </div>
            <p><strong>Idade:</strong> {person.idade} anos</p>
            <p><strong>Cidade/Estado:</strong> {person.cidade}/{person.estado}</p>
            <p><strong>Data do Desaparecimento:</strong> {new Date(person.dataDesaparecimento).toLocaleDateString()}</p>
            <p className="mt-4"><strong>Características:</strong> {person.caracteristicas}</p>
          </div>
        </div>

        <div className="mt-8 border-t pt-6">
          <button onClick={() => setShowForm(!showForm)} className="bg-green-600 text-white font-bold py-2 px-4 rounded hover:bg-green-700">
            {showForm ? 'Fechar Formulário' : 'Registrar Nova Informação'}
          </button>
          {showForm && <InfoForm personId={id!} />}
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;