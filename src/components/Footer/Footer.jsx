import { assets } from "../../assets/assets";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="content-left">
          <img src={assets.logo} alt="" />
          <p>
            Are u Hungry and dont want to get out of ut bed and make food? Worry
            not EaterEase is here to cater all your food cravings. Just pick up
            your phone and order any dish from a range of mouth watering
            offerings.
          </p>
          <div className="social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="content-center" style={{ marginTop: "25px" }}>
          <h2>COMPANY</h2>
          <ul style={{ marginTop: "15px" }}>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="content-right" style={{ marginTop: "25px" }}>
          <h2>Get in Touch</h2>
          <ul style={{ marginTop: "15px" }}>
            <li>090078501</li>
            <li>contact@eaterease.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="copyright">
        Copyright 2024 @ EaterEase.com -All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
