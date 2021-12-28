<template>
  <v-card :hover="true" class="mx-auto">
    <v-img
      src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
      height="200px"
    ></v-img>

    <v-card-title>{{ title }}</v-card-title>

    <v-card-subtitle>{{ description }} </v-card-subtitle>
  </v-card>
</template>

<script>
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class Card extends Vue {
  @Prop({ type: String, default: "Test" }) title;
  @Prop({ type: String, default: "" }) src;
  @Prop({ type: String, default: "test" }) description;
}
</script>
