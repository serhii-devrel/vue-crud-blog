// Core
import { VuexModule, Module, Action } from "vuex-class-modules";

// Store
import store from "@/store";

@Module({ generateMutationSetters: true })
class ArticlesModule extends VuexModule {
  articles = [];

  @Action
  async loadArticles() {
    const articles = await [{ test: "test" }];
    this.articles = articles;
  }
}
export const articlesModule = new ArticlesModule({ store, name: "articles" });
