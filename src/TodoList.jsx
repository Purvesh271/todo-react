import { useState } from "react";

export default function TodoList(){
    let[Todos,setTodos] = useState([{task:"",id:Date.now()}]);
    let[NewTodo,setNewTodo] = useState("");

    let add = ()=>{
        setTodos([...Todos, {task:NewTodo,id:Date.now()}]);
        setNewTodo("");
    }

    let updateTodoValue = (event)=>{
        setNewTodo(event.target.value);
    }

    return(
        <div>
            <h2>Todo List</h2>
            <input placeholder="add a task" value={NewTodo} onChange={updateTodoValue}></input>
            <button onClick={add}>Add Task</button>
            <br></br>
            <br></br>
            <br></br>

            <ul>
                
                {Todos.map((todo) => {
                    return <li key={todo.id}>{todo.task}</li>
                })}
            </ul>
        </div>
    );
}