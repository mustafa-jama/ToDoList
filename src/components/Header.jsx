export function Header(props) {

  const {todos} = props

    const isTaskPlural = todos.length === 1
  return (
    <header>
      <h1 className='text-gradient'> You have {todos.length} open {isTaskPlural ? "task":"tasks"}.</h1>
    </header>
  );
}
