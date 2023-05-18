import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const Cart = () => {
  const dispatch = useDispatch();
  const cartData = useSelector((state) => state.cartState.cartItems);
  console.log("data", cartData);
  const cartSubtotal = cartData.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const formattedSubtotal = cartSubtotal.toLocaleString("en-IN", {
    style: "currency",
    currency: "INR",
  });
  const navigate = useNavigate();
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <h1>Shopping Cart</h1>
        </div>
        <div>
          <p style={{ color: "teal", marginRight: "155px", marginTop: "15px" }}>
            price
          </p>
        </div>
      </div>
      <hr></hr>
      {cartData.map((e) => {
        return (
          <div>
            <div style={{ display: "flex" }}>
              <img src={e.img} alt={e.title} height={200} width={200} />
              <div style={{ width: "100%" }}>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div style={{ width: "65%" }}>
                    <p style={{ fontWeight: "bold" }}>{e.descr}</p>
                  </div>
                  <div style={{ textAlign: "center", width: "35%" }}>
                    <h4
                      style={{
                        marginLeft: "55px",
                      }}
                    >
                      ₹{e.price}
                    </h4>
                  </div>
                </div>
                <p
                  style={{
                    color: "teal",
                    marginRight: "93%",
                    fontSize: "12px",
                  }}
                >
                  in stock
                </p>
                <p
                  style={{
                    color: "teal",
                    marginRight: "72%",
                    fontSize: "12px",
                  }}
                >
                  Sold by STPL Exclusive Online and Fulfilled By Amazon.
                </p>

                <p
                  style={{
                    marginRight: "77%",
                    fontSize: "12px",
                  }}
                >
                  <input type="checkbox" />
                  This will be a gift This is a gift Learn more
                </p>
                <button style={{ border: "none", marginRight: "1050px" }}>
                  delete
                </button>
              </div>
            </div>
            <hr></hr>
          </div>
        );
      })}
      <div>
        <h2>Cart subtotal {formattedSubtotal}</h2>
        <div></div>
        <input type="checkbox" />
        <label>
          <b>This order contains a gift</b>
        </label>
        <div></div>
        <div></div>
        <div>
          <button
            onClick={() => navigate("/thank")}
            style={{
              backgroundColor: "#f0c14b",
              borderColor: "#a88734",
              width: "300px",
              borderRadius: "2%",
              height: "35px",
              marginTop: "1%",
            }}
          >
            Proceed to Buy
          </button>
        </div>
      </div>
    </div>
  );
};
