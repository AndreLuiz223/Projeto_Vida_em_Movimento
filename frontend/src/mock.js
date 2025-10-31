export const mockProjects = [
  {
    id: '1',
    title: 'Futebol Cidadão',
    description: 'Aulas de futebol para crianças e adolescentes, promovendo trabalho em equipe, disciplina e inclusão social.',
    category: 'Esporte',
    image: 'https://images.unsplash.com/photo-1761039808115-77b271985e47',
    participants: 120,
    status: 'Ativo'
  },
  {
    id: '2',
    title: 'Arte & Cultura',
    description: 'Oficinas de arte, música e dança para estimular a criatividade e expressão cultural da comunidade.',
    category: 'Arte',
    image: 'https://images.unsplash.com/photo-1761039807430-a42c4e260acd',
    participants: 85,
    status: 'Ativo'
  },
  {
    id: '3',
    title: 'Educação Comunitária',
    description: 'Reforço escolar e alfabetização para jovens e adultos, promovendo acesso à educação de qualidade.',
    category: 'Educação',
    image: 'https://images.unsplash.com/photo-1595406164160-642177342a32',
    participants: 95,
    status: 'Ativo'
  },
  {
    id: '4',
    title: 'Atividades em Grupo',
    description: 'Dinâmicas e atividades coletivas para fortalecer vínculos comunitários e desenvolver habilidades sociais.',
    category: 'Social',
    image: 'https://images.unsplash.com/photo-1761039808159-f02b58f07032',
    participants: 60,
    status: 'Ativo'
  }
];

export const mockVolunteers = [
  {
    id: '1',
    name: 'Maria Silva',
    email: 'maria@email.com',
    phone: '(11) 98765-4321',
    area: 'Esporte',
    message: 'Gostaria de ajudar nas aulas de futebol',
    createdAt: new Date('2025-01-15')
  },
  {
    id: '2',
    name: 'João Santos',
    email: 'joao@email.com',
    phone: '(11) 91234-5678',
    area: 'Educação',
    message: 'Sou professor e quero contribuir',
    createdAt: new Date('2025-01-20')
  }
];

export const mockStats = {
  volunteers: 45,
  beneficiaries: 360,
  projects: 4,
  years: 8
};