const React = require("react");

const DefaultLayout = require("../layout/Default.jsx");

class Edit extends React.Component {
    render() {
        return (
            <DefaultLayout title="Edit Post">
                <form action={`/video/${this.props.video._id}?_method=PUT`} method ="POST">
                Video: <input type="text" name="video" defaultValue={this.props.video.video}/><br/>
                Title: <input type="text" name="title" defaultValue={this.props.video.title}/><br/>
                Director: <input type="text" name="director" defaultValue={this.props.video.director}/><br/>
                <input type="submit" value="Submit Changes"/>
                </form>
            </DefaultLayout>
        )
    }
}
module.exports = Edit;