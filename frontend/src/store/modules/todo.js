const state = () => ({
  // each todo must be an object
  todoList: [
    // dummy data list
    {
      id: 1,
      content: '언티앤즈 시나몬 스틱 사먹기',
      isDone: false,
    },
    {
      id: 2,
      content: '시원한 아이스커피와 함께 코딩하기',
      isDone: false,
    },
    {
      id: 3,
      content: '릴렉스하기',
      isDone: true,
    },
  ],
})

const getters = {
  // READ
  todoList: state => {
      return state.todoList
  },
  // READ(:id)
}

const mutations = {
  // CREATE
  addTodoItem(state, newTodo) {
    state.todoList.push(newTodo)
  },
  // UPDATE
  updateCompletionOfTodoItem(state, todoId) {
    state.todoList.map(todo => {
      if (todo.id == todoId) {
        todo.isDone = !todo.isDone
      }
    })
  },
  // DELETE
  deleteTodoItem(state, todoId) {
    state.todoList = state.todoList.filter(todo => {
      return todo.id !== todoId
    })
  },
}

const actions = {

}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}