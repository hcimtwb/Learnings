## React.JS - Deploy 3 modern web app

Ref: https://www.youtube.com/watch?v=iKpkVKubvKk
Skills: 
- cache things, API, works with light mode vs dark mode, mobile vs desktop app
- load it live on the screen
- Firebase, Google's backend service to load things on server
- Authentification

Watch project 1:
High level structure: there are different folders

[1] src Folder: contains App.css, index.css, main.jsx
- [1.1] Parent components: App.jsx, contains <Header/>, <Tabs/>,<TodoList/>, <TodoInput/>
- [1.1] Child Components: Functional components: Header.jsx, Tabs.jsx, TodoCard.jsx, TodoInput.jsx, TodoList.jsx
- [1.1] Child child components: From TodoList.jsx, we have (multiple) <TodoCard/> embedded inside
>> component content: contains a export function, and return jsx
- [1.2] main.jsx >> relates to [2] index.html
>> createRoot(document.getElementById('root').render(
   <StrictMode>
      <App/>
   </StrictMode>,)
  
[2] index.html file:
- contains: 
  <div id="root"></div>
  <script type="module" src="/src/main.jsx"></script>





