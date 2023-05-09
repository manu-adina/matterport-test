import axios from "axios";

const secret = process.env.REACT_APP_API_SECRET;
const url = "https://api.dev.exactspain.com/token";

export const getMatterportAuth = async () => {
  const response = await axios.get(url, {
    headers: {
      "x-api-key": secret,
    }
  });

  return response.data.auth_token;
};