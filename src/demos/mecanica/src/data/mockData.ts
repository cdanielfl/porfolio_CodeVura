export interface Service {
  id: string;
  title: string;
  titlePt: string;
  description: string;
  descriptionPt: string;
  icon: string;
  price: string;
  pricePt: string;
}

export const SERVICES: Service[] = [
  {
    id: "oil-change",
    title: "Oil Change",
    titlePt: "Troca de Oleo",
    description: "Premium synthetic oil change with filter replacement and multi-point inspection.",
    descriptionPt: "Troca de oleo sintetico premium com filtro novo e revisao multiponto.",
    icon: "Droplets",
    price: "$59.99",
    pricePt: "R$ 299,90",
  },
  {
    id: "brake-repair",
    title: "Brake Repair",
    titlePt: "Reparo de Freios",
    description: "Full brake system diagnostics, pad replacement, and rotor resurfacing.",
    descriptionPt: "Diagnostico completo do sistema de freios, troca de pastilhas e retifica de discos.",
    icon: "Disc",
    price: "From $149.99",
    pricePt: "A partir de R$ 749,90",
  },
  {
    id: "engine-diagnostics",
    title: "Engine Diagnostics",
    titlePt: "Diagnostico de Motor",
    description: "Advanced computer diagnostics to identify and resolve engine performance issues.",
    descriptionPt: "Diagnostico computadorizado avancado para identificar e resolver falhas no motor.",
    icon: "Activity",
    price: "$89.99",
    pricePt: "R$ 449,90",
  },
  {
    id: "transmission",
    title: "Transmission Repair",
    titlePt: "Reparo de Transmissao",
    description: "Expert transmission fluid service, repairs, and complete rebuilds.",
    descriptionPt: "Servico especializado de transmissao, reparos e reconstrucao completa.",
    icon: "Settings",
    price: "Quote Required",
    pricePt: "Sob consulta",
  },
  {
    id: "battery",
    title: "Battery Replacement",
    titlePt: "Troca de Bateria",
    description: "Battery testing and replacement with high-performance units.",
    descriptionPt: "Teste e substituicao de bateria com unidades de alto desempenho.",
    icon: "Battery",
    price: "$129.99",
    pricePt: "R$ 649,90",
  },
  {
    id: "tires",
    title: "Tire Services",
    titlePt: "Servicos de Pneus",
    description: "Tire rotation, balancing, alignment, and new tire installation.",
    descriptionPt: "Rodizio, balanceamento, alinhamento e instalacao de pneus novos.",
    icon: "CircleDot",
    price: "From $39.99",
    pricePt: "A partir de R$ 199,90",
  },
  {
    id: "ac-repair",
    title: "AC Repair",
    titlePt: "Ar-condicionado",
    description: "Climate control diagnostics, recharge, and component repair.",
    descriptionPt: "Diagnostico do ar-condicionado, recarga de gas e reparo de componentes.",
    icon: "Wind",
    price: "$99.99",
    pricePt: "R$ 499,90",
  },
  {
    id: "suspension",
    title: "Suspension",
    titlePt: "Suspensao",
    description: "Shock and strut replacement for a smoother, safer ride.",
    descriptionPt: "Troca de amortecedores e componentes para rodagem mais suave e segura.",
    icon: "ArrowUpCircle",
    price: "Quote Required",
    pricePt: "Sob consulta",
  },
];

export const localizeService = (service: Service, lang: "pt" | "en") => {
  if (lang === "pt") {
    return {
      ...service,
      title: service.titlePt,
      description: service.descriptionPt,
      price: service.pricePt,
    };
  }
  return service;
};

export const localizeServices = (services: Service[], lang: "pt" | "en") =>
  services.map((service) => localizeService(service, lang));

export interface Appointment {
  id: string;
  userId: string;
  serviceId: string;
  date: string;
  time: string;
  status: "pending" | "completed" | "canceled";
  notes?: string;
}

export const MOCK_APPOINTMENTS: Appointment[] = [
  {
    id: "1",
    userId: "user-1",
    serviceId: "oil-change",
    date: "2024-04-15",
    time: "10:00 AM",
    status: "pending",
  },
  {
    id: "2",
    userId: "user-1",
    serviceId: "brake-repair",
    date: "2024-03-20",
    time: "02:30 PM",
    status: "completed",
  },
];

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: "customer" | "admin";
}

export const MOCK_USERS: User[] = [
  {
    id: "user-1",
    name: "John Doe",
    email: "john@example.com",
    phone: "(555) 123-4567",
    role: "customer",
  },
  {
    id: "admin-1",
    name: "Admin User",
    email: "admin@apexauto.com",
    phone: "(555) 999-8888",
    role: "admin",
  },
];
