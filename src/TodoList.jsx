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

    let deleteTask = (id)=>{
        console.log(id,"deleted");
        setTodos(Todos.filter((todo) => todo.id !=id));

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
                
                {Todos.map((todo) => (
                    <li key={todo.id}>
                        <span> {todo.task} </span>
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        <button onClick={()=>{deleteTask(todo.id)}}>delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}