import "./navbar.scss";

import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import LocalBarIcon from '@mui/icons-material/LocalBar';
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { logout, reset } from "../../features/auth/authSlice";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

  return (
    <div className="navbar">
      <div className="navbarContainer">
        <div className="logo">
          <Link to='/'>
            <LocalBarIcon className="icon" />
            <span className="logo">DrinkUp</span>
          </Link>
        </div>
        <div className="logout" onClick={onLogout}>
          <LogoutRoundedIcon className="icon" />
          <span>Logout</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
