import { TODOS_API_BASE_URL } from '../../constants.js'
import axios from 'axios'

const state = () => ({
  todoList: [],
})

const getters = {
  // READ
  todoList: state => {
    return state.todoList
  },
}

const mutations = {
  // POPULATE (for initial data)
  setTodoList(state, todos) {
    state.todoList = todos
  },
  // CREATE
  addTodoItem(state, newTodo) {
    state.todoList.push(newTodo)
  },
  // UPDATE
  updateCompletionOfTodoItem(state, todoId) {
    state.todoList.map(todo => {
      if (todo.id == todoId) {
        todo.is_done = !todo.is_done
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
  // READ REQUEST
  sendGetAllTodosRequest({ commit }) {
    axios.get(TODOS_API_BASE_URL)
    .then(res => {
        commit('setTodoList', res.data)
      })
  },
  // CREATE REQUEST
  sendCreateTodoRequest({ commit }, newTodo) {
    const payload = { 
      content: newTodo.content,
      is_done: newTodo.isDone
    }
    axios.post(TODOS_API_BASE_URL, payload)
      .then(res => {
        const todoCreated = {
          id: res.data.id,
          content: res.data.content,
          isDone: res.data.is_done,
          due_date: res.data.due_date,
        }
        commit('addTodoItem', todoCreated)
      })
      .catch(err => console.error(err))
  },
  // UPDATE REQUEST
  sendUpdateTodoRequest({ commit }, todo) {
    const TODOS_API_UPDATE_URL = TODOS_API_BASE_URL + `${todo.id}/`
    axios.put(TODOS_API_UPDATE_URL)
      .then(() => commit('updateCompletionOfTodoItem', todo.id))
      .catch(err => console.error(err))
  },
  // DELETE REQUEST
  sendDeleteTodoRequest({ commit }, todo) {
    const TODOS_API_UPDATE_URL = TODOS_API_BASE_URL + `${todo.id}/`
    axios.delete(TODOS_API_UPDATE_URL)
      .then(() => commit('deleteTodoItem', todo.id))
      .catch(err => console.error(err))
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}