import Greeting from "./Greeting"
import TodoItem from "./TodoItem";
import todoData from "../todoData"


function MainContent() {
    const todoComponents = todoData.map((item) => {
        return(
            <TodoItem key={item.id} list={item} />
        )
    })
    return(
        <div className="todo-list">
            <Greeting />
            {todoComponents}
        </div>
    );
}

export default MainContent