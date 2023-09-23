import logoImg from "../../assets/logo-2.svg";
import IconTwitter from "../../assets/icon-twitter.svg";
import iconInstagram from "../../assets/icon-instagram.svg";
import iconPinterest from "../../assets/icon-pinterest.svg";
import iconFacebook from "../../assets/icon-facebook.svg";

import "./style.css";
import Image from "next/image";

export default function FooterBar() {
  return (
    <footer className="footer-shortly">
      <Image
        src={logoImg}
        alt="Logo Image"
        className="image-logo"
        width={100}
      />

      <section className="infos-section">
        <div>
          <h4>Features</h4>

          <ul>
            <li>Link Shortening</li>
            <li>Branded Links</li>
            <li>Analytics</li>
          </ul>
        </div>
        <div>
          <h4>Resources</h4>
          <ul>
            <li>Blog</li>
            <li>Developers</li>
            <li>Support</li>
          </ul>
        </div>
        <div>
          <h4>Company</h4>
          <ul>
            <li>About</li>
            <li>Our team</li>
            <li>Careers</li>
            <li>Contact</li>
          </ul>
        </div>
      </section>

      <section className="social-media">
        <Image src={IconTwitter} alt="" />
        <Image src={iconFacebook} alt="" />
        <Image src={iconPinterest} alt="" />
        <Image src={iconInstagram} alt="" />
      </section>
    </footer>
  );
}
