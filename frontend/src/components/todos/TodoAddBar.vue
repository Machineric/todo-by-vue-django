<template>
  <div class="todo__addBar">
      <div class="todo__addBarSection w-100">
        <input class="w-100" @keypress.enter="addTodo" v-model="userInput" type="text" placeholder="할 일 추가하기">
      </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapMutations, mapActions } = createNamespacedHelpers('todo')

export default {
  name: 'TodoAddBar',
  data() {
    return {
      userInput: '',
    }
  },
  methods: {
    ...mapMutations([
      'addTodoItem'
    ]),
    ...mapActions([
      'sendCreateTodoRequest'
    ]),
    addTodo() {
        if (this.userInput.trim()) {
          const newTodo = {
            content: this.userInput,
            isDone: false,
        }
          this.sendCreateTodoRequest(newTodo)
          this.userInput = ''
        }
    },
  },
}
</script>

<style scoped>
.todo__addBar {
    margin: 32px 0;
}

.todo__addBarSection {
    width: 100%;
}

.todo__addBarSection input {
    width: 100%;
    padding: 24px;
    font-size: 1rem;
    color: #222 !important;
}
</style>