import { useState, useEffect, useCallback } from "react";
import "./style.css";

const Carousel = ({ images, alt, onZoom }) => {
  const [idx, setIdx] = useState(0);
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
    if (!multi) return;
    const onKey = (e) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [multi, prev, next]);

  return (
    <div className={`carousel${multi ? "" : " carousel--single"}`}>
      <div className="carousel__viewport">
        <button
          type="button"
          className="carousel__image-btn"
          onClick={() => onZoom && onZoom(idx)}
          aria-label="Zoom image"
        >
          <img src={images[idx]} alt={alt} className="carousel__image" />
          <span className="carousel__zoom-hint" aria-hidden="true">
            ⤢
          </span>
        </button>

        {multi && (
          <>
            <button
              type="button"
              className="carousel__arrow carousel__arrow--prev"
              onClick={prev}
              aria-label="Previous image"
            >
              ‹
            </button>
            <button
              type="button"
              className="carousel__arrow carousel__arrow--next"
              onClick={next}
              aria-label="Next image"
            >
              ›
            </button>
          </>
        )}
      </div>

      {multi && (
        <div className="carousel__dots">
          {images.map((_, i) => (
            <button
              key={i}
              type="button"
              className={`carousel__dot${i === idx ? " carousel__dot--active" : ""}`}
              onClick={() => setIdx(i)}
              aria-label={`Go to image ${i + 1}`}
            />
          ))}
        </div>
      )}

      {multi && (
        <div className="carousel__counter">
          {String(idx + 1).padStart(2, "0")} / {String(len).padStart(2, "0")}
        </div>
      )}
    </div>
  );
};

export default Carousel;
