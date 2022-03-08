const React = require("react");
const DefaultLayout = require("../Default.jsx");

class New extends React.Component {
    render(){
        return (
            <div>
                <form action="/photographs" method="post">
                    <fieldset>
                        <legend>Upload a new Photograph</legend>
                        <label>
                            Photograph:<input type="text" name="photograph" placeholder="Upload Photograph"/>
                        </label>
                        <label>
                            Title:<input type="text" name="title" placeholder="Title of Photograph"/>
                        </label>
                        <label>
                            Photographer:<input type="text" name="name" placeholder="Photographers Name"/>
                        </label>
                        <label>
                            Camera:<input type="text" name="camera" placeholder="Camera/Gear used"/>
                        </label>
                        <label>
                            Is Image for Sale?<input type="checkbox" name="isImageForSale"/>
                        </label>
                    </fieldset>
                    <input type="Submit" value="upload new photograph" />
                </form>
            </div>  
        )
    }
}

module.exports = New;