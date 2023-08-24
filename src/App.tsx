import { Show } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";
import Navbar from "./Components/Navbar";

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
        <GridItem area="filter" bg={"pink.700"}>
          Filter
        </GridItem>
      </Show>

      <GridItem area="body" bg={"blue.700"}>
        Body
      </GridItem>
    </Grid>
  );

  // return(
  // <Navbar />

  // )
}

export default App;
