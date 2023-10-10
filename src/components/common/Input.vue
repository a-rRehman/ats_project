<template>
  <v-text-field outlined>
    <template v-slot:label>{{ label }} </template>
  </v-text-field>
</template>
<script>
export default {
  props: {
    label: String,
  },
};
</script>
