"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  const [typedText, setTypedText] = useState("");
  const textToType = "./404NotFound";

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
    <section className="flex flex-col items-center justify-center h-screen bg-black">
      <h1 className="text-4xl font-bold mb-6 font-mono">{typedText}</h1>

      <Button className="bg-transparent border font-mono" asChild>
        <Link href="/">return_home.sh</Link>
      </Button>
    </section>
  );
}
