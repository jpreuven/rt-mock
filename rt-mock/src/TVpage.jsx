import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function TVpage() {
  const [pageData, setPageData] = useState({});
  const { id } = useParams();

  https: useEffect(() => {
    fetch(`https://api.themoviedb.org/3/tv/${id}`, {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYWY0MWIwZTI5NjBmZDY4NzFiMmRiOWIzYWY3ODc2NyIsInN1YiI6IjY1MzE5NDY2NDgxMzgyMDBhYzM5YzY3YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.U4IHwa5Qpd4p6CYFHYH_H1MiLH8khUr0lBgmTGST810",
      },
    })
      .then((r) => r.json())
      .then((data) => setPageData(data));
  }, []);
  console.log(pageData);

  if (!pageData) {
    return <h1>Data not yet returned</h1>;
  }
  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <img src={`https://image.tmdb.org/t/p/w500${pageData.poster_path}`} />
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          background: "rgba(0, 0, 0, 0.6)", // This gives the transparent black background
          color: "white",
          padding: "10px",
        }}
      >
        <p>hello?</p>
      </div>
    </div>
  );
}
