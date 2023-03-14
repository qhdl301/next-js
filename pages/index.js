import { FC, useEffect, useState } from "react";
import Seo from "./components/Seo";
import { useRouter } from "next/router";

const Home = ({ results }) => {
  const router = useRouter();

  const onClickMovie = (id, image, title) => {
    router.push(
      {
        pathname: `movies/${id}`,
        query: {
          image,
          title,
        },
      },
      `movies/${id}`
    );
  };
  return (
    <div className="container">
      <Seo title="Home" />
      {results?.map((movie) => (
        <div
          onClick={() =>
            onClickMovie(movie.id, movie.poster_path, movie.original_title)
          }
          className="movie"
          key={movie.id}
        >
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
          <h4>{movie.original_title}</h4>
        </div>
      ))}
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
};

export default Home;

// 서버 사이드 렌더링 시 absolute path도 넣어야 한다.
export async function getServerSideProps() {
  const { results } = await (
    await fetch("http://localhost:3004/api/movies")
  ).json();
  return {
    props: {
      results,
    },
  };
}
