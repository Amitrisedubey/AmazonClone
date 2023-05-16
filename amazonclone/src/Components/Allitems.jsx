import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import "./Allitems.css";
import { useNavigate } from "react-router-dom";
export const ItemsList = () => {
  const navigate = useNavigate();
  return (
    <div className="main">
      <div className="productlist">
        <div className="firstdiv">
          <h1 className="tagsall">Great Summer sale</h1>
          <div
            style={{
              display: "inline-block",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              height={280}
              width={270}
              style={{ marginRight: 15 }}
              src="https://images-eu.ssl-images-amazon.com/images/G/31/IN-Events/MayArt23/GW_PC-CC_1X._SY304_CB589490148_.jpg"
              alt=""
            />
            <a href="" style={{ marginRight: "220px", marginTop: "50px" }}>
              See all
            </a>
          </div>
        </div>
        <div
          onClick={() =>
            navigate(
              `/showProduct/${"home"}/${"freshner"}/${"cleaning"}/${"camera"}`
            )
          }
        >
          <h1 className="tagsall">Smartphones that suits your budget</h1>
          <div className="pro">
            <div>
              <img
                width={120}
                height={100}
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/Meghana/iQOO/MayART/D80081192_WLD_MayART_MSO_Design-SIM_PC_QuadCard_186X116._SY116_CB591207306_.jpg"
                alt=""
              />
              <p
                style={{
                  color: "grey",
                  fontSize: "11px",
                  textAlign: "left",
                  marginLeft: "15px",
                }}
              >
                Budget | Below <br />
                ₹10000
              </p>
            </div>
            <div>
              <div>
                <img
                  width={120}
                  height={100}
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/Meghana/iQOO/MayART/D80081192_WLD_MayART_MSO_Design-SIM_PC_QuadCard_186X116_2._SY116_CB591207306_.jpg"
                  alt=""
                />
                <p
                  style={{
                    color: "grey",
                    fontSize: "11px",
                    textAlign: "left",
                    marginLeft: "15px",
                  }}
                >
                  Mid range | ₹10000 - <br /> ₹25000
                </p>
              </div>
            </div>
            <div>
              {" "}
              <div>
                <img
                  width={120}
                  height={100}
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/Meghana/iQOO/MayART/D80081192_WLD_MayART_MSO_Design-SIM_PC_QuadCard_186X116_3._SY116_CB591207306_.jpg"
                  alt=""
                />
                <p
                  style={{
                    color: "grey",
                    fontSize: "11px",
                    textAlign: "left",
                    marginLeft: "15px",
                  }}
                >
                  Premium | ₹25,000 - <br /> ₹40,000
                </p>
              </div>
            </div>
            <div>
              <div>
                <img
                  width={120}
                  height={100}
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/Meghana/iQOO/MayART/D80081192_WLD_MayART_MSO_Design-SIM_PC_QuadCard_186X116_4._SY116_CB591207306_.jpg"
                  alt=""
                />
                <p
                  style={{
                    color: "grey",
                    fontSize: "11px",
                    textAlign: "left",
                    marginLeft: "15px",
                  }}
                >
                  Ultra premium | Above <br /> ₹40,000
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          onClick={() =>
            navigate(
              `/showProduct/${"kitchen"}/${"kitchenitem"}/${"items"}/${"list"}`
            )
          }
        >
          <p className="tagsall">Starting ₹79 | Home, kitchen & more</p>
          <div className="pro">
            <div>
              <img
                width={120}
                height={100}
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/IN/OHL/GW/MayART/PCQC/PC_QuadCard_186X116_1._SY116_CB590728937_.jpg"
                alt=""
              />
              <p
                style={{
                  color: "grey",
                  fontSize: "11px",
                  textAlign: "left",
                  marginLeft: "15px",
                }}
              >
                Kitchen appliances
              </p>
            </div>
            <div>
              <div>
                <img
                  width={120}
                  height={100}
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/IN/OHL/GW/MayART/PCQC/PC_QuadCard_186X116_4._SY116_CB590728937_.jpg"
                  alt=""
                />
                <p
                  style={{
                    color: "grey",
                    fontSize: "11px",
                    textAlign: "left",
                    marginLeft: "15px",
                  }}
                >
                  Home decor
                </p>
              </div>
            </div>
            <div>
              {" "}
              <div>
                <img
                  width={120}
                  height={100}
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/IN/OHL/GW/MayART/PCQC/PC_QuadCard_186X116_3._SY116_CB590728937_.jpg"
                  alt=""
                />
                <p
                  style={{
                    color: "grey",
                    fontSize: "11px",
                    textAlign: "left",
                    marginLeft: "15px",
                  }}
                >
                  Furniture & mattresses
                </p>
              </div>
            </div>
            <div>
              <div>
                <img
                  width={120}
                  height={100}
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/IN/OHL/GW/MayART/PCQC/PC_QuadCard_186X116_2._SY116_CB590728937_.jpg"
                  alt=""
                />
                <p
                  style={{
                    color: "grey",
                    fontSize: "11px",
                    textAlign: "left",
                    marginLeft: "15px",
                  }}
                >
                  Home improvement
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <p className="tagsall">Sign in for your best experience</p>
          <button
            style={{
              backgroundColor: "#ffd814",
              borderColor: "#fcd200",
              border: "none",
              width: "255px",
              height: "35px",
              borderRadius: "8px",
            }}
          >
            Sign in securely
          </button>
          <div style={{ marginTop: "15px", marginRight: "10px" }}>
            <img
              width={275}
              src="https://m.media-amazon.com/images/G/31/img19/AMS/Houseads/Laptops-Sept2019._CB436595915_.jpg"
              alt=""
            />
          </div>
        </div>
        <div
          onClick={() =>
            navigate(
              `/showProduct/${"homes"}/${"homeitemitem"}/${"homeitems"}/${"homeitemlist"}`
            )
          }
        >
          <p className="tagsall">Starting ₹99 | Amazon Brands & more</p>
          <div className="pro">
            <div>
              <img
                width={120}
                height={100}
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Gateway/PB/Desktop/QC/d_title1_AB_PC_QuadCard_186x116._SY116_CB589306375_.jpg"
                alt=""
              />
              <p
                style={{
                  color: "grey",
                  fontSize: "11px",
                  textAlign: "left",
                  marginLeft: "15px",
                }}
              >
                Starting ₹299 | <br /> Curtains
              </p>
            </div>
            <div>
              <div>
                <img
                  width={120}
                  height={100}
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Gateway/PB/Desktop/QC/d_title2_AB_PC_QuadCard_186x116._SY116_CB589306375_.jpg"
                  alt=""
                />
                <p
                  style={{
                    color: "grey",
                    fontSize: "11px",
                    textAlign: "left",
                    marginLeft: "15px",
                  }}
                >
                  Starting ₹299 | Storage & containers
                </p>
              </div>
            </div>
            <div>
              {" "}
              <div>
                <img
                  width={120}
                  height={100}
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Gateway/PB/Desktop/QC/C.Title3_Grocery_AB_PC_QuadCard_186x116._SY116_CB589306375_.jpg"
                  alt=""
                />
                <p
                  style={{
                    color: "grey",
                    fontSize: "11px",
                    textAlign: "left",
                    marginLeft: "15px",
                  }}
                >
                  Starting ₹99 | Daily essentials
                </p>
              </div>
            </div>
            <div>
              <div>
                <img
                  width={120}
                  height={100}
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/Symbol/2023/May_art_GW/PC_QC_4_1x._SY116_CB591203050_.png"
                />
                <p
                  style={{
                    color: "grey",
                    fontSize: "11px",
                    textAlign: "left",
                    marginLeft: "15px",
                  }}
                >
                  Under ₹599 | Clothing, shoes & more
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <p className="tagsall">Medicines | Up to 35% off</p>
          <div
            style={{
              display: "inline-block",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              height={280}
              width={270}
              style={{ marginRight: 15 }}
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Pharmacy/PC_CategoryCard_379x3091x1x_1._SY304_CB589361649_.png"
              alt=""
            />
            <a href="" style={{ marginRight: "155px" }}>
              Visit the store
            </a>
          </div>
        </div>
        <div
          onClick={() =>
            navigate(
              `/showProduct/${"clothing"}/${"footwear"}/${"beauty"}/${"jewellery"}`
            )
          }
        >
          <p className="tagsall">Under ₹499 | Pocket-friendly Fashion</p>
          <div className="pro">
            <div>
              <img
                width={120}
                height={100}
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Fashion/Event/Gateway/MayART/Event/QC/PC-QC/PFF-186-116-1._SY116_CB589544318_.jpg"
                alt=""
              />
              <p
                style={{
                  color: "grey",
                  fontSize: "11px",
                  textAlign: "left",
                  marginLeft: "15px",
                }}
              >
                Clothing
              </p>
            </div>
            <div>
              <div>
                <img
                  width={120}
                  height={100}
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Fashion/Event/Gateway/MayART/Event/QC/PC-QC/PFF-186-116-3._SY116_CB589544318_.jpg"
                  alt=""
                />
                <p
                  style={{
                    color: "grey",
                    fontSize: "11px",
                    textAlign: "left",
                    marginLeft: "15px",
                  }}
                >
                  Footwear
                </p>
              </div>
            </div>
            <div>
              {" "}
              <div>
                <img
                  width={120}
                  height={100}
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Fashion/Event/Gateway/MayART/Event/QC/PC-QC/PFF-186-116-2._SY116_CB589544318_.jpg"
                  alt=""
                />
                <p
                  style={{
                    color: "grey",
                    fontSize: "11px",
                    textAlign: "left",
                    marginLeft: "15px",
                  }}
                >
                  Beauty
                </p>
              </div>
            </div>
            <div>
              <div>
                <img
                  width={120}
                  height={100}
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Fashion/Event/Gateway/MayART/Event/QC/PC-QC/PFF-186-116-4._SY116_CB589544318_.jpg"
                  alt=""
                />
                <p
                  style={{
                    color: "grey",
                    fontSize: "11px",
                    textAlign: "left",
                    marginLeft: "15px",
                  }}
                >
                  Fashion jewellery
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          onClick={() =>
            navigate(`/showProduct/${"kitcn"}/${"item"}/${"items"}/${"list"}`)
          }
        >
          <p className="tagsall">
            Starting ₹99 | Budget buys in books, toys & more
          </p>
          <div className="pro">
            <div>
              <img
                width={120}
                height={100}
                src="https://images-eu.ssl-images-amazon.com/images/G/31/media/MayART_2023/1-1X._SY116_CB589422850_.jpg"
                alt=""
              />
              <p
                style={{
                  color: "grey",
                  fontSize: "11px",
                  textAlign: "left",
                  marginLeft: "15px",
                }}
              >
                Books under ₹199
              </p>
            </div>
            <div>
              <div>
                <img
                  width={120}
                  height={100}
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/media/MayART_2023/2-1X._SY116_CB589422850_.jpg"
                  alt=""
                />
                <p
                  style={{
                    color: "grey",
                    fontSize: "11px",
                    textAlign: "left",
                    marginLeft: "15px",
                  }}
                >
                  Toys under ₹499
                </p>
              </div>
            </div>
            <div>
              {" "}
              <div>
                <img
                  width={120}
                  height={100}
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/media/MayART_2023/3-1X._SY116_CB589422850_.jpg"
                  alt=""
                />
                <p
                  style={{
                    color: "grey",
                    fontSize: "11px",
                    textAlign: "left",
                    marginLeft: "15px",
                  }}
                >
                  Weighing scales ₹299
                </p>
              </div>
            </div>
            <div>
              <div>
                <img
                  width={120}
                  height={100}
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/media/MayART_2023/4-1X._SY116_CB589422850_.jpg"
                  alt=""
                />
                <p
                  style={{
                    color: "grey",
                    fontSize: "11px",
                    textAlign: "left",
                    marginLeft: "15px",
                  }}
                >
                  Video game accessories starting ₹199
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
