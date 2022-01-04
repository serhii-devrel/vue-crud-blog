<template>
  <div class="articles">
    <v-container>
      <v-row>
        <v-col>
          <Dialog ref="dialog" mainButtonText="Add Article">
            <v-text-field v-model="title" label="Title" required></v-text-field>
            <v-text-field
              v-model="description"
              label="Description"
              required
            ></v-text-field>
            <template #buttons>
              <v-card-actions class="buttons">
                <v-btn text @click="onClose" color="black"> Cancel </v-btn>
                <v-btn text @click.stop="onAdd" color="green">
                  Add Article
                </v-btn>
              </v-card-actions>
            </template>
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
            :title="article.title"
            :description="article.description"
          >
            <div class="buttons">
              <v-btn color="red lighten-3" @click="onDelete(article.id)">
                Delete
              </v-btn>
              <v-btn
                color="purple lighten-3"
                :to="{
                  name: 'Edit Article',
                  params: { id: article.id },
                }"
              >
                Edit
              </v-btn>
            </div>
          </Card>
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

  onAdd() {
    if (!this.title || !this.description) return;
    articlesModule.addArticle({
      title: this.title,
      description: this.description,
    });
    this.$refs.dialog.close();
    this.description = "";
  }

  onClose() {
    this.$refs.dialog.close();
  }

  onDelete(id) {
    articlesModule.deleteArticle(id);
  }

  created() {
    articlesModule.loadArticles();
  }
}
</script>

<style scoped>
.buttons {
  width: 100%;
  display: flex;
  justify-content: space-around;
}
</style>
