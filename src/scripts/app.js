const todo = new TodoComponent();

todo.mount(document.getElementById("todo"));

setInterval(() => {
  todo.addItem(`Dodane później ${new Date().getTime()}`);
}, 1000);

const todo1 = new TodoComponent();

todo1.mount(document.getElementById("todo-1"));
