import { createContext } from "react";
import { TodoContentType } from "./TodoProvider";

export const TodoContext = createContext({} as TodoContentType);
