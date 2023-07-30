import axios from "axios";

export const fget = async ({ url }) => {
  let headers = { Authorization: `Bearer ${process.env.REACT_APP_BASE_TOKEN}` };
  const res = await axios.get(process.env.REACT_APP_BASE_URL + `${url}`, {
    headers,
  });
  return res;
};

export const fpatch = async ({ url, data }) => {
  let headers = { Authorization: `Bearer ${process.env.REACT_APP_BASE_TOKEN}` };
  const res = await axios.patch(
    process.env.REACT_APP_BASE_URL + `${url}`,
    data,
    {
      headers,
    }
  );
  return res;
};

export const fpost = async ({ url, data }) => {
  let headers = { Authorization: `Bearer ${process.env.REACT_APP_BASE_TOKEN}` };
  const res = await axios.post(
    process.env.REACT_APP_BASE_URL + `${url}`,
    data,
    {
      headers,
    }
  );
  return res;
};

export const fdelete = async ({ url }) => {
  const res = await axios.delete(process.env.REACT_APP_BASE_URL + `${url}`, {
    headers: {
      Authorization: `Bearer ${process.env.REACT_APP_BASE_TOKEN}`,
    },
  });
  return res;
};