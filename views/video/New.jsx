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
                                <div>
                                    <legend>Upload a new Video</legend>
                                    <div class="mb-3">
                                        <label for="formGroupExampleInput" class="form-label"> Video:</label>
                                        <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Video Link"/>
                                    </div>
                                    <div class="mb-3">
                                        <label for="formGroupExampleInput2" class="form-label"> Title:</label>
                                        <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Video Title"/>
                                    </div>
                                    <div class="mb-3">
                                        <label for="formGroupExampleInput2" class="form-label"> Director:</label>
                                        <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Name"/>
                                    </div>
                                </div>
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
