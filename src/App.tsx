import { Show } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"navbar" "body"`,
        lg: `"navbar navbar" "filter body"`,
      }}
    >
      <GridItem area="navbar" bg={"orange.700"}>
        Navbar
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
