import { fetchFromApi } from "./MarvelAPIService";

export const getComics = (offset = 0) => {
  return fetchFromApi({
    method: "GET",
    path: `/comics`,
    params: {
      orderBy: "modified",
      offset: offset,
    },
  }).catch((err) => {
    throw new Error(err);
  });
};
