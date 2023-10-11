<template>
  <v-container class="mt-5">
    <v-row justify="center" no-gutters>
      <!-- Left Column for Image -->
      <v-col cols="12" md="6">
        <v-img src="src\assets\jobIMG.png" contain style="height: 600px;"></v-img>
      </v-col>

      <!-- Right Column for Input Fields -->
      <v-col cols="12" md="6">
        <v-card elevation="2" class="mt-5">
          <v-card-title>
            <h2 class="text-center ma-4">Sign Up</h2>
          </v-card-title>
          <v-card-text>
            <h4>Role:</h4>
            <v-row>
              <v-col cols="6">
                <v-radio-group v-model="selectedOption">
                  <v-radio label="HR" value="hr"></v-radio>
                </v-radio-group>
              </v-col>
              <v-col cols="6">
                <v-radio-group v-model="selectedOption">
                  <v-radio label="Candidate" value="candidate"></v-radio>
                </v-radio-group>
              </v-col>
            </v-row>
            <v-form v-if="selectedOption">
              <v-row>
                <v-col cols="12" v-for="item in InputLabels" :key="item.id" style="border:2px solid red"
                >
                  <Input
                    :label="item.label"
                    v-if="
                      (item.id !== 4 || item.label !== 'Company Name' || selectedOption === 'hr') &&
                      (item.id !== 5 || selectedOption === 'candidate')
                    "
                  />
                </v-col>
              </v-row>
              <v-btn
                class="text-center"
                prepend-icon="mdi-account-plus"
                variant="tonal"
                >Register</v-btn
              >
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
      selectedOption: null,
    };
  },
};
</script>
