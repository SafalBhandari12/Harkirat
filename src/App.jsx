import "./App.css";
import {
  atomFamily,
  RecoilRoot,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";
import { todosAtomFamily } from "./atoms";
import { useEffect } from "react";

function App() {
  return (
    <RecoilRoot>
      <Todo id={1} />
      <Todo id={2} />
      <Todo id={2} />
      <Todo id={2} />
      <Todo id={2} />
      <Todo id={2} />
      <UpdatedTodo />
    </RecoilRoot>
  );
}

function UpdatedTodo() {
  const updateTodo = useSetRecoilState(todosAtomFamily(2));
  useEffect(() => {
    setTimeout(() => {
      updateTodo({
        id: "2",
        title: "I  can change anything",
        description: "I am safal",
      });
    }, 2000);
  }, []);

  return <div>Hello</div>;
}

function Todo({ id }) {
  const todo = useRecoilValue(todosAtomFamily(id));
  return (
    <>
      {todo.title}
      {todo.description}
      <br />
    </>
  );
}

export default App;
