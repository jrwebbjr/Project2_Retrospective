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
                                <div>
                                    <legend>Upload a new Photograph</legend>
                                    <div class="mb-3">
                                        <label for="photograph" class="form-label"> Photograph:</label>
                                        <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Photograph Link"/>
                                    </div>
                                    <div class="mb-3">
                                        <label for="title" class="form-label"> Title:</label>
                                        <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Photograph Title"/>
                                    </div>
                                    <div class="mb-3">
                                        <label for="photographer" class="form-label"> Photographer:</label>
                                        <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Name"/>
                                    </div>
                                </div>
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

