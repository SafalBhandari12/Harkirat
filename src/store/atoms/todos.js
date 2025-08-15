import { atom, selector } from "recoil";

export const todosAtom = atom({
  key: "todosAtom",
  default: [],
});

export const filterAtom = atom({
  key: "filterAtom",
  default: "",
});

export const filteredTodosSelector = selector({
  key: "filteredTodosSelector",
  get: ({ get }) => {
    const todos = get(todosAtom);
    const filterText = get(filterAtom).toLocaleLowerCase();

    return todos.filter(
      (todo) =>
        todo.title.toLowerCase().includes(filterText) ||
        todo.description.toLowerCase().includes(filterText)
    );
  },
});
