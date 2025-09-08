import type { Person, PaginatedResponse } from '../types';
import { mockPeople } from '../_mockData';

interface GetPeopleParams {
  page?: number;
  size?: number;
  nome?: string;
}

export const getPeople = async (params: GetPeopleParams): Promise<PaginatedResponse<Person>> => {
  console.log("MODO MOCK: Buscando pessoas com parâmetros:", params);
  
  const { page = 0, size = 10, nome = '' } = params;

  const filteredPeople = nome
    ? mockPeople.filter(p => p.nome.toLowerCase().includes(nome.toLowerCase()))
    : mockPeople;

  const start = page * size;
  const end = start + size;
  const paginatedContent = filteredPeople.slice(start, end);

  await new Promise(resolve => setTimeout(resolve, 300));

  const response: PaginatedResponse<Person> = {
    content: paginatedContent,
    totalPages: Math.ceil(filteredPeople.length / size),
    totalElements: filteredPeople.length,
    number: page,
  };

  return Promise.resolve(response);
};

export const getPersonById = async (id: string): Promise<Person | undefined> => {
  console.log("MODO MOCK: Buscando pessoa com ID:", id);
  const person = mockPeople.find(p => p.id === parseInt(id));
  await new Promise(resolve => setTimeout(resolve, 300));
  return Promise.resolve(person);
};

export const postOcorrencia = async (personId: string, data: FormData): Promise<void> => {
  console.log("MODO MOCK: Ocorrência recebida para a pessoa ID:", personId);
  for (let [key, value] of data.entries()) {
    console.log(`  - ${key}:`, value);
  }
  await new Promise(resolve => setTimeout(resolve, 500));
  console.log("MODO MOCK: Ocorrência 'enviada' com sucesso!");
  return Promise.resolve();
};