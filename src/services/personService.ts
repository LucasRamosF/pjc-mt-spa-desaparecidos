import api from './api';
import type { Person, PaginatedResponse } from '../types';

interface GetPeopleParams {
  page?: number;
  size?: number;
  nome?: string;
}

export const getPeople = async (params: GetPeopleParams): Promise<PaginatedResponse<Person>> => {
  const response = await api.get<PaginatedResponse<Person>>('/pessoas/aberto', { params });
  return response.data;
};

export const getPersonById = async (id: string): Promise<Person> => {
  const response = await api.get<Person>(`/pessoas/${id}`);
  return response.data;
};

export const postOcorrencia = async (personId: string, data: FormData): Promise<void> => {
  await api.post(`/pessoas/${personId}/ocorrencias`, data, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};