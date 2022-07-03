import React from "react";
import { useDispatch } from "react-redux";
import { useSnackbar } from "notistack";

import { deleteOrder } from "../../features/orders/orderSlice";

function OrderItem({ order }) {
  const { enqueueSnackbar } = useSnackbar();

  const dispatch = useDispatch();

  return (
    <tr className="order-item">
      <td className="id">{order.id}</td>
      <td className="name">{order.name}</td>
      <td className="client">{order.client}</td>
      <td className="action"><button onClick={() => dispatch(deleteOrder(order._id), enqueueSnackbar(`Removed: ${order.name}`))} className='close'>
        X
      </button></td>
    </tr>
  );
}

export default OrderItem;
