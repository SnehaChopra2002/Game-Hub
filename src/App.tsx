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

      templateColumns={{
        base:'1fr',
        lg:'0.2fr 1fr'
      }}
    >
      <GridItem area="navbar">
        <Navbar />
      </GridItem>

      <Show above="lg">
        <GridItem area="filter" paddingX={5}>
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
