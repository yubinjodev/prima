import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineFacebook } from "react-icons/ai";
import { AiOutlineYoutube } from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";
import { AiFillWechat } from "react-icons/ai";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="box-container">
        <div className="box">
          <h4>INFORMATION</h4>
          <div>About us</div>
          <div>About Grishko</div>
          <div>Why Grishko?</div>
          <div>Our Advantages</div>
          <div>Contact us</div>
          <div>Privary Policy</div>
          <div>Grish Partners</div>
          <div>Download GRISHKO logo</div>
        </div>

        <div className="box">
          <h4>HELP & SUPPORT</h4>
          <div>Return Policy</div>
          <div>Delivery</div>
          <div>Terms of Sale</div>
          <div>Privacy and Guarantees</div>
          <div>How to make a purchase</div>
        </div>

        <div className="box">
          <h4>FITTING GUIDE</h4>
          <div>Ask a fitter</div>
          <div>Pointe shoes size chart</div>
          <div>Pointe shoes cheat sheets</div>
          <div>Dancewear size chart</div>
          <div>Ballet slippers size chart</div>
          <div>Warm up boots size chart</div>
          <div>Jazz, Folk and rehearsal shoe measures</div>
          <div>Men`s costumes</div>
          <div>Woman`s costumes</div>
        </div>

        <div className="box">
          <h4>FOR PARTNERS</h4>
          <div>My invoices</div>
          <div>My orders</div>
          <div>Become a Partner</div>
          <div>Become an Ambassador</div>
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
