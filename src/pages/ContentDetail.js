import elasticribbon from "../assets/elasticribbon.png";
import dreampointe from "../assets/dreampointe.png";
import asc from "../assets/AdultSynergyCanvas.png";

import { useEffect } from "react";

export const ContentDetail = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="main-container">
      <main className="content-detail-container">
        <section className="main-interaction-point">
          <img alt="ribbon" src={elasticribbon} />
          <div className="interaction">
            <nav className="detail-nav">
              ACCESSORIES | POINTE SHOE ACCESSORIES | 0002/5 ELASTIC RIBBON WITH
              GRISHKO LOGO, 1M
            </nav>

            <div>
              <h3>0002/5 Elastic ribbon with Grishko logo, 1m</h3>
              <button className="buy-button">EXPRESS DELIVERY</button>
            </div>

            <div className="buy">
              <div>Color</div>
              <button>Beige</button>
              <div>Quantity</div>
              <input />
              <button>Add to the basket</button>
            </div>

            <div>
              <hr />
              <div>+ Description</div>
              <hr />
              <div>+ Parameters</div>
              <hr />
            </div>
          </div>
        </section>

        <section className="promo">
          <h3>YOU MAY ALSO LIKE</h3>
          <div className="promo-details">
            <div>
              <img alt="dreampointe" className="promo-image" src={dreampointe} />
              <div>0002/3 Elastic ribbon, 25m</div>
              <div>2.90 USD</div>
            </div>

            <div>
              <img  alt="asc"className="promo-image" src={asc} />
              <div>0002/3 Elastic ribbon, 25m</div>
              <div>2.90 USD</div>
            </div>
          </div>
        </section>

        <div>
          <hr />
        </div>

        <section className="shop-more">
          <div>Shop more:</div>
          <div>Pointe shoe</div>
          <div>Leotards</div>
          <div>Dance accessories</div>
        </section>
        <div>
          <hr />
        </div>

        <section className="bottom">
          <div>
            <h3>DELIVERY</h3>
            <p>Find out the shipping options available for your destination</p>
          </div>
          <div>
            <h3>RETURNS</h3>
            <p>
              Arrange your return for an exchange or refund within 28 days using
              our free collection service
            </p>
          </div>
          <div>
            <h3>HELP & ADVICE</h3>
            <p>
              We will help you with any question. You are available to ask them
              via e-mail: orders@grishkoshop.com
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};
