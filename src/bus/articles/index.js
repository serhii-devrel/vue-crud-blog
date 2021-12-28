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
}
export const articlesModule = new ArticlesModule({ store, name: "articles" });
