import React from "react";
import ContactCard from "./ContactCard";
import LoggedIn from "./LoggedIn";

let contact = {
    name:"Contact Name", 
    phone:"082", 
    email:"a@b.com", 
    imgUrl:"http://placekitten.com/300/200"
}


function Footera() {
    return (
        <div className="footer">
            <footer>Footer</footer>
            <ContactCard contact={contact} />
        </div>
    );
}

class Footer extends React.Component {
    
    myMethod(){
        //this is an example. a method is not required
    }
    
    render() {
        return(
            <div className="footer">
            <footer>Footer</footer>
            <ContactCard contact={contact} />
            <LoggedIn />
        </div>
        )
    }
}

export default Footer