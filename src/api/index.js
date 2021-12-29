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
    deleteArticle(id) {
      return RESTClient.delete(`/articles/${id}`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
    },
    addArticle(article) {
      return RESTClient.post("/articles", article, {
        headers: {
          "Content-Type": "application/json",
        },
      });
    },
  },
};
