import { Header } from './components/Header';
import { Tabs } from './components/Tabs';
import { ToDoList } from './components/ToDoList';
import { ToDoInput } from './components/ToDoInput';

function App() {
  const todos = [
    { text: 'Gym', completed: false },
    { text: 'Code', completed: false },
    { text: 'Sleep', completed: false },
  ];

  return (
    <>
      <Header todos={todos}/>
      <Tabs todos={todos}/>
      <ToDoList todos={todos} />
      <ToDoInput />
    </>
  );
}

export default App;
