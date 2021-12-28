// Config
import { RESTClient } from "./config";

export const API = {
  articles: {
    getArticles() {
      return RESTClient.get("", {
        headers: {
          "Content-Type": "application/json",
        },
      });
    },
  },
};
