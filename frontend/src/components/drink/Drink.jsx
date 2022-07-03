import "./drink.scss";

import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useSnackbar } from "notistack";
import { visuallyHidden } from "@mui/utils";

import { createOrder } from "../../features/orders/orderSlice";

function Drink({ data }) {
  const { enqueueSnackbar } = useSnackbar();

  const refId = useRef();
  const refName = useRef();

  const { user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const onSubmit = () => {
    dispatch(createOrder({ id: refId.current.innerText, name: refName.current.innerText, client: user.name }));
    enqueueSnackbar(`Barman received your "${refName.current.innerText}" order!`);
  };

  return (
    <div className="drinkWget">
      <p ref={refId} id="id" style={visuallyHidden}>{data.idDrink}</p>
      <h1 ref={refName} id="name">{data.strDrink}</h1>
      <img src={data.strDrinkThumb} alt={data.idDrink} />
      <div className="add-to-cart-button">
        <button type="submit" onClick={onSubmit} className="btn btn-block">
          Add to cart
        </button>
      </div>
    </div>
  )
};

export default Drink;
