import { useState, useEffect } from "react";
import items from "../data/items.js";
import ItemCard from "./ItemCard.jsx";
import ItemSearch from "./ItemSearch.jsx";
import { useDebounce } from "../hooks/useDebounce.js";
import LoadingSkeleton from "./LoadingSkeleton.jsx";

export default function ItemList() {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 300);
  const [filteredItems, setFilteredItems] = useState([]);
  const [favorites, setFavorites] = useState(() => {
    try {
      const saved = localStorage.getItem("fav-items");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [loading, setLoading] = useState(true);

  // Simular carga (fetch)
  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => {
      setFilteredItems(items);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (!debouncedSearchTerm) {
      setFilteredItems(items);
      return;
    }
    const filtered = items.filter(item =>
      item.title.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
    );
    setFilteredItems(filtered);
  }, [debouncedSearchTerm]);

  const toggleFavorite = (id) => {
    let updatedFavs;
    if (favorites.includes(id)) {
      updatedFavs = favorites.filter(favId => favId !== id);
    } else {
      updatedFavs = [...favorites, id];
    }
    setFavorites(updatedFavs);
    localStorage.setItem("fav-items", JSON.stringify(updatedFavs));
  };

  return (
    <main className="item-list container" style={{padding:"2rem 1rem"}}>
      <h2>Cartelera Completa</h2>
      <ItemSearch onSearch={setSearchTerm} />
      {loading ? (
        <LoadingSkeleton count={8} />
      ) : filteredItems.length > 0 ? (
        <div className="grid-cards" style={{
          display:"grid",
          gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",
          gap:"1rem"
        }}>
          {filteredItems.map(item => (
            <ItemCard
              key={item.id}
              id={item.id}
              image={item.image}
              title={item.title}
              shortDescription={item.shortDescription}
              isFavorite={favorites.includes(item.id)}
              toggleFavorite={toggleFavorite}
            />
          ))}
        </div>
      ) : (
        <p>No se encontraron películas.</p>
      )}
    </main>
  );
}
