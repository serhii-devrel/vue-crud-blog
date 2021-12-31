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

        <v-card-actions class="buttons">
          <v-btn text @click="onClose" color="black">
            {{ cancelButtonText }}
          </v-btn>
          <v-btn text @click.stop="onSubmit" color="green">
            {{ submitButtonText }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
// Core
import { Vue, Component, Prop, Emit } from "vue-property-decorator";

@Component
export default class Dialog extends Vue {
  @Prop({ type: String, default: "Add" }) mainButtonText;
  @Prop({ type: String, default: "Cancel" }) cancelButtonText;
  @Prop({ type: String, default: "Submit" }) submitButtonText;
  @Prop({ type: Function, default: () => {} }) submitHandler;

  dialog = false;

  onClose() {
    this.dialog = false;
  }

  @Emit("onSubmit")
  onSubmit() {
    return this.onClose;
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
