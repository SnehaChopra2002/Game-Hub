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

import { GameQuery } from "../../App";
import useData from "./useData";
import { Genre } from "./useGenres";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top:number;
}

const useGames = (gameQuery:GameQuery) =>
  useData<Game>(
    "/games",
    { params: { 
      genres: gameQuery.genre?.id,
      platforms: gameQuery.platform?.id,
      ordering:gameQuery.sortOrder,
      search:gameQuery.searchText
    } },
    [gameQuery]
  );

export default useGames;
