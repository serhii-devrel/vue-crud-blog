<template>
  <div data-app class="text-center">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="red lighten-2" dark v-bind="attrs" v-on="on">
          {{ mainButtonText }}
        </v-btn>
      </template>

      <v-card>
        <slot></slot>

        <v-card-actions>
          <v-btn text @click="onClose">
            {{ cancelButtonText }}
          </v-btn>
          <v-btn text>
            {{ submitButtonText }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
// Core
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class Dialog extends Vue {
  @Prop({ type: String, default: "Add" }) mainButtonText;
  @Prop({ type: String, default: "Cancel" }) cancelButtonText;
  @Prop({ type: String, default: "Submit" }) submitButtonText;

  dialog = false;

  onClose() {
    this.dialog = false;
  }
}
</script>
