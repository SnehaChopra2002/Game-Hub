// import { useEffect, useState } from "react";
// import apiClients from "../Services/api-clients";
// import { CanceledError } from "axios";

// export interface Platform{
//   id:number;
//   name:string;
//   slug:string;
// }
// export interface Game {
//   id: number
//   name: string
//   background_image:string;
//   parent_platforms:{platform:Platform}[];
//   metacritic:number
// }

// interface fetchedGamesApi {
//   count: number;
//   results: Game[];
// }

// const useGames = () => {
//   const [games, setGames] = useState<Game[]>([]);
//   const [error, setError] = useState("");
//   const [isLoading,setLoading] = useState(false);

//   useEffect(() => {
//     const controller = new AbortController();

//     setLoading (true);
//     apiClients
//       .get<fetchedGamesApi>("/games", { signal: controller.signal })
//       .then((res) => {
//         setGames(res.data.results);
//         setLoading(false);
//       })
//       .catch((err) => {
//         if (err instanceof CanceledError) return;
//         setError(err.message);
//         setLoading(false);
//       });

//     return () => controller.abort();
//   }, []);

//   return { games, error,isLoading };
// };

// export default useGames;

import useData from "./useData";
import { Genre } from "./useGenres";

export interface Platform{
  id:number;
  name:string;
  slug:string;
}
export interface Game {
  id: number
  name: string
  background_image:string;
  parent_platforms:{platform:Platform}[];
  metacritic:number
}

const useGames = (selectedGenre:Genre|null) => useData<Game>("/games",{params:{genres:selectedGenre?.id}},[selectedGenre?.id])

export default useGames;
