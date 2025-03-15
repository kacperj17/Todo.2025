import { TodoComponent } from "./components/todo";

const todo = new TodoComponent();

const appEl = document.getElementById('app')!;
const wrapper = document.createElement('div');
wrapper.classList.add('todo-component');

appEl.appendChild(wrapper);
todo.mount(wrapper);


