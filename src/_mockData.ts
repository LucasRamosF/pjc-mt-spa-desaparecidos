import type { Person } from './types';

// Uma lista de pessoas para simular o banco de dados
export const mockPeople: Person[] = [
  {
    id: 1,
    nome: "João da Silva Sauro",
    idade: 28,
    dataDesaparecimento: "2025-08-15",
    foto: "https://placehold.co/400x400/E57373/FFFFFF?text=Jo%C3%A3o",
    status: 'DESAPARECIDO',
    sexo: "Masculino",
    cidade: "Cuiabá",
    estado: "MT",
    caracteristicas: "Tatuagem de um dinossauro no antebraço direito, cicatriz na sobrancelha esquerda."
  },
  {
    id: 2,
    nome: "Maria Oliveira",
    idade: 45,
    dataDesaparecimento: "2025-07-20",
    foto: "https://placehold.co/400x400/81C784/FFFFFF?text=Maria",
    status: 'LOCALIZADO',
    sexo: "Feminino",
    cidade: "Várzea Grande",
    estado: "MT",
    caracteristicas: "Cabelos castanhos compridos, usa óculos de grau com armação vermelha."
  },
  {
    id: 3,
    nome: "Carlos Pereira",
    idade: 19,
    dataDesaparecimento: "2025-09-01",
    foto: "https://placehold.co/400x400/64B5F6/FFFFFF?text=Carlos",
    status: 'DESAPARECIDO',
    sexo: "Masculino",
    cidade: "Rondonópolis",
    estado: "MT",
    caracteristicas: "Usa aparelho nos dentes, visto pela última vez com uma mochila preta."
  },
  {
    id: 4,
    nome: "Ana Souza",
    idade: 33,
    dataDesaparecimento: "2025-06-10",
    foto: "https://placehold.co/400x400/FFB74D/FFFFFF?text=Ana",
    status: 'DESAPARECIDO',
    sexo: "Feminino",
    cidade: "Sinop",
    estado: "MT",
    caracteristicas: "Pinta no lado direito do rosto, cabelo loiro curto."
  },
  {
    id: 5,
    nome: "Lucas Mendes",
    idade: 22,
    dataDesaparecimento: "2025-08-30",
    foto: "https://placehold.co/400x400/9575CD/FFFFFF?text=Lucas",
    status: 'DESAPARECIDO',
    sexo: "Masculino",
    cidade: "Cáceres",
    estado: "MT",
    caracteristicas: "Barba por fazer, usa boné de aba reta com frequência."
  },
  {
    id: 6,
    nome: "Juliana Costa",
    idade: 29,
    dataDesaparecimento: "2025-05-18",
    foto: "https://placehold.co/400x400/4DB6AC/FFFFFF?text=Juliana",
    status: 'LOCALIZADO',
    sexo: "Feminino",
    cidade: "Tangará da Serra",
    estado: "MT",
    caracteristicas: "Olhos verdes, sardas no rosto."
  }
];