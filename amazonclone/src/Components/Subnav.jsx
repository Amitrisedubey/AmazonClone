import "./Subnav.css";
import MenuIcon from "@mui/icons-material/Menu";
export const Subnav = () => {
  return (
    <div
      className="subnav"
      style={{
        backgroundColor: "#232f3e",
        height: "42px",
        position: "relative",
        display: "flex",
        justifyContent: "flex-start",
      }}
    >
      <div
        className="hovimage"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginLeft: "12px",
          width: "65px",
        }}
      >
        <div>
          <MenuIcon style={{ color: "white" }} />{" "}
        </div>
        <div
          style={{ color: "white", textAlign: "center", marginBottom: "5px" }}
        >
          <p>All</p>
        </div>
      </div>
      <div
        className="hovimage"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginLeft: "12px",
          width: "130px",
        }}
      >
        <div
          style={{ color: "white", textAlign: "center", marginBottom: "5px" }}
        >
          <p>Amazon miniTV</p>
        </div>
      </div>

      <div
        className="hovimage"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginLeft: "12px",
          width: "60px",
        }}
      >
        <div
          style={{ color: "white", textAlign: "center", marginBottom: "5px" }}
        >
          <p>Sell</p>
        </div>
      </div>
      <div
        className="hovimage"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginLeft: "12px",
          width: "95px",
        }}
      >
        <div
          style={{ color: "white", textAlign: "center", marginBottom: "5px" }}
        >
          <p>Best Sellers</p>
        </div>
      </div>

      <div
        className="hovimage"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginLeft: "12px",
          width: "80px",
        }}
      >
        <div
          style={{ color: "white", textAlign: "center", marginBottom: "5px" }}
        >
          <p>Mobiles</p>
        </div>
      </div>

      <div
        className="hovimage"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginLeft: "12px",
          width: "99px",
        }}
      >
        <div
          style={{ color: "white", textAlign: "center", marginBottom: "5px" }}
        >
          <p>Today's Deals</p>
        </div>
      </div>

      <div
        className="hovimage"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginLeft: "12px",
          width: "130px",
        }}
      >
        <div
          style={{ color: "white", textAlign: "center", marginBottom: "5px" }}
        >
          <p>Customer Service</p>
        </div>
      </div>

      <div
        className="hovimage"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginLeft: "12px",
          width: "110px",
        }}
      >
        <div
          style={{ color: "white", textAlign: "center", marginBottom: "5px" }}
        >
          <p>Electronics</p>
        </div>
      </div>
      <div
        className="hovimage"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginLeft: "12px",
          width: "130px",
        }}
      >
        <div
          style={{ color: "white", textAlign: "center", marginBottom: "5px" }}
        >
          <p>New Releases</p>
        </div>
      </div>
      <div
        className="hovimage"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginLeft: "12px",
          width: "80px",
        }}
      >
        <div
          style={{ color: "white", textAlign: "center", marginBottom: "5px" }}
        >
          <p>Prime</p>
        </div>
      </div>
    </div>
  );
};
