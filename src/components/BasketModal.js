import { useContext } from "react";
import { BasketContext } from "../context/BasketContext";

export const BasketModal = () => {
  const { showBasketModal, setBasketModal } = useContext(BasketContext);

  return (
    showBasketModal && (
      <div className="modal-container">
        <div className="modal">
          <div className="exit-button">
            <button
              onClick={() => {
                setBasketModal(false);
              }}
            >
              X
            </button>
          </div>

          <div>
            <h3>MY BAG</h3>
            <div>Your bag is empty.</div>
          </div>

          <div className="subtotal">
            <div>SUBTOTAL: 0.00</div>
          </div>

          <div className="checkout-button">
            <button className="secondary-button">CONTINUE SHOPPING</button>
            <button>CHECKOUT</button>
          </div>
        </div>
      </div>
    )
  );
};
