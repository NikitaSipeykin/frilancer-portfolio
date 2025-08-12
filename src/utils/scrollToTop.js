import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function scrollToTop() {
  const {pathName} = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathName]); // This effect runs once when the component mounts, scrolling to the top of the page.

  return null; // This component does not render anything, it just triggers the scroll effect.
} 