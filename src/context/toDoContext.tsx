import { createContext } from "react";
import { item } from "../components/task";

type Props = {
    title: string,
    deleteItem: (id: number) => void,
    updateItem: (item : item) => void
}

export const contextValue:Props = {
    title: "ddddfsf",
    deleteItem: () => {},
    updateItem: () => {}
}

const toDoContext = createContext(contextValue)

export default toDoContext