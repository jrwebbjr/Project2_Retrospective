const React = require("react");
const DefaultLayout = require("../layout/Default.jsx");

class New extends React.Component {
    render(){
        return (
            <DefaultLayout>
                <div>
                    <body>
                        <form action="/photographs" method="post">
                            <fieldset className="d-flex d-inline-flex p-2 bd-highlight">
                                <div className="d-flex align-items-center align-content-between flex-wrap flex-column">
                                    <legend>Upload a new Photograph</legend>
                                    <label>
                                        Photograph:<input type="text" name="photograph" placeholder="Upload HTTP Photo Link"/>
                                    </label><br/>
                                    <label>
                                        Title:<input type="text" name="title" placeholder="Title of Photograph"/>
                                    </label><br/>
                                    <label>
                                        Photographer:<input type="text" name="name" placeholder="Photographers Name"/>
                                    </label><br/>
                                </div>
                            </fieldset>
                            <input className="d-flex" type="Submit" value="upload new photograph" />
                        </form>
                    </body>
                </div> 
            </DefaultLayout> 
        )
    }
}

module.exports = New;

