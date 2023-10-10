<template>
  <v-container fluid class="mt-5">
    <v-row justify="center" no-gutters>
      <!-- Left Column for Image -->
      <v-col cols="12" md="6">
        <v-img src="src\assets\jobIMG.png" contain></v-img>
      </v-col>

      <!-- Right Column for Input Fields -->
      <v-col cols="12" md="6">
        <v-card elevation="2">
          <v-card-title>
            <h2 class="text-center ma-4">Sign Up</h2>
          </v-card-title>
          <v-card-text>
            <v-form>
              <v-row>
                <v-col cols="12" v-for="item in InputLabels" :key="item.id">
                  <Input :label="item.label" />
                </v-col>
              </v-row>
                <v-btn class="text-center" prepend-icon="mdi-account-plus" variant="tonal"> Register </v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Input from "@/components/common/Input.vue";
import { inputLabel } from "@/components/constants/constantInput.js";

export default {
  name: "signup",
  components: {
    Input,
  },
  data() {
    return {
      InputLabels: inputLabel.labels,
    };
  },
};
</script>
