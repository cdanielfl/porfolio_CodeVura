import { User, Product, Order, Task, Metric } from '../types';

export const MOCK_USERS: User[] = [
  { id: '1', name: 'Alex Rivera', email: 'alex@nexus.com', role: 'Admin', avatar: 'https://picsum.photos/seed/alex/100/100', status: 'Active', lastActive: '2 mins ago' },
  { id: '2', name: 'Sarah Chen', email: 'sarah@nexus.com', role: 'Manager', avatar: 'https://picsum.photos/seed/sarah/100/100', status: 'Active', lastActive: '1 hour ago' },
  { id: '3', name: 'Marcus Thorne', email: 'm.thorne@nexus.com', role: 'Staff', avatar: 'https://picsum.photos/seed/marcus/100/100', status: 'Inactive', lastActive: '2 days ago' },
  { id: '4', name: 'Elena Vance', email: 'elena@nexus.com', role: 'Admin', avatar: 'https://picsum.photos/seed/elena/100/100', status: 'Active', lastActive: 'Just now' },
];

export const MOCK_PRODUCTS: Product[] = [
  { id: 'PRD-001', name: 'Premium Wireless Headphones', category: 'Product', price: 299.99, stock: 45, status: 'In Stock', image: 'https://picsum.photos/seed/headphones/200/200' },
  { id: 'PRD-002', name: 'Ergonomic Office Chair', category: 'Product', price: 450.00, stock: 12, status: 'Low Stock', image: 'https://picsum.photos/seed/chair/200/200' },
  { id: 'SRV-001', name: 'Annual Maintenance Contract', category: 'Service', price: 1200.00, stock: 0, status: 'Active', image: 'https://picsum.photos/seed/service/200/200' },
  { id: 'PRD-003', name: 'Mechanical Keyboard G-Pro', category: 'Product', price: 159.50, stock: 0, status: 'Out of Stock', image: 'https://picsum.photos/seed/keyboard/200/200' },
  { id: 'SRV-002', name: 'Cloud Storage Setup', category: 'Service', price: 500.00, stock: 0, status: 'Active', image: 'https://picsum.photos/seed/cloud/200/200' },
];

export const MOCK_ORDERS: Order[] = [
  { id: 'ORD-9021', customerName: 'Acme Corp', items: 3, total: 1250.00, status: 'Delivered', date: '2024-03-28', paymentStatus: 'Paid' },
  { id: 'ORD-9022', customerName: 'Sarah Jenkins', items: 1, total: 299.99, status: 'Pending', date: '2024-03-29', paymentStatus: 'Unpaid' },
  { id: 'ORD-9023', customerName: 'Globex Inc', items: 12, total: 5400.00, status: 'Shipped', date: '2024-03-27', paymentStatus: 'Paid' },
  { id: 'ORD-9024', customerName: 'Wayne Ent', items: 2, total: 900.00, status: 'Cancelled', date: '2024-03-26', paymentStatus: 'Refunded' },
  { id: 'ORD-9025', customerName: 'Elena Vance', items: 5, total: 2150.00, status: 'Delivered', date: '2024-03-25', paymentStatus: 'Paid' },
];

export const MOCK_METRICS: Metric[] = [
  { label: 'Monthly Sales', value: '$84,500', change: 12.5, trend: 'up' },
  { label: 'Pending Orders', value: '24', change: -5.2, trend: 'down' },
  { label: 'Total Customers', value: '1,240', change: 8.2, trend: 'up' },
  { label: 'Inventory Value', value: '$312,000', change: 4.1, trend: 'up' },
];

export const MOCK_TASKS: Task[] = [
  { id: 'T-1', title: 'Restock Headphones', priority: 'High', status: 'In Progress', assignee: 'Alex Rivera', dueDate: '2024-04-01' },
  { id: 'T-2', title: 'Verify Q1 Invoices', priority: 'High', status: 'Todo', assignee: 'Sarah Chen', dueDate: '2024-04-05' },
  { id: 'T-3', title: 'Update Catalog 2024', priority: 'Medium', status: 'Done', assignee: 'Marcus Thorne', dueDate: '2024-03-25' },
];

export const SALES_CHART_DATA = [
  { name: 'Mon', sales: 4500, orders: 12 },
  { name: 'Tue', sales: 5200, orders: 15 },
  { name: 'Wed', sales: 4800, orders: 11 },
  { name: 'Thu', sales: 6100, orders: 18 },
  { name: 'Fri', sales: 5900, orders: 16 },
  { name: 'Sat', sales: 3200, orders: 8 },
  { name: 'Sun', sales: 2800, orders: 6 },
];

export const MOCK_TRANSACTIONS = [
  { id: 'TX-1001', customer: 'Acme Corp', amount: 1250.00, type: 'Product Sale', status: 'Completed', date: '2024-03-28' },
  { id: 'TX-1002', customer: 'Sarah Jenkins', amount: 299.99, type: 'Product Sale', status: 'Processing', date: '2024-03-29' },
  { id: 'TX-1003', customer: 'Globex Inc', amount: 5400.00, type: 'Service Fee', status: 'Completed', date: '2024-03-27' },
  { id: 'TX-1004', customer: 'Wayne Ent', amount: 900.00, type: 'Product Sale', status: 'Failed', date: '2024-03-26' },
  { id: 'TX-1005', customer: 'Elena Vance', amount: 2150.00, type: 'Service Fee', status: 'Completed', date: '2024-03-25' },
];
