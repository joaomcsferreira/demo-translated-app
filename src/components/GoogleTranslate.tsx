import React, { useEffect, useState } from "react";
import { getCookie, hasCookie, setCookie } from "cookies-next";

const languages = [
  {
    label: "Inglês",
    value: "/auto/en",
    image: "https://flagcdn.com/h40/us.png",
  },
  {
    label: "Espanhol",
    value: "/auto/es",
    image: "https://flagcdn.com/h40/es.png",
  },
  {
    label: "Português",
    value: "/auto/pt",
    image: "https://flagcdn.com/h40/br.png",
  },
];

const GoogleTranslate = () => {
  const [selected, setSelected] = useState<string | null>(null);

  const googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement(
      {
        pageLanguage: "pt",
        autoDisplay: false,
        includedLanguages: "en,es,pt",
        layout: window.google.translate.TranslateElement.InlineLayout.TOP_LEFT,
      },
      "google_translate_element"
    );
  };

  const langChange = (e: string) => {
    if (hasCookie("googtrans")) {
      setCookie("googtrans", decodeURI(e));
      setSelected(e);
    } else {
      setCookie("googtrans", e);
      setSelected(e);
    }

    window.location.reload();
  };

  useEffect(() => {
    var addScript = document.createElement("script");
    addScript.setAttribute(
      "src",
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
    );
    document.body.appendChild(addScript);
    window.googleTranslateElementInit = googleTranslateElementInit;

    if (hasCookie("googtrans")) {
      const cookie = getCookie("googtrans")!;
      setSelected(cookie);
    } else {
      setSelected("/auto/pt");
    }
  }, []);

  return (
    <>
      <div
        id="google_translate_element"
        style={{
          width: "0px",
          height: "0px",
          position: "absolute",
          left: "50%",
          zIndex: -99999,
          visibility: "hidden",
        }}
      ></div>

      <div style={{ display: "flex", gap: "0.5rem" }}>
        {languages.map((language) => (
          <img
            key={language.label}
            src={language.image}
            onClick={() => langChange(language.value)}
            style={{
              borderRadius: "50%",
              width: "2rem",
              height: "2rem",
              objectFit: "cover",
              cursor: "pointer",
            }}
          />
        ))}
      </div>
    </>
  );
};

export default GoogleTranslate;
