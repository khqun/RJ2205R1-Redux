import TodoListItem from "./TdoListItem";
import { useSelector } from 'react-redux'


export default function TodoList() {
    const todos = useSelector(state => state.todos);
    return(
        <div>
            {todos.map((data)=>{
                return (
                    <TodoListItem todo={data} key={data.id}/>
                )
            })}
        </div>
    )
}