import { useEffect, useState } from "react";
import apiClients from "../Services/api-clients";
import useData from "./useData";

export interface Genre {
  id: number;
  name: string;
  image_background:string;
}

// interface fetchedGenresApi {
//   count: number;
//   results: Genre[];
// }

const useGenres = () => useData<Genre>("/genres");

export default useGenres;
