import { fetchFromApi } from "./MarvelAPIService";

export const getCharacters = (offset = 0) => {
  return fetchFromApi({
    method: "GET",
    path: "/characters",
    params: {
      orderBy: "name",
      offset: offset,
    },
  }).catch((err) => {
    throw new Error(err);
  });
};
