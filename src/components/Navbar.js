import Logo from "../assets/grishkologo.png";
import { LoginContext } from "../context/LoginContext";

import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { BasketContext } from "../context/BasketContext";
import { SearchContext } from "../context/SearchContext";

export const Navbar = () => {
  const { showLoginModal, setshowLoginModal } = useContext(LoginContext);
  const { showBasketModal, setBasketModal } = useContext(BasketContext);
  const { showSearch, setSearch } = useContext(SearchContext);
  const navigate = useNavigate();

  return (
    <div className="navbar-container">
      <div className="box1">WORLDWIDE DELIVERY.</div>

      <div className="box2">
        <div id="logo" onClick={() => navigate("/")}>
          <img src={Logo} alt="logo" />
        </div>
        <div id="auth">
          <div
            onClick={() => {
              setshowLoginModal(true);
            }}
          >
            Log-in
          </div>
          <div onClick={() => navigate("/registration")}>Registration</div>
          <div onClick={() => navigate("/contact-us")}>CONTACT US</div>
          <div
            onClick={() => {
              setBasketModal(true);
            }}
          >
            <AiOutlineShoppingCart />
          </div>
          <div onClick={() => navigate("/contact-us")}>
            <AiOutlineMail />
          </div>
          <div
            onClick={() => {
              setSearch(true);
            }}
          >
            <AiOutlineSearch />
          </div>
        </div>
      </div>

      <div className="box3">
        <div className="dropdown">
          <button className="dropbtn">DANCE SHOES</button>
          <div className="dropdown-content">
            <div>Pointe Shoes Line Up</div>
            <div>Pointe Shoes - Skin tone</div>
            <div>Ballroom & Latin</div>
            <div>Tap Shoes</div>
            <div>Stage Shoes</div>
            <div>Folk & Character Shoes</div>
            <div>Pointe Shoes</div>
            <div>Ballet boots</div>
            <div>Warm-up Boots</div>
            <div>Ballet Shoe - Slippers</div>
            <div>Lyrical & Gymastic Shoes</div>
            <div>Jazz Shoes</div>
          </div>
        </div>

        <div className="dropdown">
          <button className="dropbtn">DANCE WEAR</button>
          <div className="dropdown-content">
            <div>Leotards</div>
            <div>Skirts & tutus</div>
            <div>Leggings</div>
            <div>Tights</div>
            <div>Heat Retention Wear</div>
            <div>Unitards</div>
            <div>T-shirt & jumpers</div>
            <div>Pants and shorts</div>
            <div>Seamless underwear</div>
            <div>Knitted warm-up</div>
            <div>Boys` and Mens`</div>
          </div>
        </div>

        <div className="dropdown">
          <button className="dropbtn">KIDS</button>
          <div className="dropdown-content">
            <div>Kids ballet shoes</div>
            <div>Kids Stage Costumes</div>
            <div>Kids dancewear</div>
            <div>Future Stars</div>
          </div>
        </div>

        <div className="dropdown">
          <button className="dropbtn">COLLECTIONS</button>
          <div className="dropdown-content">
            <div>Mystique</div>
            <div>Black Label V</div>
            <div>Bolshoi Stars. Magnifique</div>
            <div>Bolshoi Stars. Monarch</div>
            <div>Black Label IV</div>
            <div>Bolshoi Stars. The Dream</div>
            <div>Bolshoi Stars</div>
            <div>Boundless Collection</div>
            <div>New Base Collection</div>
            <div>Classic Excellence</div>
            <div>Grishko Academy</div>
            <div>Knitted warm-up 2021</div>
            <div>Bolshoi Stars. Jewel</div>
            <div>Future Stars</div>
          </div>
        </div>

        <div className="dropdown">
          <button className="dropbtn">ACCESSORIES</button>
          <div className="dropdown-content">
            <div>Pointe Shoe accessories</div>
            <div>Bags & Cases</div>
            <div>Gifts</div>
            <div>Dance Accessories</div>
            <div>Hair accessories</div>
          </div>
        </div>

        <div className="dropdown">
          <button className="dropbtn">MEDIA</button>
          <div className="dropdown-content">
            <div>Ambassdors</div>
            <div>Catalogs</div>
            <div>Wallpapers</div>
            <div>Download your media files</div>
            <div>Blog</div>
            <div>Stores</div>
            <div>Grishko Partners</div>
            <div>Everything Grishko in one video</div>
          </div>
        </div>

        <div className="dropdown">
          <button className="dropbtn">LAST CHANCE TO BUY</button>
          <div className="dropdown-content">
            <div>Pointe Shoes</div>
            <div>Slippers</div>
            <div>Accessories</div>
            <div>Dance Wear</div>
            <div>Dance Wear Basics</div>
          </div>
        </div>
      </div>
    </div>
  );
};
