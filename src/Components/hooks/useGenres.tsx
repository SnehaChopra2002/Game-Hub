import { useEffect, useState } from "react";
import apiClients from "../Services/api-clients";

interface Genre {
  id: number;
  name: string;
}

interface fetchedGenresApi {
  count: number;
  results: Genre[];
}

const useGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState();
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    apiClients
      .get<fetchedGenresApi>("/genres", { signal: controller.signal })
      .then((res) => {
        setGenres(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, []);
  return { genres, error, isLoading };
};

export default useGenres;
