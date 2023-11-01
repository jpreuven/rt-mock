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

  if (!pageData) {
    return <h1>Data not yet returned</h1>;
  }
  return <h1>Data for {id} returned</h1>;
}
