import {useState} from "react";
import {v4 as uuidv4} from "uuid";

export default function TodoList(){
    let [todo, setTodo]=useState([]);
    let [newTask, setTask]=useState("");

    function addItem(){
        setTask("");

        if(newTask!=""){
            setTodo((todo)=>{
                return [...todo,{task:newTask , id: uuidv4()}];
            });
        }
        }
        
        
    function updateTask(event){
        setTask(event.target.value);
    }

    function removeItem(id){
        setTodo((todoList)=>(todoList.filter((item)=>( item.id!=id))));
    }

    return (
        <>
        <input type="input" placeholder="add a task..." id="Input" style={{height: "30px",}} onChange={updateTask} value={newTask}></input>
        <button onClick={addItem}>Add Task</button>

        <br></br> <br></br><br></br>
        <hr></hr>
        <h4>Tasks To do</h4>
        <ul>
            {todo.map((item)=>{
            return <li key={item.id}>
                <span>{item.task} &nbsp;&nbsp;&nbsp;</span> 
                <button onClick={()=>{removeItem(item.id)}}>Delete</button>
                </li> 
            
            })}
        </ul>
        </>
    )
}