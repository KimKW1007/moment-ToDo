const loginForm = document.querySelector('#login-form'),
      loginInput = loginForm.querySelector('input'),
      greeting = document.querySelector('#greeting'),
      loginBox = document.querySelector('.login-box'),
      todoBox = document.querySelector('.todo-box'),
      loading = document.querySelector('.loading'),
      logoutBox = document.querySelector('.logout-box')
      logoutBtn = logoutBox.querySelector('.logout-btn');

const HIDDEN_CLASS = 'hidden',
      USERNAME_KEY = 'username';



      function handleLoginSubmit(e){
        e.preventDefault();
        loginForm.classList.add(HIDDEN_CLASS);
        const username = loginInput.value;
        paintGreeting(username)
        localStorage.setItem(USERNAME_KEY,username);
      }

      function paintGreeting(username){
        greeting.innerText = `Hello ${username}`;
        document.title = `${username} | Today To Do`
        greeting.classList.remove(HIDDEN_CLASS);
        todoBox.classList.remove(HIDDEN_CLASS);
        logoutBox.classList.remove(HIDDEN_CLASS);
        loginBox.style.height = 'auto';
      }

     

      const savedUsername = localStorage.getItem(USERNAME_KEY);

      if(savedUsername === null){
        loginForm.classList.remove(HIDDEN_CLASS);
        loginForm.addEventListener('submit',handleLoginSubmit);
      }else{ 
        paintGreeting(savedUsername)
      }

      function reNameId(e){
        e.preventDefault();
        loginInput.value = '';
        document.title = `Today To Do`
        localStorage.removeItem(USERNAME_KEY);
        loginForm.classList.remove(HIDDEN_CLASS);
        loginForm.addEventListener('submit',handleLoginSubmit);
        greeting.classList.add(HIDDEN_CLASS);
        todoBox.classList.add(HIDDEN_CLASS);
        logoutBox.classList.add(HIDDEN_CLASS);
      }

      logoutBtn.addEventListener('click',reNameId)

      function loadingFn(){
        loading.classList.add('on');
        setTimeout(function(){
          loading.style.display = 'none';
        },800)
      }

      setTimeout(loadingFn,400)
      