import { Box } from "@chakra-ui/react";
import SearchSlider from "./SearchSlider";
import Carousel from "./Carousel";

export default function Homepage({ popularTV, trendingTV, airingTodayTV }) {
  console.log(popularTV);

  //   popularTV.results
  return (
    <div style={{ marginTop: "64px" }}>
      <Box p={4} mb={6}>
        <SearchSlider />
      </Box>
      <Box mb={6} width="90%" marginLeft="auto" marginRight="auto">
        Popular:
        <Carousel data={popularTV?.results} />
      </Box>
      <Box mt={6} width="90%" marginLeft="auto" marginRight="auto">
        Trending Now:
        <Carousel data={trendingTV?.results} />
      </Box>
      <Box mt={6} width="90%" marginLeft="auto" marginRight="auto">
        Airing Today:
        <Carousel data={airingTodayTV?.results} />
      </Box>
    </div>
  );
}
