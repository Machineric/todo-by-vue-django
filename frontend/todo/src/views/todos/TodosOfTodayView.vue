<template>
  <div class="container">
      <TodoAddBar/>
      <h1>오늘 할 일</h1>
      <p>{{ todayTime }}</p>
      <TodoList/>
  </div>
</template>

<script>
import TodoAddBar from '@/components/todos/TodoAddBar.vue'
import TodoList from '@/components/todos/TodoList.vue'

export default {
  name: 'TodosOfTodayView',
  components: {
    TodoAddBar,
    TodoList,
  },
  data() {
    return {
      todayTime: new Date().toLocaleString(),
    }
  },
  created() {
    setInterval(() => {
      this.todayTime = new Date().toLocaleString()
    }, 1000)
  },
}
</script>

<style scoped>
.container {
  padding: 32px 0;
}
</style>