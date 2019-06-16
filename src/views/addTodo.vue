<template>
  <v-form v-model="valid">
    <v-container>
      <v-layout column>
        <h1 align="center">Add new</h1>

        <v-layout row wrap justify-center>
          <v-flex xs12 sm6 md3>
            <v-text-field
              label="Title"
              placeholder="Title"
              v-model="todoForm.title"
              :rules="[rules.required]"
              solo
            ></v-text-field>

            <v-text-field
              label="Created by"
              placeholder="Created by"
              v-model="todoForm.created_by"
              :rules="[rules.required]"
              solo
            ></v-text-field>

            <v-btn color="success" :disabled="!valid" @click="addTodo()">Create</v-btn>
          </v-flex>
        </v-layout>
      </v-layout>
    </v-container>
  </v-form>
</template>

<script>
import rules from "../mixins/rules";

export default {
  data() {
    return {
      todoForm: {
        title: "",
        created_by: ""
      },
      valid: false
    };
  },
  methods: {
    addTodo() {
      this.axios
        .post(`${process.env.VUE_APP_API_BASE_URL}todos`, this.todoForm)
        .finally(res => this.$router.push("/"));
    }
  },
  mixins: [rules]
};
</script>
