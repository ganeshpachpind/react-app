import React from 'react'
class Hello extends React.Component {
    constructor() {
        super();
        this.state = {
            txt: "state value by using constructor"
        }
    }

    update(e) {
        this.setState({
            txt: e.target.value
        });
    }

    render() {
        return (
            <div>
                <input type="text" onChange={this.update.bind(this)}/><br/>
                <b>Prop values are managed by the parent component , State values are managed by current component</b>
                <b>Value of prop someNum </b> {this.props.someNum}<br/>
                <b>Value of prop someTxt </b> {this.props.someTxt}<br/>
                <b>Value of state TXT </b> {this.state.txt}<br/>
                <h1>This is class Component which can have State </h1>
            </div>
        );
    }
}

Hello.propTypes = {
    someNum: React.PropTypes.number.isRequired,
    someTxt: React.PropTypes.string
};


Hello.defaultProps = {
    someTxt: "This is default text"
};


export default Hello