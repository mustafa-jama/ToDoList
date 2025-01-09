export function ToDoCard(props) {

  const{todo, handleDelete, todoIndex, handleDone}= props
  return (

      <div className="card todo-item">
          <p>
            {todo.text}
          </p>
          <div classaName="todo-buttons">
            <button onClick={() => handleDone(todoIndex)}disabled={todo.completed}>
              <h6>Done</h6>
              </button>
            <button  onClick={()=> handleDelete(todo)}>
              <h6>Delete</h6>
              </button>
          </div>

      </div>

  );
}
