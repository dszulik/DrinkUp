import React from "react";
import { useDispatch } from "react-redux";

import { deleteOrder } from "../../features/orders/orderSlice";

function OrderItem({ order }) {
  const dispatch = useDispatch();

  return (
    <tr className="order-item">
      <td className="id">{order.id}</td>
      <td className="name">{order.name}</td>
      <td className="client">{order.client}</td>
      <td className="action"><button onClick={() => dispatch(deleteOrder(order._id))} className='close'>
        X
      </button></td>
    </tr>
  );
}

export default OrderItem;
