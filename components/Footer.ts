import React from "react";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer1">
        <div className="footer-section subscribe">
          <h4>BE THE FIRST TO KNOW</h4>
          <p>Sign up for updates from mettä muse.</p>
          {/* <div className="subscribe-form">
            <input style={{width:120}} type="email" placeholder="Enter your e-mail..." />
            <button>SUBSCRIBE</button>
          </div> */}
          <div className="subscribe-section">
  <input
    type="email"
    placeholder="Enter your e-mail..."
    className="email-input"
  />
  <button className="subscribe-button">SUBSCRIBE</button>
</div>

        </div>
        <div className="footer-section contact">
          <h4>CONTACT US</h4>
          <p>+44 221 133 5360</p>
          <p>customercare@mettamuse.com</p>
          <h4>CURRENCY</h4>
          <p>🇺🇸 USD</p>
          <p>
            Transactions will be completed in Euros and a currency reference is
            available on hover.
          </p>
        </div>
      </div>
      <hr></hr>

      <div className="footer-section links">
        <div className="footer1">
          <div className="metta">
            <h4>mettā muse</h4>
            <ul>
              <li>
                <a href="" style={{ textDecoration: "none", color: "white" }}>
                  Fund transfer
                </a>
              </li>
              <li>
                <a href="" style={{ textDecoration: "none", color: "white" }}>
                  Stories
                </a>
              </li>
              <li>
                <a href="" style={{ textDecoration: "none", color: "white" }}>
                  Artisans
                </a>
              </li>
              <li>
                <a href="" style={{ textDecoration: "none", color: "white" }}>
                  Boutiques
                </a>
              </li>
              <li>
                <a href="" style={{ textDecoration: "none", color: "white" }}>
                  Contact Us
                </a>
              </li>
              <li>
                <a href="" style={{ textDecoration: "none", color: "white" }}>
                  EU Compliances Docs
                </a>
              </li>
            </ul>
          </div>
          <div className="quick">
            <h4>QUICK LINKS</h4>
            <ul className="ql">
              <li><a href="" style={{ textDecoration: "none", color: "white" }}>Orders & Shipping</a></li>
              <li><a href="" style={{ textDecoration: "none", color: "white" }}>Join/Login as a Seller</a></li>
              <li><a href="" style={{ textDecoration: "none", color: "white" }}>Payment & Pricing</a></li>
              <li><a href="" style={{ textDecoration: "none", color: "white" }}>Return & Refunds</a></li>
              <li><a href="" style={{ textDecoration: "none", color: "white" }}>FAQs</a></li>
              <li><a href="" style={{ textDecoration: "none", color: "white" }}>Privacy Policy</a></li>
              <li><a href="" style={{ textDecoration: "none", color: "white" }}>Orders & Shipping</a></li>
              <li><a href="" style={{ textDecoration: "none", color: "white" }}>Terms & Conditions</a></li>
            </ul>
          </div>

          {/* <div className="footer-section follow"> */}
          <div className="last">
            <div className="footer-section contact">
              <h4>FOLLOW US</h4>
              <div className="follow">
                <img src="media/instagram.svg" style={{ width: 20 }}></img>
                <img src="media/linkedin.svg" style={{ width: 20 }}></img>
              </div>
              <h4>mettā muse accept</h4>
              <div className="icons">
                <img
                  src="media/download.png"
                  style={{ width: 60, height: 40 }}
                ></img>
                <img
                  src="media/mastercard.jpg"
                  style={{ width: 60, height: 40 }}
                ></img>
                <img
                  src="media/paypal.png"
                  style={{ width: 60, height: 40 }}
                ></img>
                <img
                  src="media/amex.jpg"
                  style={{ width: 60, height: 40 }}
                ></img>
                <img
                  src="media/apple1.png"
                  style={{ width: 60, height: 40 }}
                ></img>
                <img
                  src="media/shoppay.png"
                  style={{ width: 60, height: 40 }}
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>

    </footer>
  );
}

export default Footer;
