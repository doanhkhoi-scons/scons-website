"use client";

import { useEffect } from "react";
import AOS from "aos";

import "aos/dist/aos.css";

type Props = {
  children: React.ReactNode;
};

export default function AOSProvider({ children }: Props) {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
      offset: 80,
      mirror: false,
    });
  }, []);

  return <>{children}</>;
}