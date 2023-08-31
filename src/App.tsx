import { Show } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";
import Navbar from "./Components/Navbar";
import GameGrid from "./Components/GameGrid";
import GenreList from "./Components/GenreList";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"navbar" "body"`,
        lg: `"navbar navbar" "filter body"`,
      }}
    >
      <GridItem area="navbar">
        <Navbar />
      </GridItem>

      <Show above="lg">
        <GridItem area="filter">
          <GenreList />
        </GridItem>
      </Show>

      <GridItem area="body">
        <GameGrid />
      </GridItem>
    </Grid>
  );

  // return(
  // <Navbar />

  // )
}

export default App;
