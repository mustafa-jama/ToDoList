import { ToDoCard } from './ToDoCard';
export function ToDoList(props) {
  const { todos, selectedTab, } = props;



  const newList =
  selectedTab === 'All'
      ? todos
      : selectedTab === 'Open'
      ? todos.filter((todo) => !todo.completed)
      : selectedTab === 'Completed' && todos.filter((todo) => todo.completed);

  return (
    <>
      {newList.map((todo, todoIndex) => {
        return <ToDoCard key={todoIndex} todo={todo} todoIndex={todos.findIndex((t) => t.text === todo.text)} {...props}/>;
      })}
    </>
  );
}
