import "./App.css";
import {
  atomFamily,
  RecoilRoot,
  useRecoilState,
  useRecoilValue,
  useRecoilValueLoadable,
  useSetRecoilState,
} from "recoil";
import { todosAtomFamily } from "./atoms";

function App() {
  return (
    <RecoilRoot>
      <Todo id={1} />
      <Todo id={2} />
      <Todo id={2} />
      <Todo id={2} />
      <Todo id={2} />
      <Todo id={2} />
    </RecoilRoot>
  );
}

function Todo({ id }) {
  const todo = useRecoilValueLoadable(todosAtomFamily(id));
  console.log(todo);
  if (todo.state == "loading") {
    return <div>Loading..</div>;
  } else if (todo.state == "hasValue") {
    return (
      <>
        {todo.contents.todo}
        {todo.contents.completed}
        <br />
      </>
    );
  }
}

export default App;
