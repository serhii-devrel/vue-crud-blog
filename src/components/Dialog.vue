<template>
  <div data-app class="text-center">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="red lighten-2" dark v-bind="attrs" v-on="on">
          {{ mainButtonText }}
        </v-btn>
      </template>

      <v-card>
        <v-container>
          <v-row>
            <v-col xs="12">
              <slot></slot>
            </v-col>
          </v-row>
        </v-container>
        <slot name="buttons"></slot>
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

  dialog = false;

  close() {
    this.dialog = false;
  }
}
</script>
