import './App.css';
import AddTodo from './Components/addtodo';
import ListTodo from './Components/listtodo';

function App() {
  return (
    <div className="App">
      <AddTodo />
      <ListTodo />
    </div>
  );
}

export default App;