import { useRouter } from "next/router";

export default function Detail() {
  const router = useRouter();
  const {
    query: { title, image },
  } = router;
  return (
    <div className="container">
      <div className="movie">
        <img src={`https://image.tmdb.org/t/p/w500/${image}`} />
        <h4>{title}</h4>
      </div>
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </div>
  );
}
