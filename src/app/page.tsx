"use client";

import React from "react";

import GoogleTranslate from "@/components/GoogleTranslate";
import Componente1 from "@/components/Componente1";
import Componente2 from "@/components/Componente2";
import Componente3 from "@/components/Componente3";
import Componente4 from "@/components/Componente4";

const Home = () => {
  return (
    <div
      style={{
        width: "40%",
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        alignItems: "center",
        padding: "1rem",
        textAlign: "justify",
        textJustify: "inter-word",
      }}
    >
      <GoogleTranslate />

      <Componente1 />
      <Componente2 />
      <Componente3 />
      <Componente4 />
    </div>
  );
};

export default Home;
