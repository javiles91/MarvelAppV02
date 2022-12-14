import { fetchFromApi } from "./MarvelAPIService";

export const getComics = ({
  offset = 0,
  format = "",
  title = "",
  issueNumber = "",
  orderBy = "issueNumber",
}) => {
  const possibleParams = { offset, format, title, issueNumber, orderBy };

  const params = {};

  for (const property in possibleParams) {
    if (possibleParams[property] !== "")
      params[property] = possibleParams[property];
  }

  return fetchFromApi({
    method: "GET",
    path: `/comics`,
    params: params,
  }).catch((err) => {
    throw new Error(err);
  });
};
