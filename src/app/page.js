"use client";
import Header from "@/components/headerBar/header";
import MainSection from "@/components/mainSection/main";
import Shortner from "@/components/shortnerUrlsection/shortner";
import "./style.css";
import { useState } from "react";
import api from "@/api/api";

export default function Home() {
  const [urlToShort, setUrlToShort] = useState("");
  const [errorMessage, setErrorMessage] = useState('')

  async function HandleUrlShortner() {

    try {
      const responseUrl = await api.post(`shorten?url=${urlToShort}`);

      console.log(responseUrl.data);
    } catch (error) {
      const { error_code } = error.response.data;

      error_code == 1 && setErrorMessage('Parâmetro da Url está vazio');
      error_code == 2 && setErrorMessage('Url enviado é inválido');
      error_code == 3 && setErrorMessage('Espere um segundo e tente novamente');
      error_code == 4 && setErrorMessage('O endereço IP foi bloqueado por violar nossos termos de serviço');
      error_code == 5 && setErrorMessage('código shrtcode (slug) já usado/em uso');
      error_code == 6 || error_code > 10 && setErrorMessage('Erro desconhecido');
      error_code == 7 && setErrorMessage('Nenhum código especificado (o parâmetro "código" está vazio)');
      error_code == 8 && setErrorMessage('Código inválido enviado (código não encontrado/não existe esse link curto)');
      error_code == 9 && setErrorMessage('Parâmetros obrigatórios ausentes');
      error_code == 10 && setErrorMessage('Tentando encurtar um link não permitido');

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
        errorMessage={errorMessage}
      />
    </main>
  );
}
