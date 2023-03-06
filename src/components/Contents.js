import synergy from "../assets/AdultSynergyCanvas.png";
import twoseven from "../assets/2007.png";
import twosevenpro from "../assets/2007pro.png";
import dreampointe from "../assets/dreampointe.png";
import elasticribbon from "../assets/elasticribbon.png";
import littlestarcanvas from "../assets/littlestar-canvas.png";
import littlestarleather from "../assets/littlestar-leather.png";
import triumpth from "../assets/supertriumph-prearched.png";

import {useNavigate} from "react-router-dom"


const contents = [
  {
    url: synergy,
    alt: "AdultSynergyCanvas",
    name: "Adult Synergy Canvas",
    price: "21.40 USD",
    id: "03019C",
  },
  {
    url: twoseven,
    alt: "AdultSynergyCanvas",
    name: "2007",
    price: "21.40 USD",
    id: "03019C",
  },
  {
    url: triumpth,
    alt: "AdultSynergyCanvas",
    name: "SuperTriumph Pre-Arched",
    price: "21.40 USD",
    id: "03019C",
  },
  {
    url: twosevenpro,
    alt: "AdultSynergyCanvas",
    name: "2007 PRO",
    price: "21.40 USD",
    id: "03019C",
  },
  {
    url: dreampointe,
    alt: "AdultSynergyCanvas",
    name: "DreamPointe 2007",
    price: "21.40 USD",
    id: "03019C",
  },
  {
    url: elasticribbon,
    alt: "AdultSynergyCanvas",
    name: "Elastic ribbon",
    price: "21.40 USD",
    id: "03019C",
  },
  {
    url: littlestarcanvas,
    alt: "AdultSynergyCanvas",
    name: "Little Star, canvas, split sole",
    price: "21.40 USD",
    id: "03019C",
  },
  {
    url: littlestarleather,
    alt: "AdultSynergyCanvas",
    name: "Little Star, leather",
    price: "21.40 USD",
    id: "03019C",
  },
];

export const Contents = () => {
  const navigate = useNavigate()
  return (
    <div className="contents">
      {contents.map((content, index) => (
        <div className="content" key={index}>
          <img  onClick={()=>{navigate("content-detail")}}src={content.url} alt={content.alt} />
          <div className="id-delivery">
            <div id="content-id">{content.id}</div>
            <div id="express-delivery">EXPRESS DELIVERY</div>
          </div>
          <div id="content-name">{content.name}</div>
          <div id="content-price">{content.price}</div>
        </div>
      ))}
    </div>
  );
};
