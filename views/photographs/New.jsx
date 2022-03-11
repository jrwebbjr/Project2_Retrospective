const React = require("react");
const DefaultLayout = require("../layout/Default.jsx");

class New extends React.Component {
    render(){
        return (
            <DefaultLayout>
                <div>
                    <body>
                        <form action="/photographs" method="post">
                            <fieldset>
                                <legend>Upload a new Photograph</legend>
                                <label>
                                    Photograph:<input type="text" name="photograph" placeholder="Upload HTTP Photo Link"/>
                                </label>
                                <label>
                                    Title:<input type="text" name="title" placeholder="Title of Photograph"/>
                                </label>
                                <label>
                                    Photographer:<input type="text" name="name" placeholder="Photographers Name"/>
                                </label>
                            </fieldset>
                            <input type="Submit" value="upload new photograph" />
                        </form>
                    </body>
                </div> 
            </DefaultLayout> 
        )
    }
}

module.exports = New;