// Core
import axios from "axios";

export const baseURL = "";

// Client init
export const RESTClient = axios.create({
  baseURL,
});
