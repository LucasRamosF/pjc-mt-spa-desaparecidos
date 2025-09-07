interface StatusBadgeProps {
  status: 'DESAPARECIDO' | 'LOCALIZADO';
}

const StatusBadge = ({ status }: StatusBadgeProps) => {
  const isMissing = status === 'DESAPARECIDO';
  const bgColor = isMissing ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800';
  const text = isMissing ? 'Desaparecido' : 'Localizado';

  return (
    <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${bgColor}`}>
      {text}
    </span>
  );
};

export default StatusBadge;