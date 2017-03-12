var React = require('react');
var ReactDOM = require('react-dom');


let Hello = React.createClass({
    render: function () {
        return ( <h1>Hello</h1>) ;
    }
});


ReactDOM.render(<Hello/>, document.getElementById("app"))