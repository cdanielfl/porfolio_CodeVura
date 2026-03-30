export interface User {
  id: string;
  name: string;
  email: string;
  role: 'Admin' | 'Manager' | 'Staff';
  avatar: string;
  status: 'Active' | 'Inactive' | 'Pending';
  lastActive: string;
}

export interface Product {
  id: string;
  name: string;
  category: 'Product' | 'Service';
  price: number;
  stock: number;
  status: 'In Stock' | 'Low Stock' | 'Out of Stock' | 'Active';
  image: string;
}

export interface Order {
  id: string;
  customerName: string;
  items: number;
  total: number;
  status: 'Pending' | 'Shipped' | 'Delivered' | 'Cancelled';
  date: string;
  paymentStatus: 'Paid' | 'Unpaid' | 'Refunded';
}

export interface Metric {
  label: string;
  value: string | number;
  change: number;
  trend: 'up' | 'down' | 'neutral';
}

export interface Task {
  id: string;
  title: string;
  priority: 'High' | 'Medium' | 'Low';
  status: 'Todo' | 'In Progress' | 'Done';
  assignee: string;
  dueDate: string;
}
