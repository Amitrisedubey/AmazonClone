import { UnfoldMore } from "@mui/icons-material";
import "./Footer.css";
import LanguageIcon from "@mui/icons-material/Language";
export const Footer = () => {
  return (
    <div className="footer">
      <div className="foot1all">
        <div className="foot1">
          <div style={{ marginBottom: "75px" }}>
            <p className="ptags">Get to Know Us</p>
            <p className="ptags2">About Us</p>
            <p className="ptags2">Careers</p>
            <p className="ptags2">Press Releases</p>
            <p className="ptags2">Amazon Science</p>
          </div>
          <div style={{ marginBottom: "108px" }}>
            <p className="ptags">Connect with Us</p>
            <p className="ptags2">Facebook</p>
            <p className="ptags2">Twitter</p>
            <p className="ptags2">Instagram</p>
          </div>
          <div style={{ marginTop: "48px" }}>
            <p className="ptags">Make Money with Us</p>
            <p className="ptags2">Sell on Amazon</p>
            <p className="ptags2">Sell under Amazon Accelerator</p>
            <p className="ptags2">Protect and Build Your Brand</p>
            <p className="ptags2">Amazon Global Selling</p>
            <p className="ptags2">Become an Affiliate</p>
            <p className="ptags2">Fulfilment by Amazon</p>
            <p className="ptags2">Advertise Your Products</p>
            <p className="ptags2">Amazon Pay on Merchants</p>
          </div>
          <div style={{ marginBottom: "30px" }}>
            <p className="ptags">Let Us Help You</p>
            <p className="ptags2">COVID-19 and Amazon</p>
            <p className="ptags2">Your Account</p>
            <p className="ptags2">Returns Centre</p>
            <p className="ptags2">100% Purchase Protection</p>
            <p className="ptags2">Amazone App Download</p>
            <p className="ptags2">Help</p>
          </div>
        </div>
      
        <hr color="teal" />
        <div>
          <div className="nav2">
            <img
              height={45}
              width={80}
              src="data:image/png;base64,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"
              alt=""
            />
            <div className="lan">
              <LanguageIcon />
              <p>English</p>
              <UnfoldMore />
            </div>
          </div>
          <div>
            <div className="patags21">
              <p className="ptags2">Australia</p>
              <p className="ptags2">Brazil</p>
              <p className="ptags2">Canada</p>
              <p className="ptags2">China</p>
              <p className="ptags2">France</p>
              <p className="ptags2">Germany</p>
              <p className="ptags2">Italy</p>
              <p className="ptags2">Japan</p>
              <p className="ptags2">Mexico</p>
              <p className="ptags2">Netherlands</p>
              <p className="ptags2">Portland</p>
              <p className="ptags2">Singapore</p>
              <p className="ptags2">Spain</p>
              <p className="ptags2">Turkey</p>
              <p className="ptags2">United Arab Emirates</p>
            </div>
            <div>
              <div className="patags21">
                <p className="ptags2">United Kingdom</p>
                <p className="ptags2">United States</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="foot2">
        <div className="foot2f">
          <div className="foo">
            <p className="ptags3">AbeBooks</p>
            <p className="ptags31">
              Books, art <br /> & collectibles
            </p>
            <p className="ptags3" style={{ marginTop: "20px" }}>
              Shopbop
            </p>
            <p className="ptags31">
              Designer <br /> Fashion Brands
            </p>
          </div>
          <div className="foo">
            <p className="ptags3">Amazon Web Services</p>
            <p className="ptags31">
              Scalable Cloud <br /> Computing Services
            </p>
            <p className="ptags3" style={{ marginTop: "20px" }}>
              Amazon Business
            </p>
            <p className="ptags31">
              Everything For <br /> Your Business
            </p>
          </div>
          <div className="foo">
            <p className="ptags3">Audible</p>
            <p className="ptags31">
              Download <br /> Audio Books
            </p>
            <p className="ptags3" style={{ marginTop: "20px" }}>
              Prime Now
            </p>
            <p className="ptags31">
              2-Hour Delivery <br /> on Everyday items
            </p>
          </div>
          <div className="foo">
            <p className="ptags3">DPReview</p>
            <p className="ptags31">
              Digital <br /> Photography
            </p>
            <p className="ptags3" style={{ marginTop: "20px" }}>
              Amazone Prime Music
            </p>
            <p className="ptags31">
              100 million songs, ad-free <br /> Over 15 million podcast episodes
            </p>
          </div>
          <div className="foo">
            <p className="ptags3">IMDb</p>
            <p className="ptags31">
              Movies, TV <br /> & Celebrities
            </p>
            <p className="ptags3" style={{ marginTop: "20px" }}>
              Amazon Prime Video
            </p>
            <p className="ptags31">
              Movies, TV <br /> & Celebrities
            </p>
          </div>
        </div>
        <div>
          <div
            style={{ display: "flex", justifyContent: "center", gap: "15px" }}
          >
            <p className="ptags3">Conditions of Use & Sale</p>
            <p className="ptags3">Privacy Notice</p>
            <p className="ptags3">Interest Based Ads</p>
          </div>
          <div
            style={{ display: "flex", justifyContent: "center", gap: "15px" }}
          >
            <p className="ptags3">
              © 1996-2023, Amazon.com, Inc. or its affiliates
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
