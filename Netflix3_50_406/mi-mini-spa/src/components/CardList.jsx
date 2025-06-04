import items from "../data/items.js"; 

export default function CardList() {
  const featured = items.slice(0, 6); 

  return (
    <main className="container py-5">
      <h2>Series Destacada</h2>
      <div className="row">
        {featured.map(({ id, image, title, shortDescription }) => (
          <div key={id} className="col-md-4 col-12 mb-4"> 
            <div className="card">
              <img
                src={image}
                alt={`Poster de ${title}`}
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{shortDescription}</p>
                <button className="btn btn-primary">Ver más</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
