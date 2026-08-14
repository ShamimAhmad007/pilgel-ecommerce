import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

function loadFromStorage(key, fallback) {
  try {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : fallback;
  } catch {
    return fallback;
  }
}

export function CartProvider({ children }) {
  const [items, setItems] = useState(() => loadFromStorage("pilgel_cart", []));
  const [orders, setOrders] = useState(() =>
    loadFromStorage("pilgel_orders", []),
  );

  // save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("pilgel_cart", JSON.stringify(items));
  }, [items]);

  // save orders to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("pilgel_orders", JSON.stringify(orders));
  }, [orders]);

  function addToCart(product) {
    setItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item,
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  }

  function removeFromCart(id) {
    setItems((prev) => prev.filter((item) => item.id !== id));
  }

  function updateQty(id, qty) {
    if (qty < 1) return removeFromCart(id);
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, qty } : item)),
    );
  }

  function placeOrder() {
    const total = items.reduce((sum, item) => sum + item.qty * item.price, 0);
    const newOrder = {
      id: Date.now(),
      date: new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      items: items,
      total: total,
    };
    setOrders((prev) => [newOrder, ...prev]);
    setItems([]); // clear cart after placing order
  }

  const totalCount = items.reduce((sum, item) => sum + item.qty, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQty,
        totalCount,
        orders,
        placeOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
