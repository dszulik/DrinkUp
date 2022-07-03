import "./dashboard.scss";

import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Drink from "../../components/drink/Drink"
import Images from "../../components/images/Images";
import Navbar from "../../components/navbar/Navbar";
import Spinner from "../../components/spinner/Spinner";
import OrderItem from "../../components/orderitem/OrderItem";
import { getOrders, reset } from "../../features/orders/orderSlice";

const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [drinksList, setDrinksList] = useState([]);
  const { user } = useSelector((state) => state.auth);
  const { orders, isLoading, isError, message } = useSelector(
    (state) => state.orders
  );

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    if (!user) {
      navigate("/login");
    }
    else {
      dispatch(getOrders());
    }

    return () => {
      dispatch(reset());
    };
  }, [user, navigate, isError, message, dispatch]);

  useEffect(() => {
    async function fetchDrinksList() {
      try {
        const result = await axios.get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic");
        console.log(result.data.drinks);
        setDrinksList(result.data.drinks);
      } catch (error) {
        console.error(error);
      }
    }

    fetchDrinksList();
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="dashboard">
      <Navbar />
      <div className="dashboardContainer">
        <div className="info">
          <Images />
          <h1 className="title">{"An accomplished bar with a split personality".toUpperCase()}</h1>
        </div>
        {user.name === "barman" ? (<section className='content'>
          {orders.length > 0 ? (
            <div className='orders'>
              <table className="orders-table">
                <thead>
                  <tr>
                    <th className="id">Drink ID</th>
                    <th className="name">Name of the drink</th>
                    <th className="client">Who ordered</th>
                    <th className="action">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order, index) => (
                    <OrderItem key={index} order={order} />
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <h3>There are no orders</h3>
          )}
        </section>) : (<>{drinksList.length > 0 ? (
          <div className="drinks">
            {drinksList.map((drink, index) => (
              <Drink key={index} data={drink} />
            ))}
          </div>
        ) : (
          <div className="drinks">Fetching drinks from API source...</div>
        )}</>)}
      </div>
    </div>
  );
};

export default Dashboard;
