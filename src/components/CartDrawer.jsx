import { useCart } from "./CartContext";
import { Link } from "react-router-dom";

export default function CartDrawer({ open, onClose }) {
  const { items, removeFromCart, updateQty } = useCart();
  const total = items.reduce((sum, item) => sum + item.qty, 0);
  const subtotal = items.reduce((sum, item) => sum + item.qty * item.price, 0);

  return (
    <>
      <div
        onClick={onClose}
        className={`fixed inset-0 bg-black/50 z-[110] transition-opacity duration-300 ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      />

      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-96 bg-white z-[120] shadow-2xl transition-transform duration-500 flex flex-col ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-xl font-bold">Your Cart ({total})</h2>
          <button
            onClick={onClose}
            className="text-2xl hover:rotate-90 transition-transform duration-300"
          >
            ✕
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <p className="text-gray-400">Your cart is empty.</p>
          ) : (
            items.map((item) => (
              <div key={item.id} className="flex gap-4 mb-6">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-20 h-20 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <h3 className="font-bold">{item.title}</h3>
                  <p className="text-gray-500 text-sm mb-2">${item.price}</p>
                  <div className="flex items-center gap-2">
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
                      className="ml-auto text-sm text-red-500 hover:underline"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="p-6 border-t">
            <div className="flex justify-between mb-4 font-bold">
              <span>Subtotal</span>
              <span>${subtotal}</span>
            </div>
            <Link
              to="/checkout"
              onClick={onClose}
              className="block text-center w-full rounded-full bg-orange-500 text-white py-3 font-medium hover:bg-black transition-colors duration-300"
            >
              Checkout
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
