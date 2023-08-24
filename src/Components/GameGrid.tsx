
import {Text} from "@chakra-ui/react";
import useGames from "./hooks/useGames";
// interface Game {
//   id: number;
//   name: string;
// }
// interface fetchedGamesApi {
//   count: number;
//   results: Game[];
// }

const GameGrid = () => {
    const {games,error} = useGames();
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
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
