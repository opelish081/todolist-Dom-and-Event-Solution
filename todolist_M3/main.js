import { todoManagement } from "./lib/todoManagement.js";
import { todoUserInterface } from "./UI/todoList.js";

let {
    addTodo,
    removeTodo,
    findTodo,
    getTodos,
    getNumberOfDone,
    getNumberOfNotDone
  } = todoManagement()

let { showTodoItem, showNumberOfDone, showNumberOfNotDone } = todoUserInterface()

showTodoItem(addTodo('Walking'), 'Walking')
showTodoItem(addTodo('Walking'), 'Walking')
showTodoItem(addTodo('Walking'), 'Walking')