<template>
  <v-layout wrap>
    <v-flex v-for="item in todos" :key="item.id" class="todos-cards">
      <v-card color="cyan darken-2" class="white--text">
        <v-layout>
          <v-flex xs7>
            <v-card-title primary-title>
              <div>
                <div class="headline">{{ item.title }}</div>
                <div>Created by: {{ item.created_by }}</div>
                <div>(2019)</div>
              </div>
            </v-card-title>
          </v-flex>
          <v-flex xs5>
            <v-img
              src="https://www.richardsonsholidayparks.co.uk/wp-content/uploads/2018/04/ThigsToDoHeaderTitle.png"
              height="125px"
              contain
            ></v-img>
          </v-flex>
        </v-layout>
        <v-divider light></v-divider>
        <v-card-actions class="pa-3">
          <v-spacer></v-spacer>
          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <v-btn flat icon @click="editTodo(item.id)">
                <v-icon dark v-on="on">edit</v-icon>
              </v-btn>
            </template>
            <span>Edit</span>
          </v-tooltip>

          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <v-btn flat icon @click="selected = item; dialog = true">
                <v-icon dark v-on="on">delete</v-icon>
              </v-btn>
            </template>
            <span>Delete</span>
          </v-tooltip>
        </v-card-actions>
      </v-card>
    </v-flex>

    <v-dialog v-model="dialog" max-width="290">
      <v-card>
        <v-card-title class="headline">
          <v-spacer></v-spacer>
          <p>Delete to do?</p>
          <v-spacer></v-spacer>
        </v-card-title>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn color="green darken-1" flat="flat" @click="dialog = false">Disagree</v-btn>

          <v-btn
            color="green darken-1"
            flat="flat"
            @click="deleteTodo(selected.id); dialog = false"
          >Agree</v-btn>

          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      todos: [],
      dialog: false,
      selected: null
    };
  },
  mounted() {
    this.getAllTodos();
  },
  methods: {
    getAllTodos() {
      this.axios
        .get(`${process.env.VUE_APP_API_BASE_URL}todos`)
        .then(res => (this.todos = res.data));
    },
    editTodo(id) {
      this.$router.push({ path: "/edit-todo/" + id });
    },
    deleteTodo(id) {
      this.axios
        .delete(`${process.env.VUE_APP_API_BASE_URL}todos/${id}`)
        .finally(res => this.getAllTodos());
    }
  }
};
</script>

<style>
.container {
  display: flex;
  justify-content: space-between;
}

.todos-cards {
  width: 48%;
  margin: 0 1rem 1rem 0;
}

.todos-cards .v-icon {
  color: white;
}
</style>
