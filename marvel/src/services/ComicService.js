import { fetchFromApi } from "./MarvelAPIService";

export const getComicById = (id) => {
  return fetchFromApi({
    method: "GET",
    path: `/comics/${id}`,
  }).catch((err) => {
    throw new Error(err);
  });
};
