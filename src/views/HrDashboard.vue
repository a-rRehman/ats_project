<template>
  <v-app>
    <HrNavbar />
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import HrNavbar from "./HrNavbar.vue";
export default {
  name: "App",

  components: {
    HrNavbar,
  },
};
</script>
