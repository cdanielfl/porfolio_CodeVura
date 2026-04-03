import React from 'react';
import type { Product } from '../data/mockData';

const STORAGE_KEY = 'marketplace_demo_cart_v1';

export type CartItem = {
  product: Product;
  quantity: number;
};

type CartContextValue = {
  items: CartItem[];
  lineCount: number;
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
};

const CartContext = React.createContext<CartContextValue | undefined>(undefined);

const loadInitial = (): CartItem[] => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as CartItem[];
    if (!Array.isArray(parsed)) return [];
    return parsed;
  } catch {
    return [];
  }
};

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [items, setItems] = React.useState<CartItem[]>(() => loadInitial());

  React.useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const addToCart = React.useCallback((product: Product, quantity = product.minOrder) => {
    setItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (!existing) {
        return [...prev, { product, quantity }];
      }
      return prev.map((item) =>
        item.product.id === product.id
          ? { ...item, quantity: item.quantity + quantity }
          : item
      );
    });
  }, []);

  const removeFromCart = React.useCallback((productId: string) => {
    setItems((prev) => prev.filter((item) => item.product.id !== productId));
  }, []);

  const updateQuantity = React.useCallback((productId: string, quantity: number) => {
    setItems((prev) =>
      prev.map((item) =>
        item.product.id === productId
          ? { ...item, quantity: Math.max(1, Math.floor(quantity)) }
          : item
      )
    );
  }, []);

  const clearCart = React.useCallback(() => setItems([]), []);

  const value = React.useMemo<CartContextValue>(
    () => ({
      items,
      lineCount: items.length,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
    }),
    [items, addToCart, removeFromCart, updateQuantity, clearCart]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useMarketplaceCart = () => {
  const context = React.useContext(CartContext);
  if (!context) {
    throw new Error('useMarketplaceCart must be used inside CartProvider');
  }
  return context;
};

