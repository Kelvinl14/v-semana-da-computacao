
export interface ScheduleItem {
  time: string;
  location: string;
  activity: string;
  speakers: string;
  responsible: string;
}

export const scheduleDay1: ScheduleItem[] = [
  {
    time: "08:00 - 10:00",
    location: "LIFE 2",
    activity: "Python - Básico",
    speakers: "Antonio Wills",
    responsible: "Antonio Wills"
  },
  {
    time: "10:00 - 12:00",
    location: "LIFE 2",
    activity: "Revisão sistemática da literatura",
    speakers: "José Wilker",
    responsible: "José Wilker"
  },
  {
    time: "14:00 - 18:00",
    location: "LIFE 2",
    activity: "Introdução GNU/Linux",
    speakers: "Randerson Nunes",
    responsible: "Randerson Nunes"
  },
  {
    time: "08:00 - 12:00",
    location: "LAB 1",
    activity: "Modelagem 3D para Jogos",
    speakers: "Jose Cainan",
    responsible: "Jose Cainan"
  },
  {
    time: "14:00 - 18:00",
    location: "LAB 1",
    activity: "Métodos Numéricos com Python",
    speakers: "Francisco Leonel",
    responsible: "Francisco Leonel"
  },
  {
    time: "08:00 - 12:00",
    location: "FÁBRICA",
    activity: "Oficina de Robótica I",
    speakers: "Marcony Souza",
    responsible: "Marcony Souza"
  },
  {
    time: "14:00 - 15:00",
    location: "AUDITÓRIO",
    activity: "Golpes em Redes Sociais",
    speakers: "Heráclito Santos, Carlos Coutinho",
    responsible: "Heráclito Santos"
  },
  {
    time: "16:00 - 18:00",
    location: "AUDITÓRIO",
    activity: "Mercado de Trabalho",
    speakers: "Sanatiel Gomes",
    responsible: "Danilo Rodrigues"
  },
  {
    time: "07:30 - 12:00",
    location: "LAB - ELET",
    activity: "Arduino",
    speakers: "-",
    responsible: "Luís Cláudio"
  }
];

export const scheduleDay2: ScheduleItem[] = [
  {
    time: "08:00 - 12:00",
    location: "LIFE 2",
    activity: "Oficina de Jogos I",
    speakers: "Murilo Chayel",
    responsible: "Marcony Henrique Bento Souza"
  },
  {
    time: "14:00 - 18:00",
    location: "LIFE 2",
    activity: "Oficina de Flutter",
    speakers: "Kayo",
    responsible: "Marcony Henrique Bento Souza"
  },
  {
    time: "08:00 - 12:00",
    location: "LAB 1",
    activity: "Introdução à Ciência de Dados com Python e a biblioteca Pandas",
    speakers: "José Cássios Costa Torres",
    responsible: "José Cássios Costa Torres"
  },
  {
    time: "14:00 - 18:00",
    location: "LAB 1",
    activity: "Conteinerização de aplicações",
    speakers: "—",
    responsible: "—"
  },
  {
    time: "08:00 - 12:00",
    location: "FÁBRICA",
    activity: "Oficina de Robótica II",
    speakers: "Filipe Mendes Silva",
    responsible: "Filipe Mendes Silva"
  },
  {
    time: "14:00 - 18:00",
    location: "FÁBRICA",
    activity: "Mulheres na Computação",
    speakers: "Evelly Victory Vieira Pinto",
    responsible: "Evelly Victory Vieira Pinto"
  },
  {
    time: "08:00 - 12:00",
    location: "LAB - ELET",
    activity: "Minicurso prático de Circuitos Lógicos",
    speakers: "Luís Cláudio Mendes Chaves",
    responsible: "Luís Cláudio Mendes Chaves"
  },
  {
    time: "13:00 - 18:00",
    location: "LAB - ELET",
    activity: "Introdução à plataforma Arduino",
    speakers: "Luís Cláudio Mendes Chaves",
    responsible: "Luís Cláudio Mendes Chaves"
  }
];

export const scheduleDay3: ScheduleItem[] = [
  {
    time: "08:00 - 12:00",
    location: "LAB - ELET",
    activity: "Circuitos Lógicos",
    speakers: "Luís Cláudio",
    responsible: "Luís Cláudio"
  },
  {
    time: "08:00 - 09:00",
    location: "AUDITÓRIO",
    activity: "Inteligência Artificial",
    speakers: "Derek Martins",
    responsible: "Luís Maia"
  },
  {
    time: "08:00 - 12:00",
    location: "LAB 1",
    activity: "Redes de Computadores",
    speakers: "Ricardo Motta",
    responsible: "Marcony Souza"
  },
  {
    time: "08:00 - 12:00",
    location: "LIFE 2",
    activity: "Pentest",
    speakers: "Marcos Vinícius",
    responsible: "Marcony Souza"
  },
  {
    time: "08:00 - 12:00",
    location: "LAB 1",
    activity: "Ciência de Dados com Pandas",
    speakers: "José Cássios",
    responsible: "José Cássios"
  },
  {
    time: "14:00 - 18:00",
    location: "LAB 1",
    activity: "Conteinerização de Aplicações",
    speakers: "-",
    responsible: "-"
  },
  {
    time: "08:00 - 12:00",
    location: "FÁBRICA",
    activity: "Oficina de Robótica II",
    speakers: "Filipe Mendes",
    responsible: "Filipe Mendes"
  },
  {
    time: "14:00 - 18:00",
    location: "FÁBRICA",
    activity: "Mulheres na Computação",
    speakers: "Evelly Vieira",
    responsible: "Evelly Vieira"
  },
  {
    time: "13:00 - 18:00",
    location: "LAB - ELET",
    activity: "Arduino (continuação)",
    speakers: "Luís Cláudio",
    responsible: "Luís Cláudio"
  }
];

export const workshopsData = [
  {
    title: "Python - Básico",
    instructor: "Antonio Wills",
    day: "Dia 1",
    time: "08:00 - 10:00",
    location: "LIFE 2",
    description: "Introdução aos conceitos básicos de programação em Python."
  },
  {
    title: "Modelagem 3D para Jogos",
    instructor: "Jose Cainan",
    day: "Dia 1",
    time: "08:00 - 12:00",
    location: "LAB 1",
    description: "Aprenda técnicas de modelagem 3D focadas no desenvolvimento de jogos."
  },
  {
    title: "Oficina de Robótica I",
    instructor: "Marcony Souza",
    day: "Dia 1",
    time: "08:00 - 12:00",
    location: "FÁBRICA",
    description: "Introdução à robótica com atividades práticas."
  },
  {
    title: "Arduino",
    instructor: "Luís Cláudio",
    day: "Dia 1",
    time: "07:30 - 12:00",
    location: "LAB - ELET",
    description: "Workshop introdutório sobre Arduino e suas aplicações."
  },
  {
    title: "Oficina de Jogos I",
    instructor: "Murilo Chayel",
    day: "Dia 2",
    time: "08:00 - 12:00",
    location: "LIFE 2",
    description: "Desenvolvimento prático de jogos digitais."
  },
  {
    title: "Oficina de Flutter",
    instructor: "Kayo",
    day: "Dia 2",
    time: "14:00 - 18:00",
    location: "LIFE 2",
    description: "Desenvolvimento de aplicativos móveis com Flutter."
  }
];

export const lecturesData = [
  {
    title: "Revisão sistemática da literatura",
    speaker: "José Wilker",
    day: "Dia 1",
    time: "10:00 - 12:00",
    location: "LIFE 2",
    description: "Metodologia para conduzir uma revisão sistemática da literatura científica."
  },
  {
    title: "Introdução GNU/Linux",
    speaker: "Randerson Nunes",
    day: "Dia 1",
    time: "14:00 - 18:00",
    location: "LIFE 2",
    description: "Fundamentos do sistema operacional GNU/Linux."
  },
  {
    title: "Golpes em Redes Sociais",
    speaker: "Heráclito Santos, Carlos Coutinho",
    day: "Dia 1",
    time: "14:00 - 15:00",
    location: "AUDITÓRIO",
    description: "Identificação e prevenção de golpes comuns em redes sociais."
  },
  {
    title: "Mercado de Trabalho",
    speaker: "Sanatiel Gomes",
    day: "Dia 1",
    time: "16:00 - 18:00",
    location: "AUDITÓRIO",
    description: "Panorama atual e tendências do mercado de trabalho em tecnologia."
  },
  {
    title: "Mulheres na Computação",
    speaker: "Evelly Victory Vieira Pinto",
    day: "Dia 2",
    time: "14:00 - 18:00",
    location: "FÁBRICA",
    description: "Debate sobre a participação e os desafios das mulheres na área de computação."
  },
  {
    title: "Inteligência Artificial",
    speaker: "Derek Martins",
    day: "Dia 3",
    time: "08:00 - 09:00",
    location: "AUDITÓRIO",
    description: "Conceitos fundamentais e aplicações de inteligência artificial."
  }
];
