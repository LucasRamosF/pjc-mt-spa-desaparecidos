// src/types/index.ts
export interface Person {
  id: number;
  nome: string;
  idade: number;
  dataDesaparecimento: string;
  foto: string;
  status: 'DESAPARECIDO' | 'LOCALIZADO';
  sexo: string;
  cidade: string;
  estado: string;
  caracteristicas: string;
  // Adicione outros campos conforme a API
}

export interface OcorrenciaPayload {
  observacao: string;
  dataHoraAvistamento: string;
  localAvistamento: string;
  // O arquivo será tratado como 'File', não aqui diretamente
}

export interface PaginatedResponse<T> {
  content: T[];
  totalPages: number;
  totalElements: number;
  number: number; // Página atual
}