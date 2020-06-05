<template>
  <div class="d-flex justify-content-between w-100 h-100 align-items-center">
    <input 
      @click="callUpdateCompletionOfTodoItem(todo.id)" 
      :checked="todo.isDone" 
      type="checkbox"
      class="eric-checkbox" 
    >
    <span 
      class="ml-3 todo-content" 
      :class="{ done: todo.isDone }"
    >
      {{ todo.content }}
    </span>
    <button 
      @click="callDeleteTodoItem(todo.id)"
      class="btn btn-danger text-white btn__delete"
    >
      삭제
    </button>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapMutations } = createNamespacedHelpers('todo')

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
    callUpdateCompletionOfTodoItem(todoId) {
      this.updateCompletionOfTodoItem(todoId)
    },
    callDeleteTodoItem(todoId) {
      this.deleteTodoItem(todoId)
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