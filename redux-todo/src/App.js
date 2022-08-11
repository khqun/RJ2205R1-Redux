import './App.css';
import TodoList from './components/TodoList';
import NewTodo from './components/NewTodo';
function App() {
  return (
    <div className="App">
      <h1>Todo list</h1>
      <div>
        <NewTodo />
      </div>
      <div>
        <TodoList />
      </div>
    </div>
  );
}

export default App;
