interface Todo {
  title: string;
  description: string;
  id: number;
}
function App() {
  const todos: Todo[] = [
    { title: "Apil", description: "Look into algo trading", id: 1 },
    {
      title: "Sulabh",
      description: "Look into sulabhs ecommerce website",
      id: 2,
    },
  ];
  return (
    <div>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  );
}

export default App;

function Todo({ todo }: { todo: Todo }) {
  return (
    <table>
      <span>{todo.id} </span>
      <span>{todo.title} </span>
      <span>{todo.description} </span>
    </table>
  );
}
