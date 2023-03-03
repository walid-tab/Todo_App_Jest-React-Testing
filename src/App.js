import './App.css';
import Todos from './Components/Todos';

function App() {
  const tasks =[
    {id : 1 , title :  'task-1', completed: false},
    {id : 2 , title :  'task-2', completed: true},
    {id : 3 , title :  'task-3', completed: false}
  ]
  return (
    <div className="App">
      {
        tasks.map((todo, key)=>{
         return <Todos key={key} todo={todo}/>
        })
      }
      
    </div>
  );
}

export default App;
