const baseURL = process.env.REACT_APP_BASE_URL;
const apikey = process.env.REACT_APP_MY_PUBLIC_KEY;
const ts = 5; //This is required by the marvel api, could be any number
// hash = ts + privateKey + apikey // this is per api documentation and has to be converted to md5
const md5Hash = "4024834b1894c7fcaf254c068d568148";

export const fetchFromApi = ({ method, path, params = {} }) => {
  params = new URLSearchParams({ ...params, ts, apikey, hash: md5Hash });
  return fetch(`${baseURL}${path}?${params.toString()}`, {
    method,
  })
    .then((res) => res.json())
    .then(({ data }) => data);
};
