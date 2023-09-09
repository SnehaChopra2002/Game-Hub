import { Show } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";
import Navbar from "./Components/Navbar";
import GameGrid from "./Components/GameGrid";
import GenreList from "./Components/GenreList";
import PlatformSelector from "./Components/PlatformSelector";
import { Genre } from "./Components/hooks/useGenres";
import { Platform } from "./Components/hooks/useGames";
import { useState } from "react";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
}
function App() {
  const [gameQuery,setGameQuery]=useState<GameQuery>({} as GameQuery)
  // Refactoring code
  // const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  // const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
  //   null
  // );

  return (
    <Grid
      templateAreas={{
        base: `"navbar" "body"`,
        lg: `"navbar navbar" "filter body"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "0.2fr 1fr",
      }}
    >
      <GridItem area="navbar">
        <Navbar />
      </GridItem>

      <Show above="lg">
        <GridItem area="filter" paddingX={5}>
          <GenreList
            onSelectGenre={(genre) => setGameQuery({...gameQuery,genre})}
            selectedGenre={gameQuery.genre}
          />
        </GridItem>
      </Show>

      <GridItem area="body">
        <PlatformSelector
          onSelectPlatform={(platform) => setGameQuery({...gameQuery,platform})}
          selectedPlatform={gameQuery.platform}
        />
        <GameGrid
          gameQuery={gameQuery}
          // selectedGenre={gameQuery.genre}
          // selectedPlatform={gameQuery.platform}
        />
      </GridItem>
    </Grid>
  );

  // return(
  // <Navbar />

  // )
}

export default App;
