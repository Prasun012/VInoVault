const orders = [
  {
    id: 1,
    date: "2026-07-15",
    total: "$42.50",
    status: "Delivered",
  },
  {
    id: 2,
    date: "2026-07-10",
    total: "$18.99",
    status: "Processing",
  },
];

function OrderHistory() {
  return (
    <div className="bg-white rounded-lg shadow p-6">

      <h2 className="text-xl font-semibold mb-4">
        Order History
      </h2>

      <table className="w-full">

        <thead>
          <tr className="border-b">
            <th className="text-left py-2">Order ID</th>
            <th className="text-left py-2">Date</th>
            <th className="text-left py-2">Total</th>
            <th className="text-left py-2">Status</th>
          </tr>
        </thead>

        <tbody>
          {orders.map((order) => (
            <tr key={order.id} className="border-b">

              <td className="py-3">{order.id}</td>
              <td>{order.date}</td>
              <td>{order.total}</td>
              <td>{order.status}</td>

            </tr>
          ))}
        </tbody>

      </table>

    </div>
  );
}

export default OrderHistory;