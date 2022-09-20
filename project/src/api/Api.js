import axios from "axios";

const client = axios.create({
  baseURL: "http://localhost:3001",
});

/**
 * 로그인 API
 *
 * @param params
 * @param {string} params.email
 * @param {string} params.password
 */
const login = async (params) => {
  const body = new URLSearchParams(params);
  return client.post(`/api/login`, body.toString(), {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
};

export default {
  login,
};
