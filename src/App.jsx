import { useState } from "react";
import {
  filterAtom,
  filteredTodosSelector,
  todosAtom,
} from "./store/atoms/todos";
import {
  RecoilRoot,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";

/*
2 input boxes (title,description) => atom
button
todos => atom
filter (gym) => atom
selector (the current set of todos)
*/
function App() {
  return (
    <RecoilRoot>
      <Todos />
    </RecoilRoot>
  );
}

function Todos() {
  const [titleValue, setTitleValue] = useState("");
  const [descriptionValue, setDescriptionValue] = useState("");

  const [todos, setTodos] = useRecoilState(todosAtom);
  const [filterText, setFilterText] = useRecoilState(filterAtom);

  const filterTodos = useRecoilValue(filteredTodosSelector);

  return (
    <>
      <div>
        <div className='inputDetails'>
          <input
            type='text'
            value={titleValue}
            onChange={(e) => {
              setTitleValue(e.target.value);
            }}
          />
          <input
            type='text'
            value={descriptionValue}
            onChange={(e) => {
              setDescriptionValue(e.target.value);
            }}
          />
          <button
            onClick={() => {
              setTodos((todos) => [
                ...todos,
                { title: titleValue, description: descriptionValue },
              ]);
              setTitleValue("");
              setDescriptionValue("");
            }}
          >
            Submit
          </button>
        </div>
      </div>
      <div>
        <input
          type='text'
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
        />
      </div>
      {filterTodos.map((todo) => (
        <div key={Math.random()}>
          {todo.title} {todo.description}
        </div>
      ))}
    </>
  );
}

export default App;
