export function ToDoCard(props) {

  const{todo} = props
  return (
    <>
      <div className="card todo-item">
          <p>
            {todo.text}
          </p>
          <div classaName="todo-buttons">
            <button><h6>Done</h6></button>
            <button><h6>Delete</h6></button>
          </div>

      </div>
    </>
  );
}
