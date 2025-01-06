export function Tabs(props) {
  const tabs = ['All', 'Open', 'Completed'];

  const { todos } = props;

  return (
    <nav className='tab-container'>
      {tabs.map((tab, tabIndex) => {
        const numOfTasks =
          tab === 'All'
            ? todos.length
            : tab === 'Open'
            ? todos.filter((todo) =>
                !todo.completed
              ).length
            : tab === 'Completed' &&
              todos.filter((todo) =>
                todo.completed
              ).length

        return (
          <button className='tab-button' key={tabIndex}>
            <h4>
              {tab} <span> ({numOfTasks})</span>
            </h4>
          </button>
        );
      })}
    </nav>
  );
}
