import {useState} from "react";
import {v4 as uuidv4} from "uuid";


export default function TodoList(){
    let [todo, setTodo]=useState([]);
    let [newTask, setTask]=useState("");



    function addItem(){
        setTask("");

        if(newTask!=""){
            setTodo((todo)=>{
                return [...todo,{task:newTask , id: uuidv4(), isDone:false}];
            });
        }
        }
        
        
    function updateTask(event){
        setTask(event.target.value);
    }

    function removeItem(id){
        setTodo((prevTodo)=>(prevTodo.filter((item)=>( item.id!=id))));
    }

    function markDone(id){
        setTodo((prevTodo)=>(prevTodo.map((item)=>
            item.id==id? {...item, isDone: !item.isDone} : item
        )))
    }

    function markAllDone(){
        setTodo((prevTodo)=>(prevTodo.map((item)=>({...item,isDone:true}))));
    }

    return (
        <>
        <input type="input" placeholder="add a task..." id="Input" style={{height: "30px",}} onChange={updateTask} value={newTask}></input>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button onClick={addItem}>Add Task</button>

        <br></br> <br></br><br></br>
        <hr></hr>
        <h4>Tasks To do</h4>
        <ul>
            {todo.map((item)=>{
            return <li key={item.id}>
                {item.isDone?
                    <span style={{textDecoration:"line-through"}}>{item.task}</span> :
                    <span>{item.task}</span>
                }
                &nbsp;&nbsp;&nbsp;&nbsp;
                <button onClick={()=>{removeItem(item.id)}}>Delete</button>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <button onClick={()=>markDone(item.id)}> {item.isDone? "Undo": "Mark as Done"}</button>
                </li>
            })}
        </ul>
        <button onClick={()=>markAllDone()}>Mark all done</button>
        </>
    )
}