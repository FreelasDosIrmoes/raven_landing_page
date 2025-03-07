import axios from "axios";

export const api = axios.create({
  baseURL: "https://ravenbacklp-production.up.railway.app",
  headers: {
    "Content-Type": "application/json",
  },
});
