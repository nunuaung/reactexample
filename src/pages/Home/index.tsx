import React, { useContext, useState } from "react"
import "./index.css"
import Task, { item } from "../../components/task"
import Input from "../../components/Input"
import ToDoContext, { contextValue } from "../../context/toDoContext"
import Nav from "../../components/Nav"
import Protected from "../../components/protected"

const ToDo: React.FC = () => {
    const Context = useContext(ToDoContext)
    // const navigate = useNavigate()
    const [tasks, setTasks] = useState<Array<item>>([
        { id: 1, desc: "go to gym" },
        { id: 2, desc: "go home" },
    ])

    const [keyword, setKeyword] = useState<string>("")

    const addItem = () => {
        setTasks([...tasks, { id: tasks.length + 1, desc: keyword }])
        setKeyword("")
    }

    const deleteItem = (id: number) => {
        const updatedItem = tasks.filter((item) => item.id !== id)
        setTasks(updatedItem)
    }

    const updateItem = (value: item) => {
        const updateItem = tasks.map((item) => {
            if (value.id == item.id) {
                return value
            } else {
                return item
            }
        })

        setTasks(updateItem)
    }

    return (
        <Protected>
            <ToDoContext.Provider value={{ ...contextValue, title: "Welcome", deleteItem, updateItem }}>
                <Nav />
                <div className="pj-wrap">
                    <div className="title">
                        <h1>{contextValue.title}</h1>
                        {/* <button  onClick={()=> {navigate("/about")}}>Go to about</button> */}
                    </div>
                    <div className="todo-body">
                        <div className="todo">
                            <Input
                                placeholder={"add to do"}
                                value={keyword}
                                onChange={(e: {
                                    target: { value: React.SetStateAction<string> }
                                }) => {
                                    setKeyword(e.target.value)
                                }}
                            />
                            <button onClick={addItem}>ADD</button>
                        </div>

                        <div className="tasks">
                            {tasks.map((item, index) => {
                                return (
                                    <Task
                                        key={index}
                                        item={item}
                                    />
                                )
                            })}
                        </div>
                    </div>
                </div>
            </ToDoContext.Provider>
        </Protected>
    )
}

export default ToDo
