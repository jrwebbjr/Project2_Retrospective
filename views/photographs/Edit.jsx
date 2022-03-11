const React = require("react");

const DefaultLayout = require("../layout/Default.jsx");

class Edit extends React.Component {
    render() {
        return (
            <DefaultLayout title="Edit Post">
                <form action={`/photographs/${this.props.photograph._id}?_method=PUT`} method ="POST">
                Photograph: <input type="text" name="photograph" defaultValue={this.props.photograph.photograph}/><br/>
                Title: <input type="text" name="title" defaultValue={this.props.photograph.title}/><br/>
                Photographer: <input type="text" name="photographer" defaultValue={this.props.photograph.photographer}/><br/>
                <input type="submit" value="Submit Changes"/>
                </form>
            </DefaultLayout>
        )
    }
}
module.exports = Edit;