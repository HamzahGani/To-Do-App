const TodoItem = (props) => {
    
    
        return (
            <div className="todo-item">
                <input 
                    type="checkbox" 
                    checked={props.item.completed}
                    onChange={() => {props.handleChange(props.item.id)}}
                />
                {props.item.completed? <label><b>{props.item.listItem}</b></label>: <label>{props.item.listItem}</label>}
                <br/>
            </div>
        );    
}

export default TodoItem