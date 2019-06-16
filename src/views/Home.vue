<template>
  <v-container>
    <v-btn fab dark color="cyan darken-2" @click="$router.push('/add-todo')">
      <v-icon dark>add</v-icon>
    </v-btn>
    <v-divider></v-divider>
    <TodosList/>
  </v-container>
</template>

<script>
import TodosList from "../components/TodosList";

export default {
  components: {
    TodosList
  }
};
</script>

<style>
.v-toolbar span {
  color: #0097a7;
}
</style>