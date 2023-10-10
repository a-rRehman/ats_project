<template>
  <VNavigationDrawer class="sidebar" theme="dark">
    <VList density="compact" nav>
      <VListItem
        prepend-icon="mdi-account-group"
        value="Manage Profile"
        title="All Users"
        @click="manageProfile"
      />
      <VListItem
        prepend-icon="mdi-account-group"
        value="My Orders"
        title="All Orders"
        @click="myOrders"
      />
      <VListItem
        prepend-icon="mdi-account-group"
        value="Add Book"
        title="Add Book"
        @click="addBook"
      />

      <VListItem
        prepend-icon="mdi-account-group"
        value="All Books "
        title="All Books"
        @click="allBook"
      />
    </VList>
  </VNavigationDrawer>
</template>

<script>
export default {
  methods: {
    manageProfile() {
      // this.$router.push("/admindashboard/allusers");
      alert("Clicked");
    },
    addBook() {
      // this.$router.push("/admindashboard/addBook");
      alert("Clicked");
    },
    myOrders() {
      // this.$router.push("/admindashboard/allorders");
      alert("Clicked");
    },
    allBook() {
      // this.$router.push("/admindashboard/alladminbooks");
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
