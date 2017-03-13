import React from 'react'

class UserInfo extends React.Component {

    constructor() {
        super();
        this.state = {
            userName: "Welcome Ganesh "
        }
    }

    updateUserName() {
        this.setState(
            {
                userName: this.userName.value
            }
        );
    }

    render() {
        return (
            <div>
                <h1> User Name : </h1>  {this.state.userName}
                <input ref={(node) => this.userName = node} type="text" onChange={this.updateUserName.bind(this)}/>
            </div>
        );
    }


}

UserInfo.propTypes = {
    userType: (props, propName, component) => {
        if (!(propName in props)) {
            return new Error('Field is Required ')
        } else if (props[propName].type !== 'string') {
            return new Error('required to be string')
        }
    }
};

export default UserInfo