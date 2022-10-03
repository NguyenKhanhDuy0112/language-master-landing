import { createStore } from "vuex";
import moduleAuth from "./modules/auth";
import moduleTodo from "./modules/todo";

export default createStore({
  modules: {
    auth: moduleAuth,
    todo: moduleTodo
  },
});
