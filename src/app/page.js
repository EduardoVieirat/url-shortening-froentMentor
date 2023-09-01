"use client";
import Header from "@/components/headerBar/header";
import MainSection from "@/components/mainSection/main";
import Shortner from "@/components/shortnerUrlsection/shortner";
import "./style.css";
import { useContext, useState } from "react";
import api from "@/api/api";
import FooterBar from "@/components/footerBar";
import BoostSection from "@/components/BoostSection/boostSection";
import { UrlContext } from "@/context/context";
import ShortedSection from "@/components/shortedSection/shorted";

export default function Home() {
  const { urlToShort, urlShorted, setUrlShorted } = useContext(UrlContext);

  const [errorMessage, setErrorMessage] = useState("");

  async function HandleUrlShortner() {
    try {
      const responseUrl = await api.post(`/shorten?url=${urlToShort}`);

      const url = responseUrl.data.result;

      await setUrlShorted({ ...url });
    } catch (error) {
      console.log(error.response);
      const { error_code } = error.response.data;

      error_code == 1 && setErrorMessage("Parâmetro da Url está vazio");
      error_code == 2 && setErrorMessage("Url enviado é inválido");
      error_code == 3 && setErrorMessage("Espere um segundo e tente novamente");
      error_code == 4 &&
        setErrorMessage(
          "O endereço IP foi bloqueado por violar nossos termos de serviço"
        );
      error_code == 5 &&
        setErrorMessage("código shrtcode (slug) já usado/em uso");
      error_code == 6 ||
        (error_code > 10 && setErrorMessage("Erro desconhecido"));
      error_code == 7 &&
        setErrorMessage(
          'Nenhum código especificado (o parâmetro "código" está vazio)'
        );
      error_code == 8 &&
        setErrorMessage(
          "Código inválido enviado (código não encontrado/não existe esse link curto)"
        );
      error_code == 9 && setErrorMessage("Parâmetros obrigatórios ausentes");
      error_code == 10 &&
        setErrorMessage("Tentando encurtar um link não permitido");
    }
  }

  return (
    <main className="main">
      <Header />
      <MainSection />

      <section className="gray-section">
        <Shortner
          HandleUrlShortner={HandleUrlShortner}
          errorMessage={errorMessage}
        />

        {urlShorted.code && (
          <>
            <ShortedSection
              original_link={urlShorted.original_link}
              full_short_link={urlShorted.full_short_link}
            />
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
