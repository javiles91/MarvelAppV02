import { fetchFromApi } from "./MarvelAPIService";

export const getCharacterById = (id) => {
  return fetchFromApi({
    method: "GET",
    path: `/characters/${id}`,
  }).catch((err) => {
    throw new Error(err);
  });
};

export const getCharacterByName = (name) => {
  return fetchFromApi({
    method: "GET",
    path: `/characters`,
    params: {
      name: name,
    },
  }).catch((err) => {
    throw new Error(err);
  });
};
