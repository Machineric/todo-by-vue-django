<template>
  <div class="d-flex justify-content-between w-100 h-100 align-items-center">
    <input 
      @click="callUpdateCompletionOfTodoItem(todo)" 
      :checked="todo.is_done" 
      type="checkbox"
      class="eric-checkbox" 
    >
    <span 
      class="ml-3 todo-content" 
      :class="{ done: todo.is_done }"
    >
      {{ todo.content }}
    </span>
    <button 
      @click="callDeleteTodoItem(todo)"
      class="btn btn-danger text-white btn__delete"
    >
      삭제
    </button>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapMutations, mapActions } = createNamespacedHelpers('todo')

export default {
  name: 'TodoListItem',
  props: {
    todo: {
      type: Object,
    },
  },
  methods: {
    ...mapMutations([
      'updateCompletionOfTodoItem',
      'deleteTodoItem',
    ]),
    ...mapActions([
      'sendUpdateTodoRequest',
      'sendDeleteTodoRequest',
    ]),
    callUpdateCompletionOfTodoItem(todo) {
      this.sendUpdateTodoRequest(todo)

    },
    callDeleteTodoItem(todo) {
      this.sendDeleteTodoRequest(todo)
    },
  },
}
</script>

<style scoped>
.eric-checkbox {
  transform: scale(1.5);
}

.todo-content {
  font-size: 1rem;
}

.done {
  text-decoration: line-through;
}

.btn__delete {
  height: 100% !important;
  margin-left: auto;
  border-radius: 2px;
  border: 0.0025em solid rgb(195, 195, 195);
}
</style>