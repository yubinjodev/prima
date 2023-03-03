import Logo from "../assets/grishkologo.png";

import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";

export const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="box1">WORLDWIDE DELIVERY.</div>

      <div className="box2">
        <div id="logo">
          <img src={Logo} alt="logo" />
        </div>
        <div id="auth">
          <div>Log-in</div>
          <div>Registration</div>
          <div>CONTACT US</div>
          <div>
            <AiOutlineShoppingCart />
          </div>
          <div>
            <AiOutlineMail />
          </div>
          <div>
            <AiOutlineSearch />
          </div>
        </div>
      </div>

      <div className="box3">
        <div>DANCE SHOES</div>
        <div>DANCE WEAR</div>
        <div>KIDS</div>
        <div>COLLECTIONS</div>
        <div>ACCESSORIES</div>
        <div>MEDIA</div>
        <div>LAST CHANCE TO BUY</div>
      </div>
    </div>
  );
};
