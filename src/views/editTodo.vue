<template>
  <v-form v-model="valid">
    <v-container>
      <v-layout column>
        <h1 align="center">Edit</h1>

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

            <v-flex>
              <v-btn color="success" :disabled="!valid" @click="editTodo()">Save</v-btn>
            </v-flex>
          </v-flex>
        </v-layout>
      </v-layout>
    </v-container>
  </v-form>
</template>

<script>
import rules from "../mixins/rules";

export default {
  props: {
    id: {
      type: String,
      required: true
    }
  },

  data() {
    return {
      todoForm: {
        title: "",
        created_by: ""
      },
      valid: false,
      rules: {
        notZero: v => v !== 0 || "Number can't be zero"
      }
    };
  },

  created() {
    this.axios
      .get(`${process.env.VUE_APP_API_BASE_URL}todos/${this.id}`)
      .then(res => (this.todoForm = res.data), rej => this.$router.push("/"));
  },
  methods: {
    editTodo() {
      this.axios
        .put(
          `${process.env.VUE_APP_API_BASE_URL}todos/${this.id}`,
          this.todoForm
        )
        .finally(res => this.$router.push("/"));
    }
  },

  mixins: [rules]
};
</script>
