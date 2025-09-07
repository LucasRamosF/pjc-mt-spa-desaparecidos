import { useState } from 'react';
import InputMask from 'react-input-mask';
import { postOcorrencia } from '../../services/personService';

interface InfoFormProps {
  personId: string;
}

const InfoForm = ({ personId }: InfoFormProps) => {
  const [observacao, setObservacao] = useState('');
  const [dataHora, setDataHora] = useState('');
  const [local, setLocal] = useState('');
  const [foto, setFoto] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFoto(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage(null);

    const formData = new FormData();
    formData.append('observacao', observacao);
    formData.append('dataHoraAvistamento', dataHora);
    formData.append('localAvistamento', local);
    if (foto) {
      formData.append('foto', foto);
    }

    try {
      await postOcorrencia(personId, formData);
      setMessage({ type: 'success', text: 'Informação enviada com sucesso! Obrigado por sua colaboração.' });
      setObservacao(''); setDataHora(''); setLocal(''); setFoto(null);
    } catch (error) {
      setMessage({ type: 'error', text: 'Falha ao enviar informação. Tente novamente.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
  <form onSubmit={handleSubmit} className="mt-6 space-y-4">
    <div>
      <label htmlFor="dataHora" className="block text-sm font-medium text-gray-700">Data e Hora do Avistamento</label>
      <InputMask
        mask="99/99/9999 99:99"
        id="dataHora"
        value={dataHora}
        onChange={(e) => setDataHora(e.target.value)}
        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
        required
      />
    </div>
    <div>
      <label htmlFor="local" className="block text-sm font-medium text-gray-700">Local do Avistamento</label>
      <input type="text" id="local" value={local} onChange={(e) => setLocal(e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required />
    </div>
    <div>
      <label htmlFor="observacao" className="block text-sm font-medium text-gray-700">Observações Adicionais</label>
      <textarea id="observacao" value={observacao} onChange={(e) => setObservacao(e.target.value)} rows={4} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"></textarea>
    </div>
    <div>
      <label htmlFor="foto" className="block text-sm font-medium text-gray-700">Anexar Foto (Opcional)</label>
      <input type="file" id="foto" onChange={handleFileChange} className="mt-1 block w-full" accept="image/*" />
    </div>
    <button type="submit" disabled={isSubmitting} className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:bg-blue-300">
      {isSubmitting ? 'Enviando...' : 'Enviar Informação'}
    </button>

    {message && (
      <p className={`mt-4 text-sm ${message.type === 'success' ? 'text-green-600' : 'text-red-600'}`}>
        {message.text}
      </p>
    )}
  </form>
);
};

export default InfoForm;