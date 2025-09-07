import type { Person } from '../../types';
import StatusBadge from '../ui/StatusBadge';
import { Link } from 'react-router-dom';

interface PersonCardProps {
  person: Person;
}

const PersonCard = ({ person }: PersonCardProps) => (
  <Link to={`/pessoa/${person.id}`} className="block border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
    <img
      className="w-full h-56 object-cover"
      src={person.foto || 'https://via.placeholder.com/400'}
      alt={`Foto de ${person.nome}`}
    />
    <div className="p-4">
      <h3 className="font-bold text-xl mb-2">{person.nome}</h3>
      <p className="text-gray-700 text-base mb-2">Idade: {person.idade} anos</p>
      <StatusBadge status={person.status} />
    </div>
  </Link>
);

export default PersonCard;