import { atomFamily, selectorFamily } from "recoil";
import { TODOS } from "./todos";
import axios from "axios";

export const todosAtomFamily = atomFamily({
  key: "todosAtomFamily",
  default: selectorFamily({
    key: "todosSelectorFamily",
    get: function (id) {
      return async function ({ get }) {
        await new Promise((resolve) => setTimeout(resolve, 5000));
        const res = await axios(`https://dummyjson.com/todos/${id}`);
        return res.data;
      };
    },
  }),
});
