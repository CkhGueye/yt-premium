import axios from "axios";

const BASE_URL = "https://www.googleapis.com/youtube/v3";

const options = {
  params: {
    maxResults: "48",
    key: process.env.REACT_APP_API_KEY,
  },
};

export const customFetch = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};

// const params = new URLSearchParams(options.params);
// export const customFetch = async (url) => {
//   const data = await fetch(`${BASE_URL}/${url}&${params}`);
//   return data.json();
// };
