export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  price: string;
}

export const SERVICES: Service[] = [
  {
    id: "oil-change",
    title: "Oil Change",
    description: "Premium synthetic oil change with filter replacement and multi-point inspection.",
    icon: "Droplets",
    price: "$59.99",
  },
  {
    id: "brake-repair",
    title: "Brake Repair",
    description: "Full brake system diagnostics, pad replacement, and rotor resurfacing.",
    icon: "Disc",
    price: "From $149.99",
  },
  {
    id: "engine-diagnostics",
    title: "Engine Diagnostics",
    description: "Advanced computer diagnostics to identify and resolve engine performance issues.",
    icon: "Activity",
    price: "$89.99",
  },
  {
    id: "transmission",
    title: "Transmission Repair",
    description: "Expert transmission fluid service, repairs, and complete rebuilds.",
    icon: "Settings",
    price: "Quote Required",
  },
  {
    id: "battery",
    title: "Battery Replacement",
    description: "Battery testing and replacement with high-performance units.",
    icon: "Battery",
    price: "$129.99",
  },
  {
    id: "tires",
    title: "Tire Services",
    description: "Tire rotation, balancing, alignment, and new tire installation.",
    icon: "CircleDot",
    price: "From $39.99",
  },
  {
    id: "ac-repair",
    title: "AC Repair",
    description: "Climate control diagnostics, recharge, and component repair.",
    icon: "Wind",
    price: "$99.99",
  },
  {
    id: "suspension",
    title: "Suspension",
    description: "Shock and strut replacement for a smoother, safer ride.",
    icon: "ArrowUpCircle",
    price: "Quote Required",
  },
];

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
