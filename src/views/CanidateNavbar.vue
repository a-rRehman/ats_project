<template>
  <VNavigationDrawer class="sidebar" theme="dark">
    <VList density="compact" nav>
      <VListItem
        prepend-icon="mdi-account-group"
        value="Manage Profile"
        title="Manage Profile"
        @click="manageProfile"
      />
      <VListItem
        prepend-icon="mdi-account-group"
        value="My Orders"
        title="My Orders"
        @click="myOrders"
      />
      <VListItem
        prepend-icon="mdi-account-group"
        value="Track Order"
        title="Track Order"
        @click="trackOrder"
      />
    </VList>
  </VNavigationDrawer>
</template>

<script>
export default {
  methods: {
    manageProfile() {
      // this.$router.push("/userdashboard/userprofile");
      alert("Clicked");
    },
    trackOrder() {
      // this.$router.push("/userdashboard/trackorder");
      alert("Clicked");
    },
    myOrders() {
      // this.$router.push("/userdashboard/myorders");
      alert("Clicked");
    },
  },
};
</script>

<style scoped>
.sidebar {
  background-color: #fb7e58;
}
</style>
