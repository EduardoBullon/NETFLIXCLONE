import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function LoadingSkeleton({ count = 6 }) {
  return (
    <div className="grid-cards" style={{
      display:"grid",
      gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",
      gap:"1rem"
    }}>
      {[...Array(count)].map((_, i) => (
        <div key={i} className="card-skeleton" style={{borderRadius:"8px"}}>
          <Skeleton height={300} borderRadius={8} />
          <Skeleton width={"80%"} />
          <Skeleton count={2} />
          <Skeleton width={100} height={30} />
        </div>
      ))}
    </div>
  );
}
