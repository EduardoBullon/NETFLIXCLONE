import { useState, useEffect } from "react";
import { notifyAdded, notifyRemoved } from "../utils/notifyFavorite.js";

export default function ItemCard({ id, image, title, shortDescription, isFavorite, toggleFavorite }) {

  const handleClick = () => {
    toggleFavorite(id);
    if (!isFavorite) notifyAdded(title);
    else notifyRemoved(title);
  };

  return (
    <article className="item-card">
      <img src={image} alt={title} className="item-img" />
      <div className="item-info">
        <h3>{title}</h3>
        <p>{shortDescription}</p>
        <button onClick={handleClick} aria-label={isFavorite ? "Quitar de favoritos" : "Agregar a favoritos"}>
          <span style={{fontSize:"1.5rem", color: isFavorite ? "gold" : "gray"}}>
            ★
          </span>
        </button>
      </div>
    </article>
  );
}
