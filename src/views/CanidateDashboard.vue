<template>
  <v-app>
    <CanidateNavbar />
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import CanidateNavbar from "./CanidateNavbar.vue";
export default {
  name: "App",

  components: {
    CanidateNavbar,
  },
};
</script>
