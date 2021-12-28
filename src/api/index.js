// Config
import { RESTClient } from "./config";

export const API = {
  articles: {
    getArticles() {
      return RESTClient.get("/articles", {
        headers: {
          "Content-Type": "application/json",
        },
      });
    },
  },
};
