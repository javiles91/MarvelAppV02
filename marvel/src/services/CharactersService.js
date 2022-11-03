import { fetchFromApi } from "./MarvelAPIService";

export const getCharacters = ({ offset = 0, orderBy = "name" }) => {
  return fetchFromApi({
    method: "GET",
    path: "/characters",
    params: {
      orderBy: orderBy,
      offset: offset,
    },
  }).catch((err) => {
    throw new Error(err);
  });
};

export const getCharactersFromComic = (id) => {
  return fetchFromApi({
    method: "GET",
    path: `/comics/${id}/characters`,
    params: {
      orderBy: "modified",
    },
  }).catch((err) => {
    throw new Error(err);
  });
};
