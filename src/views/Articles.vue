<template>
  <div class="articles">
    <v-container>
      <v-row>
        <v-col
          :key="article.id"
          lg="4"
          xs="12"
          sm="6"
          v-for="article in articles"
        >
          <Card :title="article.title" :description="article.description" />
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

// Modules
import { articlesModule } from "@/bus/articles";

@Component({
  components: { Card },
})
export default class Articles extends Vue {
  get articles() {
    return articlesModule.articles;
  }

  created() {
    articlesModule.loadArticles();
  }
}
</script>
