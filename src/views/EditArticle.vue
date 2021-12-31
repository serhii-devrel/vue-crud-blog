<template>
  <div class="edit-article">
    <v-container>
      <h1>Edit Article</h1>
      <v-row>
        <v-col xs="12">
          <v-text-field v-model="title" label="Title" required></v-text-field>
          <v-text-field
            v-model="description"
            label="Description"
            required
          ></v-text-field>
          <v-btn color="green lighten-3" @click="onUpdate"
            >Update Article</v-btn
          >
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
// Core
import { Vue, Component } from "vue-property-decorator";

// Modules
import { articlesModule } from "@/bus/articles";

@Component()
export default class EditArticle extends Vue {
  id = "";
  title = "";
  description = "";

  get article() {
    const articleID = this.$router.history.current.params.id;
    const articles = articlesModule.articles;
    const specificArticle = articles.find(
      (article) => article.id === articleID
    );
    return specificArticle;
  }

  onUpdate() {
    if (!this.id || !this.title || !this.description) return;
    articlesModule.updateArticle({
      id: this.id,
      title: this.title,
      description: this.description,
    });
    this.$router.push("/");
  }

  created() {
    this.id = this.article.id;
    this.title = this.article.title;
    this.description = this.article.description;
  }
}
</script>
