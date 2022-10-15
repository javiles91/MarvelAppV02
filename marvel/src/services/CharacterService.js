import { fetchFromApi } from "./MarvelAPIService";

export const getCharacterById = (id) => {
  return fetchFromApi({
    method: "GET",
    path: `/characters/${id}`,
  }).catch((err) => {
    throw new Error(err);
  });
};
