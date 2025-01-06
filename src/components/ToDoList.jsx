import { ToDoCard} from "./ToDoCard"
export function ToDoList(props) {

  const {todos} = props
  return (
    <>

    {todos.map((todo,todoIndex) => {

        return(

            <ToDoCard  key={todoIndex} todo={todo}/>


        )


    })}
    </>
  );
}
