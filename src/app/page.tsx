"use client";

import React, { useEffect, useRef, useState } from "react";

export const useEffectOnce = (effect: () => void | (() => void)) => {
  const effectFn = useRef<() => void | (() => void)>(effect);
  const destroyFn = useRef<void | (() => void)>();
  const effectCalled = useRef(false);
  const rendered = useRef(false);
  const [, setVal] = useState<number>(0);

  if (effectCalled.current) {
    rendered.current = true;
  }

  useEffect(() => {
    if (!effectCalled.current) {
      destroyFn.current = effectFn.current();
      effectCalled.current = true;
    }

    setVal((val) => val + 1);

    return () => {
      if (!rendered.current) {
        return;
      }

      if (destroyFn.current) {
        destroyFn.current();
      }
    };
  }, []);
};

export default function Home() {
  // const [text, setText] = useState(
  //   `O sol brilha intensamente no céu azul, enquanto as folhas das árvores balançam suavemente ao vento. É uma tarde tranquila de primavera, onde os pássaros cantam e as flores desabrocham em cores vibrantes. É um convite à contemplação e ao deleite da natureza.`
  // );

  // const googleTranslateElementInit = () => {
  //   new window.google.translate.TranslateElement(
  //     {
  //       pageLanguage: "pt",
  //       includedLanguages: "es,en",
  //       autoDisplay: "false",
  //       layout: google.translate.TranslateElement.InlineLayout.TOP_LEFT,
  //     },
  //     "google_translate_element"
  //   );
  // };

  // useEffectOnce(() => {
  //   var addScript = document.createElement("script");
  //   addScript.setAttribute(
  //     "src",
  //     "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
  //   );
  //   document.body.appendChild(addScript);
  //   window.googleTranslateElementInit = googleTranslateElementInit;
  // });

  // return (
  //   <div className={""}>
  //     {/* <div id="google_translate_element"></div> */}

  //     <div className="w-50 m-auto">{text}</div>
  //   </div>
  // );
  return <div>HOME</div>;
}
