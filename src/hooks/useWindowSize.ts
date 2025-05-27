import { useEffect, useState } from "react";

const getWindowDimensions = () => {
  if (typeof window !== "undefined") {
    const { innerWidth: width, innerHeight: height } = window;
    return { width, height };
  }
  return { width: 0, height: 0 };
};

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    window.addEventListener("resize", () => setWindowDimensions(getWindowDimensions()));
  }, []);

  return windowDimensions;
}
