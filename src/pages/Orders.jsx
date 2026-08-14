import { Link } from "react-router-dom";
import { useCart } from "../components/CartContext";

export default function Orders() {
  const { orders } = useCart();

  if (orders.length === 0) {
    return (
      <section className="min-h-screen bg-[#F0EDE6] pt-32 md:pt-40 px-4 md:px-8 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">No orders yet</h1>
        <Link to="/projects" className="text-orange-500 underline">
          Browse projects
        </Link>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-[#F0EDE6] pt-24 md:pt-32 px-4 md:px-8 pb-20">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-10">
        Order History
      </h1>

      <div className="flex flex-col gap-6 max-w-3xl">
        {orders.map((order) => (
          <div key={order.id} className="bg-white rounded-2xl p-6">
            <div className="flex justify-between items-center mb-4">
              <p className="text-sm text-gray-500">
                Order #{order.id.toString().slice(-6)} · {order.date}
              </p>
              <p className="font-bold">${order.total}</p>
            </div>
            <div className="flex flex-col gap-3">
              {order.items.map((item) => (
                <div key={item.id} className="flex items-center gap-3">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-12 h-12 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <p className="font-medium text-sm">{item.title}</p>
                    <p className="text-gray-500 text-xs">
                      Qty: {item.qty} · ${item.price} each
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
