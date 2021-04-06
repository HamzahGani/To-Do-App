const TodoItem = (props) => {
    
    return (
        <div className="todo-item">
            <input 
                type="checkbox" 
                checked={props.list.completed}
                onChange={()=>{alert("changed")}}
            />
            <label>{props.list.listItem}</label><br/>
        </div>
    );
}

export default TodoItem