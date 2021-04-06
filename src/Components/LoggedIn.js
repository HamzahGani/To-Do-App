
import React from 'react';

class LoggedIn extends React.Component {
    constructor() {
        super();
        this.state = {isLoggedIn: false}
    }

    render() {
        return(
            <div>
                <h3>You are currently logged {this.state.isLoggedIn? "IN":"OUT"}</h3>
            </div>
        )
    }

}

export default LoggedIn