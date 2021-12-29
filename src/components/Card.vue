<template>
  <v-card :hover="true" class="mx-auto">
    <v-card-title>{{ title }}</v-card-title>

    <v-card-subtitle>{{ description }} </v-card-subtitle>

    <v-divider class="mx=4"></v-divider>
    <v-card-actions>
      <slot></slot>
    </v-card-actions>
  </v-card>
</template>

<script>
// Core
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class Card extends Vue {
  @Prop({ type: String }) id;
  @Prop({ type: String }) title;
  @Prop({ type: String }) description;
  @Prop({ type: Function, default: () => {} }) onDelete;
}
</script>
