const React = require("react");
const DefaultLayout = require("../layout/Default.jsx");

class New extends React.Component {
    render(){
        return (
            <DefaultLayout>
                <div>
                    <body>
                        <form action="/video" method="post">
                            <fieldset>
                                <legend>Upload a new Video</legend>
                                    <label className="form-label"> Video:</label>
                                    <input type="text" className="form-control" name="video" placeholder="Video Link"/>
                                    <label className="form-label"> Title:</label>
                                    <input type="text" className="form-control" name="title" placeholder="Video Title"/>
                                    <label className="form-label"> Director:</label>
                                    <input type="text" className="form-control" name="director" placeholder="Name"/>
                            </fieldset>
                            <input type="Submit" value="upload new video" />
                        </form>
                    </body>
                </div> 
            </DefaultLayout> 
        )
    }
}

module.exports = New;
