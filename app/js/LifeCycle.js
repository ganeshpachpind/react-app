import React from 'react'

class LifeCycle extends React.Component {

    constructor() {
        super();
        this.state = {
            name: 'Ganesh'
        }
    }

    componentWillMount() {
        this.setState({name: 'Changed Name'})
        console.log('componentWillMount');
    }

    componentDidMount() {
        this.setState({name: 'Changed Name again'})
        console.log('componentDidMount');
    }

    render() {
        console.log('render called ');
        return (<h1> Hello</h1>);
    }
}


export default LifeCycle