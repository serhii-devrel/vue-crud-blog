// Core
import { VuexModule, Module, Action, Mutation } from "vuex-class-modules";

// Store
import store from "@/store";

@Module
class ArticlesModule extends VuexModule {
  articles = [];

  get articles() {
    return this.articles;
  }

  @Mutation
  setArticles(articles) {
    this.articles = articles;
  }

  @Action
  async loadArticles() {
    const articles = await [{ test: "test" }];
    this.setArticles(articles);
  }
}
export const articlesModule = new ArticlesModule({ store, name: "articles" });
