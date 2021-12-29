// Core
import { VuexModule, Module, Action } from "vuex-class-modules";

// Store
import store from "@/store";

// API
import { API } from "@/api";

@Module({ generateMutationSetters: true })
class ArticlesModule extends VuexModule {
  articles = [];

  @Action
  async loadArticles() {
    const articles = await API.articles.getArticles();
    this.articles = articles.data;
  }

  @Action
  async deleteArticle(id) {
    await API.articles.deleteArticle(id);
    await this.loadArticles();
  }

  @Action
  async addArticle(article) {
    await API.articles.addArticle(article);
    await this.loadArticles();
  }

  @Action
  async updateArticle(article) {
    await API.articles.updateArticle(article);
    await this.loadArticles();
  }
}
export const articlesModule = new ArticlesModule({ store, name: "articles" });
