"use client";

import LocaleSwitcher from "@/components/LocaleSwitcher";
import { useEffect, useState } from "react";

export default function Home() {
  const [typedText, setTypedText] = useState("");
  const textToType = "Hello World !";

  useEffect(() => {
    const typingTimer = setTimeout(() => {
      const textLength = typedText.length;
      if (textLength < textToType.length) {
        setTypedText(textToType.substring(0, textLength + 1));
      }
    }, 100);

    return () => clearTimeout(typingTimer);
  }, [textToType, typedText]);

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gradient-to-b">
      <header></header>
      <main className="container mx-auto">
        <div className="container mx-auto flex items-center justify-center">
          <LocaleSwitcher />
        </div>
        <h1 className="text-4xl font-bold text-center mt-20">{typedText}</h1>
      </main>
      <footer className="text-center pb-4">
        <p className="mb-4">
          Made by{" "}
          <a
            href="https://github.com/hisyam99"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            hisyam99
          </a>
        </p>
      </footer>
      <div className="main"></div>
    </div>
  );
}
