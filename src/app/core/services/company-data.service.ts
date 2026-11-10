import { Injectable, signal } from '@angular/core';

export interface ServiceItem {
  icon: string;
  title: string;
  description: string;
}

export interface SectorItem {
  icon: string;
  name: string;
  description: string;
}

export interface StepItem {
  number: string;
  title: string;
  description: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  address: string;
  hours: string;
}

@Injectable({ providedIn: 'root' })
export class CompanyDataService {
  readonly companyName = 'ROTA FIEL';
  readonly tagline = 'Comércio e prestação de serviços em Angola';

  readonly contact = signal<ContactInfo>({
    email: 'geral@rotafiel.ao',
    phone: '+244 900 000 000',
    address: 'Luanda, Angola',
    hours: 'Segunda a Sexta, 08h00 – 17h00',
  });

  readonly stats = signal<StatItem[]>([
    { value: '10+', label: 'Anos de experiência' },
    { value: '500+', label: 'Clientes servidos' },
    { value: '50+', label: 'Fornecedores parceiros' },
    { value: '24h', label: 'Tempo médio de resposta' },
  ]);

  readonly services = signal<ServiceItem[]>([
    {
      icon: '🔍',
      title: 'Identificação de Necessidades',
      description:
        'Apoiamos os nossos clientes na análise e definição clara das necessidades operacionais, traduzindo requisitos técnicos em especificações precisas para aquisição.',
    },
    {
      icon: '🤝',
      title: 'Consulta a Fornecedores',
      description:
        'Realizamos a prospecção e consulta a uma rede nacional e internacional de fornecedores, garantindo as melhores condições de mercado e conformidade técnica.',
    },
    {
      icon: '📋',
      title: 'Coordenação de Aquisição',
      description:
        'Coordenamos todo o processo de aquisição, desde o pedido de cotação até à entrega, em estrita conformidade com as especificações e condições de cada pedido.',
    },
    {
      icon: '⚙️',
      title: 'Provisionamento Industrial',
      description:
        'Fornecimento de materiais e equipamentos para operações industriais, com foco em qualidade, prazos de entrega e continuidade do abastecimento.',
    },
    {
      icon: '🛠️',
      title: 'Prestação de Serviços',
      description:
        'Serviços de apoio às operações dos nossos clientes, incluindo assistência técnica, logística de fornecimento e soluções sob medida.',
    },
    {
      icon: '📦',
      title: 'Fornecimento de Materiais',
      description:
        'Comércio e distribuição de materiais industriais, consumíveis e equipamentos, assegurando stocks fiáveis e entregas atempadas.',
    },
  ]);

  readonly sectors = signal<SectorItem[]>([
    {
      icon: '🛢️',
      name: 'Petróleos & Gás',
      description: 'Equipamentos e materiais para operações onshore e offshore.',
    },
    {
      icon: '🏗️',
      name: 'Construção Civil',
      description: 'Materiais de construção e equipamentos para obras de grande dimensão.',
    },
    {
      icon: '⛏️',
      name: 'Mineração',
      description: 'Provisionamento especializado para actividades extractivas.',
    },
    {
      icon: '🏭',
      name: 'Indústria Manufactureira',
      description: 'Consumíveis, peças e maquinaria para linhas de produção.',
    },
    {
      icon: '⚡',
      name: 'Energia & Utilidades',
      description: 'Materiais eléctricos e equipamentos para redes de distribuição.',
    },
    {
      icon: '🚛',
      name: 'Logística & Transportes',
      description: 'Equipamentos e soluções para cadeias de abastecimento.',
    },
  ]);

  readonly processSteps = signal<StepItem[]>([
    {
      number: '01',
      title: 'Identificação',
      description: 'Analisamos consigo as necessidades e requisitos técnicos do pedido.',
    },
    {
      number: '02',
      title: 'Consulta',
      description: 'Consultamos fornecedores nacionais e internacionais credenciados.',
    },
    {
      number: '03',
      title: 'Proposta',
      description: 'Apresentamos propostas técnicas e comerciais comparativas.',
    },
    {
      number: '04',
      title: 'Aquisição',
      description: 'Coordenamos o processo de aquisição em conformidade com as especificações.',
    },
    {
      number: '05',
      title: 'Entrega',
      description: 'Acompanhamos a logística até à entrega e confirmação final.',
    },
  ]);

  readonly values = signal<ServiceItem[]>([
    {
      icon: '🎯',
      title: 'Missão',
      description:
        'Provisionar e fornecer materiais, equipamentos e soluções para operações industriais, apoiando os clientes em todo o ciclo de aquisição.',
    },
    {
      icon: '👁️',
      title: 'Visão',
      description:
        'Ser a empresa angolana de referência no provisionamento industrial, reconhecida pela fiabilidade e pela excelência no serviço.',
    },
    {
      icon: '💎',
      title: 'Valores',
      description:
        'Integridade, compromisso com o cliente, conformidade, qualidade e desenvolvimento sustentável da economia angolana.',
    },
  ]);
}
