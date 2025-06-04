import { useNavigate } from "react-router-dom";

export default function HeroBanner() {
  const navigate = useNavigate();

  return (
    <section className="hero-banner" style={{
      backgroundImage: `url('https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "100vh",
      color: "white",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      padding: "0 1rem",
    }}>
      <h2 className="hero-title" style={{fontSize:"3rem", fontWeight:"700"}}>Netflix</h2>
      <p className="hero-subtitle" style={{fontSize:"1.5rem", marginBottom:"2rem"}}>
        Las mejores peliculas y series, ¡disponibles ahora mismo!
      </p>
      <div>
        <button className="btn" onClick={() => navigate("/items")} style={{marginRight:"1rem"}}>
          Ver series
        </button>
        <button className="btn btn-outline" onClick={() => navigate("/contact")}>
          Contáctanos
        </button>
      </div>
    </section>
  );
}
