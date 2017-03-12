import React from 'react'

class UserInfo extends React.Component {

    constructor() {
        super();
        this.state = {
            userName: "Welcome ganesh "
        }
    }

    updateUserName(e) {
        this.setState({userName: e.target.value});
    }

    render() {
        return (
            <div>
                <h1> User Name : </h1>  {this.state.userName}
                <input type="text" onChange={this.updateUserName.bind(this)}/>
            </div>
        );
    }
}
export default UserInfo