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
                                <legend>Upload new Video</legend>
                                <label>
                                    Video:<input type="text" name="video" placeholder="Upload Video Link"/>
                                </label>
                                <label>
                                    Title:<input type="text" name="title" placeholder="Title of Video"/>
                                </label>
                                <label>
                                    Director:<input type="text" name="director" placeholder="Directors Name"/>
                                </label>
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