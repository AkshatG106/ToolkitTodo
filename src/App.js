import './App.css';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';

function App() {
  return (
   <div className='hello'>
    <div className="bg-gray-500 w-500px h-500px mx-auto my-[200px] rounded-[20px]">
       <h1 className='mx-[120px] pt-[10px] text-[30px]'>Todo List</h1>
       <AddTodo />
       <Todos />
    </div>
   </div>

  );
}

export default App;
