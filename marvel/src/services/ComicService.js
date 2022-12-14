import { fetchFromApi } from "./MarvelAPIService";

export const getComicById = (id) => {
  return fetchFromApi({
    method: "GET",
    path: `/comics/${id}`,
  }).catch((err) => {
    throw new Error(err);
  });
};

export const getComicByTitle = ({ ComicTitle, startYear, issueNumber }) => {
  return fetchFromApi({
    method: "GET",
    path: `/comics`,
    params: {
      title: ComicTitle,
      startYear: startYear,
      issueNumber: issueNumber,
    },
  }).catch((err) => {
    throw new Error(err);
  });
};
