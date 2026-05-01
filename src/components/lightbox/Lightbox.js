import { useEffect, useState, useCallback } from "react";
import "./style.css";

const Lightbox = ({ images, startIndex = 0, alt, onClose }) => {
  const [idx, setIdx] = useState(startIndex);
  const len = images.length;
  const multi = len > 1;

  const prev = useCallback(
    () => setIdx((i) => (i - 1 + len) % len),
    [len]
  );
  const next = useCallback(
    () => setIdx((i) => (i + 1) % len),
    [len]
  );

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (multi && e.key === "ArrowLeft") prev();
      if (multi && e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose, multi, prev, next]);

  return (
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <button
        type="button"
        className="lightbox__close"
        onClick={onClose}
        aria-label="Close"
      >
        ×
      </button>

      <img
        src={images[idx]}
        alt={alt}
        className="lightbox__image"
        onClick={(e) => e.stopPropagation()}
      />

      {multi && (
        <>
          <button
            type="button"
            className="lightbox__arrow lightbox__arrow--prev"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Previous"
          >
            ‹
          </button>
          <button
            type="button"
            className="lightbox__arrow lightbox__arrow--next"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Next"
          >
            ›
          </button>
          <div
            className="lightbox__counter"
            onClick={(e) => e.stopPropagation()}
          >
            {String(idx + 1).padStart(2, "0")} / {String(len).padStart(2, "0")}
          </div>
        </>
      )}
    </div>
  );
};

export default Lightbox;
