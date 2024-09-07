"use client";
import "./style.css";
import api from "@/api/api";
import { useContext } from "react";
import FooterBar from "@/components/footerBar";
import { UrlContext } from "@/context/context";
import Header from "@/components/headerBar/header";
import MainSection from "@/components/mainSection/main";
import Shortner from "@/components/shortnerUrlsection/shortner";
import ShortedSection from "@/components/shortedSection/shorted";
import BoostSection from "@/components/BoostSection/boostSection";

export default function Home() {
  const { urlToShort, urlShorted, setUrlShorted, setErrorMessage } =
    useContext(UrlContext);

  async function HandleUrlShortner() {
    try {
      const responseUrl = await api.post("/", {
        url: urlToShort,
      });

      const newUrl = responseUrl.data.short_url;

      setErrorMessage("");
      setUrlShorted({ shortUrl: newUrl, originalLink: urlToShort });
    } catch (error) {
      setErrorMessage("URL Inválido");
    }
  }
  return (
    <main className="main">
      <Header />
      <MainSection />

      <section className="gray-section">
        <Shortner HandleUrlShortner={HandleUrlShortner} />

        {urlShorted.shortUrl && (
          <>
            <ShortedSection />
          </>
        )}
      </section>

      <div className="bottom-section">
        <BoostSection />
        <FooterBar />
      </div>
    </main>
  );
}
