import Greeting from "./Greeting"
import TodoItem from "./TodoItem";
import todoData from "../todoData"
import React from "react";


class MainContent extends React.Component {
    constructor(){
        super()
        this.state={
            todos:todoData
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(id) {
        
        this.setState((prevState) => {
            const updatedTodos = prevState.todos.map((todo) =>{
                if (todo.id === id) {
                    alert(id);
                    //todo.completed? todo.completed=false: todo.completed=true;
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                    //todo.completed = !todo.completed;
                }
                return todo;
            })
            return {
                todos: updatedTodos
            }
        })
        //alert("changed")
    }

    render(){
        console.log(this.state.todos);

        const todoComponents = this.state.todos.map((item) => {
            return(
                <TodoItem 
                    key={item.id} 
                    item={item} 
                    handleChange={this.handleChange} 
                />
            )
        })
        return(
            <div className="todo-list">
                <Greeting />
                {todoComponents}
            </div>
        );
    }
}

export default MainContent