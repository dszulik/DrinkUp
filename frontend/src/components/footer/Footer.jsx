import "./footer.scss";

import LoginRoundedIcon from "@mui/icons-material/LoginRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className='footerContainer'>
        <footer className='foot'>
          <ul>
            <li>
              <Link to='/login'>
                <LoginRoundedIcon /> Login
              </Link>
            </li>
            <li>
              <Link to='/register'>
                <PersonRoundedIcon /> Register
              </Link>
            </li>
          </ul>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
