"use client";

import Image from "next/image";
import logoImg from "../../assets/logo.svg";
import "./style.css";
import { useState } from "react";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="header-shotly">
      <Image
        src={logoImg}
        alt="Logo Image"
        className="image-logo"
        width={150}
      />
    </header>
  );
}
