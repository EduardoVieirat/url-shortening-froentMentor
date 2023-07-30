"use client";
import Header from "@/components/headerBar/header";
import MainSection from "@/components/mainSection/main";
import Shortner from "@/components/shortnerUrlsection/shortner";
import "./style.css";
import { useState } from "react";
import api from "@/api/api";

export default function Home() {
  const [urlToShort, setUrlToShort] = useState("");
  
  async function HandleUrlShortner() {

    try {
      const responseUrl = await api.post(`shorten?url=${urlToShort}`);

      console.log(responseUrl.data);
    } catch (error) {
      const { error_code } = error.response.data;

      error_code == 1 && setUrlToShort('Parâmetro da Url está vazio');
      error_code == 2 && setUrlToShort('Url enviado é inválido');
      error_code == 3 && setUrlToShort('Espere um segundo e tente novamente');
      error_code == 4 && setUrlToShort('O endereço IP foi bloqueado por violar nossos termos de serviço');
      error_code == 5 && setUrlToShort('código shrtcode (slug) já usado/em uso');
      error_code == 6 || error_code > 10 && setUrlToShort('Erro desconhecido');
      error_code == 7 && setUrlToShort('Nenhum código especificado (o parâmetro "código" está vazio)');
      error_code == 8 && setUrlToShort('Código inválido enviado (código não encontrado/não existe esse link curto)');
      error_code == 9 && setUrlToShort('Parâmetros obrigatórios ausentes');
      error_code == 10 && setUrlToShort('Tentando encurtar um link não permitido');

    }
  }

  return (
    <main className="main">
      <Header />
      <MainSection />
      <Shortner
        urlToShort={urlToShort}
        setUrlToShort={setUrlToShort}
        HandleUrlShortner={HandleUrlShortner}
      />
    </main>
  );
}
