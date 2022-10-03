
const moduleTodo = {
    state: {todos: []},
    getters: {},
    mutations: {
        addTodo(state:any, todo: string){
            state.todos.push(todo)
        },
        updateTodo(state: any, { name, index }:{name: string, index: number}){
            state.todos.splice(index, 1, name)
        },
        deleteTodo(state: any, index: number){
            state.todos.splice(index, 1)
        }
    },
    actions: {
        addTodo: ({commit}:any, todo:string) => {
            commit('addTodo', todo)
        },
        updateTodo: ({commit}:any, { name, index }:{name: string, index: number}) => {
            commit('updateTodo', {name, index})
        },
        deleteTodo: ({commit}:any, index: number) => {
            commit('deleteTodo', index)
        }
    },
}

export default moduleTodo