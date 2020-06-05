<template>
  <div>
    <div v-for="todo in todoList" :key="todo.id" class="todoBox w-100">
      <TodoListItem :todo="todo"/>
    </div>
  </div>
</template>

<script>
import TodoListItem from '@/components/todos/TodoListItem.vue'
import { createNamespacedHelpers } from 'vuex'
const { mapGetters } = createNamespacedHelpers('todo')

export default {
  name: 'TodoList',
  components: {
      TodoListItem,
  },
  computed: {
    ...mapGetters([
      'todoList',
    ]),
  },
}
</script>

<style>
.todoBox {
  width: 100%;
  height: 47px;
  padding: 0 12px;
  padding-right: 0;
  margin: 4px 0;
  display: flex;
  align-items: center;
  border: 0.0025em solid rgb(195, 195, 195);
  border-radius: 2px;
}
</style>