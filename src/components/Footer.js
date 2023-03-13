import grishkologo from "../assets/grishkologo.png";

import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineFacebook } from "react-icons/ai";
import { AiOutlineYoutube } from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";
import { AiFillWechat } from "react-icons/ai";

import { saveAs } from "file-saver";

export const Footer = () => {
  const downloadImage = () => {
    saveAs(grishkologo, "grishko-logo.jpg");
  };

  return (
    <div className="footer">
      <div className="box-container">
        <div className="box">
          <h4>INFORMATION</h4>
          <a href="/about-us">About us</a>
          <a href="/about-grishko">About Grishko</a>
          <a href="/why-grishko">Why Grishko?</a>
          <a href="/advantages">Our Advantages</a>
          <a href="/contact-us">Contact us</a>
          <a href="/privacy-policy">Privary Policy</a>
          <a href="/grishko-partners">Grishko Partners</a>
          <div onClick={downloadImage}>Download GRISHKO logo</div>
        </div>

        <div className="box">
          <h4>HELP & SUPPORT</h4>
          <a href="/return-policy">Return Policy</a >
          <a href="/delivery">Delivery</a >
          <a href="/terms-of-sale">Terms of Sale</a >
          <a href="/privacy-guarantee">Privacy and Guarantees</a >
          <a href="tutorial">How to make a purchase</a >
        </div>

        <div className="box">
          <h4>FITTING GUIDE</h4>
          <a href="/fitter">Ask a fitter</a>
          <a href="/size-chart">Pointe shoes size chart</a>
          <a href="/cheat-sheet">Pointe shoes cheat sheets</a>
          <a href="/dacewear-size-chart">Dancewear size chart</a>
          <a href="/slippers-size-chart">Ballet slippers size chart</a>
          <a href="/warmupboots-size-chart">Warm up boots size chart</a>
          <a href="/other-size-chart">Jazz, Folk and rehearsal shoe measures</a>
          <a href="/mens-costumes">Men`s costumes</a>
          <a href="/womens-costumes">Woman`s costumes</a>
        </div>

        <div className="box">
          <h4>FOR PARTNERS</h4>
          <a href="/my-invoices">My invoices</a>
          <a href="/my-orders">My orders</a>
          <a href="/become-partner">Become a Partner</a>
          <a href="/become-ambassador">Become an Ambassador</a>
        </div>

        <div className="box">
          <h4>CONTACTS</h4>
          <div>For individual: orders@grishkoshop.com</div>
          <div>For wholesale: export@grishko.cz</div>
          <div>Tel.:+420 725 959 097 Call by Skype</div>
          <div>Skype: Skype call</div>
          <div>WeChat: Join Grishko WeChat chanel</div>
          <div className="socials">
            <div>
              <AiOutlineInstagram />
            </div>
            <div>
              <AiOutlineFacebook />
            </div>
            <div>
              <AiOutlineYoutube />
            </div>
            <div>
              <FaTiktok />
            </div>
            <div>
              <AiFillWechat />
            </div>
          </div>
        </div>
        {/* <hr />
        <div className="box-container">
          <div>Copyright © 2023, Grishko. Created by ZAS Group s.r.o.</div>
        </div> */}

        {/* check reference footer. */}
      </div>
    </div>
  );
};
