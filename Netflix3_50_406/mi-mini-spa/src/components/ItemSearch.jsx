import { useState } from "react";

export default function ItemSearch({ onSearch }) {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Buscar película..."
      value={input}
      onChange={handleChange}
      aria-label="Buscar película"
      className="input-search"
      style={{padding:"0.5rem", width:"100%", maxWidth:"400px", marginBottom:"1rem"}}
    />
  );
}
