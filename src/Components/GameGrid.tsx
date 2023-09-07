
import {SimpleGrid, Text} from "@chakra-ui/react";
import useGames, { Platform } from "./hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "./hooks/useGenres";
// interface Game {
//   id: number;
//   name: string;
// }
// interface fetchedGamesApi {
//   count: number;
//   results: Game[];
// }
interface Props{
  selectedGenre:Genre| null;
  selectedPlatform:Platform|null;
}

const GameGrid = ({selectedGenre,selectedPlatform}:Props) => {
    const {data,error,isLoading} = useGames(selectedGenre,selectedPlatform);
    const skeletons = [1,2,3,4,5,6];
//   const [data, setGames] = useState<Game[]>([]);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     apiClients
//       .get<fetchedGamesApi>("/data")
//       .then((res) => setGames(res.data.results))
//       .catch((err) => setError(err.message));
//   });
  return (
    <>
      {error && <Text>{error}</Text>}
      {/* <ul>
        {data.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul> */}
      <SimpleGrid columns={{sm:1, md:2, lg:3, xl:5 }} padding='10px' spacing={4}>
        {isLoading && skeletons.map(skeleton=>(
          <GameCardContainer key={skeleton}>
            <GameCardSkeleton />
          </GameCardContainer>
        ))}
        {data.map(game=>(
          <GameCardContainer key={game.id}>
            <GameCard game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
