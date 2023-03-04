import ContentDetail1 from "../assets/AdultSynergyCanvas.png";

const contents = [
  {
    url: ContentDetail1,
    alt: "AdultSynergyCanvas",
    name: "Adult Synergy Canvas",
    price: "21.40 USD",
    id: "03019C",
  },
  {
    url: ContentDetail1,
    alt: "AdultSynergyCanvas",
    name: "Adult Synergy Canvas",
    price: "21.40 USD",
    id: "03019C",
  },
  {
    url: ContentDetail1,
    alt: "AdultSynergyCanvas",
    name: "Adult Synergy Canvas",
    price: "21.40 USD",
    id: "03019C",
  },
  {
    url: ContentDetail1,
    alt: "AdultSynergyCanvas",
    name: "Adult Synergy Canvas",
    price: "21.40 USD",
    id: "03019C",
  },
  {
    url: ContentDetail1,
    alt: "AdultSynergyCanvas",
    name: "Adult Synergy Canvas",
    price: "21.40 USD",
    id: "03019C",
  },
  {
    url: ContentDetail1,
    alt: "AdultSynergyCanvas",
    name: "Adult Synergy Canvas",
    price: "21.40 USD",
    id: "03019C",
  },
  {
    url: ContentDetail1,
    alt: "AdultSynergyCanvas",
    name: "Adult Synergy Canvas",
    price: "21.40 USD",
    id: "03019C",
  },
  {
    url: ContentDetail1,
    alt: "AdultSynergyCanvas",
    name: "Adult Synergy Canvas",
    price: "21.40 USD",
    id: "03019C",
  },
];

export const Contents = () => {
  return (
    <div className="contents">
      {contents.map((content, index) => (
        <div className="content" key={index}>
          <img src={content.url} alt={content.alt} />
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
