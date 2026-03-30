export interface Product {
  id: string;
  name: string;
  category: string;
  origin: string;
  pricePerKg: number;
  minOrder: number;
  stockStatus: 'In Stock' | 'Low Stock' | 'Out of Stock';
  grade: string;
  description: string;
  image: string;
  specs: {
    cut: string;
    aging: string;
    packaging: string;
  };
}

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Premium Wagyu Ribeye A5',
    category: 'Beef',
    origin: 'Kagoshima, Japan',
    pricePerKg: 185.00,
    minOrder: 5,
    stockStatus: 'In Stock',
    grade: 'A5 BMS 12',
    description: 'The pinnacle of Japanese beef, processed in our specialized high-marbling unit. Exceptional texture and rich umami flavor.',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1000&auto=format&fit=crop',
    specs: {
      cut: 'Ribeye (Longissimus Dorsi)',
      aging: 'Wet Aged 21 Days',
      packaging: 'Vacuum Sealed, Individual'
    }
  },
  {
    id: '2',
    name: 'Black Angus Striploin',
    category: 'Beef',
    origin: 'Nebraska, USA',
    pricePerKg: 42.50,
    minOrder: 20,
    stockStatus: 'In Stock',
    grade: 'USDA Prime',
    description: 'Classic American steakhouse quality, precision-cut in our automated processing line. Consistent marbling and robust flavor.',
    image: 'https://images.unsplash.com/photo-1603048297172-c92544798d5e?q=80&w=1000&auto=format&fit=crop',
    specs: {
      cut: 'Striploin',
      aging: 'Dry Aged 28 Days',
      packaging: 'Case of 4 Primal Cuts'
    }
  },
  {
    id: '3',
    name: 'Iberico Pork Secreto',
    category: 'Pork',
    origin: 'Guijuelo, Spain',
    pricePerKg: 38.00,
    minOrder: 10,
    stockStatus: 'Low Stock',
    grade: 'Bellota 100%',
    description: 'The "hidden" cut of the Iberico pig, handled with artisanal precision in our specialized pork processing wing.',
    image: 'https://images.unsplash.com/photo-1602470520998-f4a52199a3d6?q=80&w=1000&auto=format&fit=crop',
    specs: {
      cut: 'Secreto (Shoulder Blade)',
      aging: 'Fresh',
      packaging: 'Frozen, IQF'
    }
  },
  {
    id: '4',
    name: 'New Zealand Lamb Rack',
    category: 'Lamb',
    origin: 'Canterbury, NZ',
    pricePerKg: 55.00,
    minOrder: 15,
    stockStatus: 'In Stock',
    grade: 'Export Grade A',
    description: 'Grass-fed, tender lamb racks. Cap-off, frenched in our precision-finishing unit for premium presentation.',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1000&auto=format&fit=crop',
    specs: {
      cut: '8-Rib Rack',
      aging: 'Chilled',
      packaging: 'Vacuum Packed Pairs'
    }
  },
  {
    id: '5',
    name: 'Dry-Aged Tomahawk',
    category: 'Beef',
    origin: 'Ireland',
    pricePerKg: 48.00,
    minOrder: 10,
    stockStatus: 'In Stock',
    grade: 'Grass-Fed Gold',
    description: 'Impressive long-bone ribeye, dry-aged in our proprietary Himalayan salt chambers for 45 days.',
    image: 'https://images.unsplash.com/photo-1551028150-64b9f398f678?q=80&w=1000&auto=format&fit=crop',
    specs: {
      cut: 'Bone-in Ribeye',
      aging: 'Dry Aged 45 Days',
      packaging: 'Individually Wrapped'
    }
  }
];

export const CATEGORIES = [
  { id: '1', name: 'Beef', slug: 'beef', count: 124, description: 'Premium bovine cuts processed in our specialized high-marbling unit.', image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=500&auto=format&fit=crop' },
  { id: '2', name: 'Pork', slug: 'pork', count: 86, description: 'Artisanal pork cuts handled with precision in our specialized wing.', image: 'https://images.unsplash.com/photo-1602470520998-f4a52199a3d6?q=80&w=500&auto=format&fit=crop' },
  { id: '3', name: 'Lamb', slug: 'lamb', count: 42, description: 'Grass-fed lamb racks frenched in our precision-finishing unit.', image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=500&auto=format&fit=crop' },
  { id: '4', name: 'Poultry', slug: 'poultry', count: 95, description: 'High-grade poultry processed under strict biosecurity protocols.', image: 'https://images.unsplash.com/photo-1587593810167-a84920ea0781?q=80&w=500&auto=format&fit=crop' },
  { id: '5', name: 'Game', slug: 'game', count: 18, description: 'Specialized game meats sourced and processed for elite markets.', image: 'https://images.unsplash.com/photo-1603048297172-c92544798d5e?q=80&w=500&auto=format&fit=crop' },
];
