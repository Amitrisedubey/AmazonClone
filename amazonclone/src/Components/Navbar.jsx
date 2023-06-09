import "./Navbar.css";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import { AddShoppingCart } from "@mui/icons-material";
import { Link } from "react-router-dom";
import logo from "./amazonlogo.jpg";
import { useSelector } from "react-redux";
export const Navbar = () => {
  const cartdata = useSelector((state) => state.cartState.cartItems);
  return (
    <nav className="navbar" style={{ background: "#131921" }}>
      <div className="hovimage">
        <Link to="/">
          <img
            className="imagehov"
            src={logo}
            alt=""
            srcset=""
            height={45}
            width={138}
          />
        </Link>
      </div>
      <Link to="login">
        {" "}
        <div
          className="hovimage"
          style={{
            color: "white",
            display: "flex",
            height: "50px",
            width: "150px",
          }}
        >
          <div style={{ display: "flex", marginTop: "18px" }}>
            <FmdGoodOutlinedIcon />
          </div>

          <div style={{ display: "inline-block" }}>
            <h1
              style={{
                fontSize: "12px",
                textAlign: "left",
              }}
            >
              Hello
              <br />
              Select your address
            </h1>
          </div>
        </div>
      </Link>

      <div className="searchbar">
        <button
          style={{
            width: "55px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderBottomLeftRadius: "8px",
            borderTopLeftRadius: "8px",
            border: "none",
          }}
        >
          All <ArrowDropDownIcon />
        </button>
        <input type="text" placeholder="Search Amazon.in" />
        <button
          style={{
            width: "50px",
            backgroundColor: "#f7d060",
            borderBottomRightRadius: "8px",
            borderTopRightRadius: "8px",
            border: "none",
          }}
        >
          <SearchIcon />
        </button>
      </div>
      <div
        className="hovimage"
        style={{
          color: "white",
          display: "flex",
          height: "50px",
          width: "80px",
          justifyContent: "center",
          alignItems: "center",
          gap: "1px",
        }}
      >
        <img
          height={15}
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAmVBMVEX/mTMSiAf/////lycAgQAAAIgAAIUAAH4AAIIAAIMAAHwAAHPi4u+kpMvz8/kAAHjn5/Lt7fXd3ey5uddPT6GZmcWDg7n6+v7Ly+HIyOJERJxlZao+PponJ5L29vy0tNbW1uggIJCfn8iGhrsYGJBNTaB2drQQEIx+fripqc5ra62QkMBXV6QiIpFfX6i+vtwyMpw6Opg1NZe0gadDAAAEvUlEQVR4nO3ba3OiSBiG4UzvdDcip8YDiAdQZAIxExP//4/btzHjZH1Nze6HpVPlc1Ul0eiH9g7Q2JKHBwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACA/+gvuPYg4BqacGjCoQmHJhyacF+hSTI5LFd7uV8tD5PE9WDEF2gSHNbaGyklpVRq5Omfh8D1kBw3qaZ6pCiGVFrr/oYc6SZ3OyinTZIpdZCeevnhNyY1jf/jRXm0vejG6S7kssnObhmeNxMbcTSiEuZIt2aeZ7eancNxOWzy7NFrn3cnI/p9pbTfcmFO3ZxaeVN3A3PWJNrS5lAEmb3d5wgvt7KgoMe2kauhuWoSPdK2QHvIwt5ZpPTtQF/p+S7tVbQNPbqK4qhJRluJ17VGZB3di2yPF/o62AxdJkzbUZRt5mZwjpo0lOTY3wrtFGMPHq/vP5N+JxJHiuLomOKmycyTXinOUewLX1IYSTmW7/cpiSjpOTMno3PSJNA049TnQ4gIae8J6cVrSkWbSNdvJvRITbOPdnJO66RJo1QzM3RjaY8YMhLVVmR+JraViGhzEZn9vZnZp7kYnosmCy31+UR180oH1a4QWWyiODJxJhqajaPTpn80oee5OM130WSlVL3pZ11hJO0daiLWITUJ12KiaM+Spn9ssamVKhyMz0GTVNsDrOi6/o5fiVKLdmVis2qFLkXl27OV/rhCh1mdDj9AB01qmoftnz+Z2ir5+Cjk08JP49RfPElxHNvdpZvao2vhyVE9/AAdNHmkOfZ8ihpK2l4m4y4fJ7ryKp2M8248oe1D7vrHDc3Z++EHOHwTmojlr9tRISciHB/beZ3v87puj+OdmMiV+fUE6WI6Hr5J6amnaFEuzptK6av8GAfrKmzDah3Ex/zR798Iik1e5tGT8srBRzh8k7lSLf1ID9NlWNF5yHLcBuugLd6KNl0H87E9N0m7p+Zgj66tUvPBRzh8k2cl/fNZRzLbxut2kczXaWFXIEdFsG6TfH6KH2fnPSb3pXoefITDN3lVanpZBTDhytd12o6kNWrTg/ZPu8vKYzRV6nXwEQ7fRErvkiSLIpNWeViovokqdnmVmii6LBJE3u8D8mCcNEmqYzhbnqT2/TiOvX37Js/e6q1Hv4l9LX8+H8IyT++mCbaTK1fHkzccTz7OO8Hveafp550mWM/vct6Zn085cH7ywe3z2JTOY9O7PY/F+50b9vS++PyiP3tfPLm398WiHv15/aTs109Wd7N+gnW2G4p/uR6b3c96rMiv1u2bT9btgztat+8/3zmY989xbn6+I+7t8x18DngLPi++YYrrChhcf3IDrlO6IdqOpCpSXM/2D/11j234yXWPwy+bXOD6WO5rXkc9vdvrqAWut78N/5dx08f/3zF/fvr/7is0+WrQhEMTDk04NOHQhHv4DtcevsE1NOHQhEMTDk04NOHQhEMTDk04NOHQhEMTDk04NOHQhEMTDk04NOHQhEMTDk04NOHQhEMTDk04NOHQhEMTDk04NOHQhEMTDk04NOHQhEMTDk04NOHQhEMTDk04NOHQhEMTDk04NOHQhEMTDk04NOHQhEMTDk04NOHQhEMTDk04NOHQhEMT7m/cNifkUwM0UQAAAABJRU5ErkJggg=="
          alt=""
        />
        <h1 style={{ fontFamily: "bold", fontSize: "15px" }}>EN</h1>
        <ArrowDropDownIcon />
      </div>
      <Link to="/login">
        <div
          className="hovimage"
          style={{
            color: "white",
            height: "50px",
            width: "150px",
            display: "inline-block",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "left",
          }}
        >
          <p style={{ fontSize: "12px", margin: "auto", marginTop: "7px" }}>
            Hello, signin
          </p>

          <div
            style={{
              display: "flex",
              marginRight: "20px",
              marginBottom: "10px",
            }}
          >
            <p style={{ fontSize: "14px", margin: "auto", fontWeight: "bold" }}>
              Account & Lists
            </p>
            <ArrowDropDownIcon />
          </div>
        </div>
      </Link>

      <div
        className="hovimage"
        style={{
          color: "white",
          height: "50px",
          width: "85px",
          display: "inline-block",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "left",
        }}
      >
        <p style={{ fontSize: "12px", margin: "auto", marginTop: "7px" }}>
          Returns
        </p>
        <p style={{ fontSize: "14px", margin: "auto", fontWeight: "bold" }}>
          & Orders
        </p>
      </div>
      <Link to={"/cart"}>
        <div
          className="hovimage"
          style={{
            color: "white",
            display: "flex",
            height: "50px",
            width: "85px",
          }}
        >
          <AddShoppingCart
            style={{ color: "white", marginTop: "10px", marginLeft: "10px" }}
          />
          <p style={{ fontWeight: "bold" }}>Cart({cartdata.length})</p>
        </div>
      </Link>
    </nav>
  );
};
