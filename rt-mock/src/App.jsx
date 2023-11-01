import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Navbar from "./Navbar";
import "./App.css";
import { Box, ChakraBaseProvider, ChakraProvider } from "@chakra-ui/react";
import Carousel from "./Carousel";
import SearchSlider from "./SearchSlider";
import Homepage from "./Homepage";
import Test from "./test";

import { BrowserRouter as Router, Route } from "react-router-dom";
import TVpage from "./TVpage";

function App() {
  const [popularTV, setPopularTV] = useState([]);
  const [trendingTV, setTrendingTV] = useState([]);
  const [airingTodayTV, setAiringTodayTV] = useState([]);

  useEffect(() => {
    fetch("https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1", {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYWY0MWIwZTI5NjBmZDY4NzFiMmRiOWIzYWY3ODc2NyIsInN1YiI6IjY1MzE5NDY2NDgxMzgyMDBhYzM5YzY3YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.U4IHwa5Qpd4p6CYFHYH_H1MiLH8khUr0lBgmTGST810",
      },
    })
      .then((r) => r.json())
      .then((data) => setPopularTV(data));
  }, []);

  useEffect(() => {
    fetch("https://api.themoviedb.org/3/trending/tv/day?language=en-US", {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYWY0MWIwZTI5NjBmZDY4NzFiMmRiOWIzYWY3ODc2NyIsInN1YiI6IjY1MzE5NDY2NDgxMzgyMDBhYzM5YzY3YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.U4IHwa5Qpd4p6CYFHYH_H1MiLH8khUr0lBgmTGST810",
      },
    })
      .then((r) => r.json())
      .then((data) => setTrendingTV(data));
  }, []);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1",
      {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYWY0MWIwZTI5NjBmZDY4NzFiMmRiOWIzYWY3ODc2NyIsInN1YiI6IjY1MzE5NDY2NDgxMzgyMDBhYzM5YzY3YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.U4IHwa5Qpd4p6CYFHYH_H1MiLH8khUr0lBgmTGST810",
        },
      }
    )
      .then((r) => r.json())
      .then((data) => setAiringTodayTV(data));
  }, []);

  return (
    <ChakraBaseProvider>
      {/* <Box> */}
      <Navbar />
      <Box
        id="background"
        // bg="black"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Box
          minHeight="100dvh"
          id="container"
          bg="white"
          width={{ base: "100%", xl: "75%", lg: "90%" }}
          transition="width .5s ease-in-out"
        >
          <Router>
            {/* <Navbar /> */}

            <Route path="/carousel">
              <Test />
            </Route>
            <Route path="/tv/:id">
              <TVpage />
            </Route>
            <Route exact path="/">
              <Homepage
                popularTV={popularTV}
                trendingTV={trendingTV}
                airingTodayTV={airingTodayTV}
              />
            </Route>
          </Router>
        </Box>
      </Box>
      {/* </Box> */}
    </ChakraBaseProvider>
  );
}

export default App;
