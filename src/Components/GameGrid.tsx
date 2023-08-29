
import {SimpleGrid, Text} from "@chakra-ui/react";
import useGames from "./hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
// interface Game {
//   id: number;
//   name: string;
// }
// interface fetchedGamesApi {
//   count: number;
//   results: Game[];
// }

const GameGrid = () => {
    const {games,error,isLoading} = useGames();
    const skeletons = [1,2,3,4,5,6];
//   const [games, setGames] = useState<Game[]>([]);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     apiClients
//       .get<fetchedGamesApi>("/games")
//       .then((res) => setGames(res.data.results))
//       .catch((err) => setError(err.message));
//   });
  return (
    <>
      {error && <Text>{error}</Text>}
      {/* <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul> */}
      <SimpleGrid columns={{sm:1, md:2, lg:3, xl:5 }} padding='10px' spacing={4}>
        {isLoading && skeletons.map(skeleton=> <GameCardSkeleton />)}
        {games.map(game=> <GameCard game={game}/>)}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
