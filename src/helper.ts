import axios from "axios";

const secret = process.env.REACT_APP_API_SECRET;
const url = process.env.REACT_APP_URL;

export const getMatterportAuth = async () => {
  const response = await axios.get(url as string, {
    headers: {
      "x-api-key": secret,
    }
  });

  return response.data.auth_token;
};