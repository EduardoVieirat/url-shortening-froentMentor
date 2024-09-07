import logoImg from "../../assets/logo-2.svg";
// import iconFacebook from "../../assets/icon-facebook.svg";

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

      <section className="social-media">
        {/* <Image src={iconFacebook} alt="icon" /> */}
      </section>
    </footer>
  );
}
