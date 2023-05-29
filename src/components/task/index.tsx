import React, { useContext, useState } from "react"
import styles from "./style.module.css"
import Input from '../Input'
import toDoContext from "../../context/toDoContext"

type Props = {
  item: item
}

export type item = {
  desc: string
  id: number
}

const Task: React.FC<Props> = ({ item }) => {
  const [input, setInput] = useState<string>("")
  const [editMode, setEditMode] = useState<boolean>(false)
  const { deleteItem, updateItem } = useContext(toDoContext)
  const updateValue = () => {
    if (editMode) {
      updateItem({ id: item.id, desc: input })
    }
    setEditMode(!editMode)
  }
  return (
    <div className={styles.task}>
      <p>{item?.id + "." + item?.desc}</p>
      {
        editMode && <Input placeholder={item.desc} className={styles.position} onChange={(e: { target: { value: React.SetStateAction<string> } }) => { setInput(e.target.value) }} />
      }

      <div className="link">
        <i
          className={`fa-solid fa-trash ${styles.mycolor}`}
          onClick={() => deleteItem(item.id)}
        ></i>
        <i className={`fa-solid fa-pen-to-square ${styles.mycolor}`}
          onClick={updateValue}
        ></i>
      </div>
    </div>
  )
}

export default Task
