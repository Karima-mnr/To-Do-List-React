import React , {useState} from "react";
function ToDoList(){

    const [tasks , setTasks] = useState(["Learn react"]);
    const [newTasks , setNewTasks] = useState("");

    function handleInputChange(event){
       setNewTasks(event.target.value)
    }
    function AddTasks(){
        if(newTasks.trim() !== ""){
            setTasks(t => [...t , newTasks]);
            setNewTasks("");
        }

    }
    function DeleteTasks(index){
        const updateTsks = tasks.filter((element , i) => i !== index);
        setTasks(updateTsks);
    }
    function moveTaskUp(index){
        if(index > 0){
            const updateTasks = [...tasks];
           [ updateTasks[index] , updateTasks[index -1]] = [ updateTasks[index -1] , updateTasks[index]];
           setTasks(updateTasks);
        }

    }
    function moveTaskDown(index){
        if(index < tasks.length -1){
            const updateTasks = [...tasks];
           [ updateTasks[index] , updateTasks[index +1]] = [ updateTasks[index +1] , updateTasks[index]];
           setTasks(updateTasks);
        }
    }
    return(
        <div className="ToDoList">
            <h1>To-Do-List</h1>
            <div>
                <input type="text" placeholder="Enter a task ..." value={newTasks} onChange={handleInputChange} />
                <button className="TDL-btn" onClick={AddTasks}>ADD</button>
            </div>
            <ol>
                {tasks.map((task , index) => 
                <li key={index}>
                    <span className="text">{task}</span>
                    <button className="deleteBtn" onClick={ () => DeleteTasks(index)}>DELETE</button>
                    <button className="moveBtn" onClick={() => moveTaskUp(index)}>UP</button>
                    <button className="moveBtn" onClick={() => moveTaskDown(index)}>DOWN</button>
                </li>)}
            </ol>
        </div>
    );
}
export default ToDoList