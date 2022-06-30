const todoForm = document.querySelector('#todo-form'),
      todoInput = todoForm.querySelector('input'),
      todoList = document.querySelector('#todo-list'),
      TODOS_KEY = 'todos',
      clearBtn = document.querySelector('.clearBtn');



  let todos = [];

      function saveTodos(){
        localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
        if(todos.length > 5){
          todoList.classList.add('scr');
        }else{
          todoList.classList.remove('scr');
        }
      }



      function deleteTodo(e){
        const li  = e.target.parentElement;
        li.remove();
        todos = todos.filter(todo => todo.id !== parseInt(li.id));
        saveTodos()
      }



      function paintTodo(newTodos){
        const li = document.createElement('li');
        li.id = newTodos.id;
        const span = document.createElement('span');
        span.innerText = newTodos.text;
        span.title = newTodos.text;
        const button = document.createElement('button');
        button.addEventListener('click',deleteTodo)

        todoList.appendChild(li);
        li.appendChild(span);
        li.appendChild(button);
      }



      function handleTodoSubmit(e){
        e.preventDefault();
        const inputValue = todoInput.value;
        todoInput.value = '';
        const newTodos = {
          text : inputValue,
          id : Date.now()
        }
        todos.push(newTodos)
        paintTodo(newTodos) 
        saveTodos()
      }

      todoForm.addEventListener('submit',handleTodoSubmit)

      const savedParse = localStorage.getItem(TODOS_KEY);

      if(savedParse !== null){
        const parseTodo = JSON.parse(savedParse);
        todos = parseTodo;
        parseTodo.forEach(paintTodo);
      }

      function AllClearFn(){
        todos = [];
        while(todoList.firstChild){
          todoList.removeChild(todoList.firstChild);
        }
        saveTodos()
      }

      clearBtn.addEventListener('click',AllClearFn)
     