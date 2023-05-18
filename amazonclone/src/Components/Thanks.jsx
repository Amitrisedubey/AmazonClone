import { useNavigate } from "react-router-dom";

export const ThankYou = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        border: "2px solid #dedede",
        marginLeft: "30%",
        marginTop: "2%",
        height: "650px",
        width: "500px",
        borderRadius: "5px",
      }}
    >
      <h1 style={{ fontWeight: "1000", fontSize: "40px", textAlign: "center" }}>
        Congratulation
      </h1>
      <img
        height={250}
        width={250}
        marginLeft="25%"
        src="https://png.pngtree.com/png-vector/20190228/ourmid/pngtree-check-mark-icon-design-template-vector-isolated-png-image_711429.jpg"
        alt=""
      />
      <div style={{ textAlign: "center", color: "teal" }}>
        <h2>Your Order Placed Successfully !</h2>
        <h4>Your Order id is 5reohrh577ffgggg4rddd</h4>
        <h5>Supplier Will Contact You in few minutes</h5>
        <button
          style={{
            backgroundColor: "#f0c14b",
            borderColor: "#a88734",
            width: "300px",
            borderRadius: "2%",
            height: "35px",
            marginTop: "1%",
          }}
          onClick={() => {
            navigate("/");
          }}
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
};
