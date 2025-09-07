import { useEffect, useState } from 'react';
import { getPeople } from '../services/personService';
import type { Person } from '../types';
import PersonCard from '../components/features/PersonCard';

const HomePage = () => {
  const [people, setPeople] = useState<Person[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchPeople = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const data = await getPeople({ page: currentPage, size: 10, nome: searchTerm });
        setPeople(data.content);
        setTotalPages(data.totalPages);
      } catch (err) {
        setError('Falha ao carregar os dados. Tente novamente mais tarde.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchPeople();
  }, [currentPage, searchTerm]);

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newSearchTerm = event.currentTarget.search.value;
    setSearchTerm(newSearchTerm);
    setCurrentPage(0);
  };

  return (
    <div className="container mx-auto px-6 py-8">
      <form onSubmit={handleSearch} className="mb-8">
        <div className="flex">
          <input
            type="text"
            name="search"
            placeholder="Buscar por nome..."
            className="w-full px-4 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button type="submit" className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-r-md hover:bg-blue-700">
            Buscar
          </button>
        </div>
      </form>

      {isLoading && <p>Carregando...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {!isLoading && !error && (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {people.map((person) => (
              <PersonCard key={person.id} person={person} />
            ))}
          </div>

          <div className="flex justify-center mt-8">
            <button
              onClick={() => setCurrentPage(p => Math.max(0, p - 1))}
              disabled={currentPage === 0}
              className="px-4 py-2 mx-1 bg-white border rounded disabled:opacity-50"
            >
              Anterior
            </button>
            <span className="px-4 py-2 mx-1">
              Página {currentPage + 1} de {totalPages}
            </span>
            <button
              onClick={() => setCurrentPage(p => Math.min(totalPages - 1, p + 1))}
              disabled={currentPage + 1 >= totalPages}
              className="px-4 py-2 mx-1 bg-white border rounded disabled:opacity-50"
            >
              Próxima
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default HomePage;