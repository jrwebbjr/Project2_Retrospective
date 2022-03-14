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
                                    <label className="form-label"> Photograph:</label>
                                    <input type="text" className="form-control" name="photograph" placeholder="Photograph Link"/>
                                    <label className="form-label"> Title:</label>
                                    <input type="text" className="form-control" name="title" placeholder="Photograph Title"/>
                                    <label className="form-label"> Photographer:</label>
                                    <input type="text" className="form-control" name="photographer" placeholder="Name"/>
                            </fieldset>
                            <input className="d-flex" type="Submit" value="upload Photograph" />
                        </form>
                    </body>
                </div> 
            </DefaultLayout> 
        )
    }
}

module.exports = New;

