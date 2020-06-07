<template>
  <div>
    <input 
      @input="search"
      v-model="userInput"
      class="eric-searchBar" 
      type="text" 
      placeholder="어떤 일이 있었지?"
    >
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapGetters, mapMutations } = createNamespacedHelpers('todo')

export default {
  name: 'TodoSearchBar',
  data() {
      return {
          userInput: '',
          searchResult: [],
      }
  },
  methods: {
    ...mapMutations([
      'searchTodoList',
    ]),
    search(e) {
        this.searchTodoList(e.target.value)
    },
  },
  computed: {
      ...mapGetters([
        'todoList',
      ]),
  },
  watch: {
      userInput(newVal) {
          if (newVal === '') {
              this.searchResult = []
          } 
      },
    },
}
</script>

<style scoped>
.search-result {
    width: 100%;
    border: 1px solid black;
}
</style>