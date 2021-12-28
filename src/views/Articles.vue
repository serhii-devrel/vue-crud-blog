<template>
  <div class="articles">
    <v-container>
      <v-row>
        <v-col lg="4" xs="12" sm="6">
          <Card />
        </v-col>
        <v-col lg="4" xs="12" sm="6">
          <Card />
        </v-col>
        <v-col lg="4" xs="12" sm="6">
          <Card />
        </v-col>
        <v-col lg="4" xs="12" sm="6">
          <Card />
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
  created() {
    articlesModule.loadArticles();
  }
}
</script>
