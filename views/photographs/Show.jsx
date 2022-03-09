const React = require("react");

class Show extends React.Component {
    render(){
        const photograph = this.props.photograph;
        return (
            <div>
                <h1>Photograph Show Page</h1>
            </div>
        )
    }
}

module.exports = Show;