<template>
  <div class="articles">
    <v-container>
      <v-row>
        <v-col>
          <Dialog
            mainButtonText="Add Article"
            submitButtonText="Add Article"
            @onSubmit="onAdd"
          >
            <v-text-field v-model="title" label="Title" required></v-text-field>
            <v-text-field
              v-model="description"
              label="Description"
              required
            ></v-text-field>
          </Dialog>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          :key="article.id"
          lg="4"
          xs="12"
          sm="6"
          v-for="article in articles"
        >
          <Card
            :id="article.id"
            :onDelete="onDelete"
            :title="article.title"
            :description="article.description"
          />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
// Core
import { Vue, Component } from "vue-property-decorator";

// Components
import Card from "@/components/Card";
import Dialog from "@/components/Dialog";

// Modules
import { articlesModule } from "@/bus/articles";

@Component({
  components: { Card, Dialog },
})
export default class Articles extends Vue {
  title = "";
  description = "";

  get articles() {
    return articlesModule.articles;
  }

  onAdd(onCloseDialog) {
    if (!this.title || !this.description) return;
    articlesModule.addArticle({
      title: this.title,
      description: this.description,
    });
    onCloseDialog();
    this.title = "";
    this.description = "";
  }

  onDelete(id) {
    articlesModule.deleteArticle(id);
  }

  created() {
    articlesModule.loadArticles();
  }
}
</script>
