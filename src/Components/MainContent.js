import ContactCard from "./ContactCard";
import Greeting from "./Greeting"
import TodoItem from "./TodoItem";

let contact = {
    name:"Contact Name", 
    phone:"082", 
    email:"a@b.com", 
    imgUrl:"http://placekitten.com/300/200"
}

function MainContent() {
    return(
        <div className="todo-list">
            <Greeting />
            <TodoItem />
            <TodoItem />
            <TodoItem />
            <ContactCard contact={contact} />
        </div>
    );
}

export default MainContent