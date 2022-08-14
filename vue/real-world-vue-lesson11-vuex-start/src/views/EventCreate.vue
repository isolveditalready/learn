<template>
  <div>
    <h1>Create an Event, {{ user.name }}</h1>
    <p>This event was created by {{ user.id }}</p>
    <p>There are {{ catLength }} categories</p>
    <ul>
      <li v-for="cat in categories" :key="cat">{{ cat }}</li>
    </ul>
    <h2>Todos</h2>
    <p>Active To dos count: {{ activeTodosCount }}</p>
    <ul>
      <li v-for="todo in todos" :key="todo">{{ todo.id }} {{ todo.done}}</li>
    </ul>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    /*computed: mapState({
      userName: state => state.user.name,
      userID: state => state.user.id,
      categoeis: state => state.categories
    }) */
    /*
    computed: mapState({
      user: 'user',
      categories: 'categories'

    })
    */
   computed: {
    catLength() {
      return this.$store.getters.catLength
    },
    activeTodosCount() {
      return this.$store.getters.activeTodosCount
    },
    ...mapState(['user', 'categories','todos'])
   }
  }
</script>