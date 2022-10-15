import { fetchFromApi } from "./MarvelAPIService";

export const getStoryById = (id) => {
  return fetchFromApi({
    method: "GET",
    path: `/stories/${id}`,
  }).catch((err) => {
    throw new Error(err);
  });
};
