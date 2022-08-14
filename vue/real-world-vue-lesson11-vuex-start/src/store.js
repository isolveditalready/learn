import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        user: { id: 'abc123', name: 'joe nobody' },
        categories: ['sustainability', 'education', 'food', 'community'],
        todos: [
            { id: 1, text: '....1', done: true },
            { id: 2, text: '....2', done: true },
            { id: 3, text: '....3', done: false },
            { id: 4, text: '....4', done: true },
        ]
    },
    mutations: {},
    actions: {},
    getters: {
        catLength: state => {
            return state.categories.length
        },
        doneTodos: state => {
            return state.todos.filter(todo => todo.done)
        },
        //activeTodosCount: (state, getters) => {
        activeTodosCount: (state) => {
            //return state.todos.length - getters.doneTodos.length
            return state.todos.filter(todo => !todo.done).length
        },
        getEventById: state => id => {
            return state.events.find(event => event.id === id)
        }
    }
})