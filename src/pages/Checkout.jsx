import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../components/CartContext";

export default function Checkout() {
  const { items, updateQty, removeFromCart, placeOrder } = useCart();
  const [placed, setPlaced] = useState(false);
  const subtotal = items.reduce((sum, item) => sum + item.qty * item.price, 0);

  if (placed) {
    return (
      <section className="min-h-screen bg-[#F0EDE6] pt-32 md:pt-40 px-4 md:px-8 flex flex-col items-center text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          Order placed! 🎉
        </h1>
        <p className="text-gray-600 mb-8">
          This feature i haven't completed. payment gateway is not integrated
          yet. But you can see your order on the orders page.
        </p>
        <Link
          to="/"
          className="rounded-full bg-orange-500 text-white px-8 py-3 hover:bg-black transition-colors duration-300"
        >
          Back to home
        </Link>
      </section>
    );
  }

  if (items.length === 0) {
    return (
      <section className="min-h-screen bg-[#F0EDE6] pt-32 md:pt-40 px-4 md:px-8 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Your cart is empty
        </h1>
        <Link to="/projects" className="text-orange-500 underline">
          Browse projects
        </Link>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-[#F0EDE6] pt-24 md:pt-32 px-4 md:px-8 pb-20">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 md:mb-12">
        Checkout
      </h1>

      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        <div className="md:col-span-2">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex gap-4 mb-6 bg-white/60 p-4 rounded-2xl"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-16 h-16 md:w-20 md:h-20 object-cover rounded-lg flex-shrink-0"
              />
              <div className="flex-1 min-w-0">
                <h3 className="font-bold truncate">{item.title}</h3>
                <p className="text-gray-500 text-sm mb-2">${item.price} each</p>
                <div className="flex items-center gap-2 flex-wrap">
                  <button
                    onClick={() => updateQty(item.id, item.qty - 1)}
                    className="w-7 h-7 border rounded-full hover:bg-black hover:text-white transition-colors"
                  >
                    −
                  </button>
                  <span>{item.qty}</span>
                  <button
                    onClick={() => updateQty(item.id, item.qty + 1)}
                    className="w-7 h-7 border rounded-full hover:bg-black hover:text-white transition-colors"
                  >
                    +
                  </button>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-sm text-red-500 hover:underline"
                  >
                    Remove
                  </button>
                </div>
              </div>
              <p className="font-bold whitespace-nowrap">
                ${item.qty * item.price}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-6 md:p-8 h-fit">
          <h2 className="text-xl font-bold mb-6">Order Summary</h2>
          <div className="flex justify-between mb-2 text-gray-600">
            <span>Subtotal</span>
            <span>${subtotal}</span>
          </div>
          <div className="flex justify-between mb-6 text-gray-600">
            <span>Shipping</span>
            <span>Free</span>
          </div>
          <div className="flex justify-between mb-8 font-bold text-lg border-t pt-4">
            <span>Total</span>
            <span>${subtotal}</span>
          </div>
          <button
            onClick={() => {
              placeOrder();
              setPlaced(true);
            }}
            className="w-full rounded-full bg-orange-500 text-white py-3 font-medium hover:bg-black transition-colors duration-300"
          >
            Place Order
          </button>
        </div>
      </div>
    </section>
  );
}
