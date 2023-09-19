import '../style.scss'
import TodoList from './components/todoList/TodoList.js';

// Instancier une nouvelle todolist
// en lui envoyant l'élément DOM sur lequel se greffer
// et l'URL de l'API à utiliser: https://6347f663db76843976b6e385.mockapi.io/

new TodoList ({
    apiURL: "https://6347f663db76843976b6e385.mockapi.io",
    domELT: "#app"
});